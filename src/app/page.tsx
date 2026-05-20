import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Differential } from "@/components/Differential";
import { Model6CSection } from "@/components/Model6CSection";
import { BlogPreview } from "@/components/BlogPreview";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Solutions />
      <Differential />
      <Model6CSection />
      <BlogPreview />
      <FinalCTA />
    </div>
  );
}
