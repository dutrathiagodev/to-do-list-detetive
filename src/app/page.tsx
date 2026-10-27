import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Tasks } from "@/components/sections/tasks/tasks";

export default function Home() {
  return (
    <div className="min-h-screen bg-wood text-cream">
      <Header />
      <main>
        <Tasks />
      </main>
      <Footer />
    </div>
  );
}
