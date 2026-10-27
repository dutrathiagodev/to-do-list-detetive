"use client";

import { useState } from "react";
import { EmptyState } from "@/components/sections/tasks/empty-state";
import { NewTaskForm } from "@/components/sections/tasks/new-task-form";
import { TaskCard } from "@/components/sections/tasks/task-card";
import { TaskSidebar } from "@/components/sections/tasks/task-sidebar";
import { useTasks } from "@/lib/use-tasks";
import { matchesFilter } from "@/lib/utils";
import type { TaskFilter } from "@/types/tasks";

export function TasksApp() {
  const { tasks, ready, addTask, toggleTask, removeTask } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>("todas");

  const done = tasks.filter((task) => task.done).length;
  const visible = tasks.filter((task) => matchesFilter(task, filter));

  return (
    <div className="flex flex-col lg:flex-row">
      <TaskSidebar total={tasks.length} done={done} filter={filter} onFilter={setFilter} />

      <div className="min-w-0 flex-1 p-2.5 sm:p-6">
        <div className="relative min-h-[760px] bg-cork px-4 pb-14 pt-9 shadow-board sm:px-10 sm:pt-11">
          <svg
            className="pointer-events-none absolute inset-0 size-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[
              [50, 14, 6, 46],
              [50, 14, 94, 40],
              [50, 14, 20, 96],
              [50, 14, 82, 92],
              [6, 46, 82, 92],
              [94, 40, 20, 96],
            ].map(([x1, y1, x2, y2]) => (
              <line
                key={`${x1}-${y1}-${x2}-${y2}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="stroke-string stroke-[2.5] opacity-85 [vector-effect:non-scaling-stroke]"
              />
            ))}
          </svg>

          <div className="relative">
            <NewTaskForm onAdd={addTask} />

            <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] items-start gap-x-8 gap-y-11">
              {visible.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  onToggle={toggleTask}
                  onRemove={removeTask}
                />
              ))}
            </ul>

            {ready && visible.length === 0 && (
              <EmptyState variant={tasks.length === 0 ? "vazio" : filter} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
