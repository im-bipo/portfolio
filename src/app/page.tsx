import Experience from "@/components/custom/Experience";
import HeroContainer from "@/components/custom/HeroLander";
import ProjectCard from "@/components/custom/ProjectCard/PinnedProject";
import OtherProjects from "@/components/custom/ProjectCard/Projects";
import { PinIcon } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="">
        <HeroContainer />
        <Experience />
        <div className="container my-10  border-b-2 border-zinc-800 py-10">
          <div className="text-3xl font-bold mb-8 flex">
            <h1 className="w-[90%]">Project</h1>
            <span className="text-zinc-400 w-[10%] flex items-center justify-center">
              <PinIcon className="w-6 h-6" />
            </span>
          </div>
          <div>
            <div>
              <ProjectCard />
            </div>
          </div>
        </div>
        <OtherProjects />
      </div>
    </>
  );
};

export default App;
