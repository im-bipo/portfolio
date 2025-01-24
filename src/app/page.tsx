import Experience from "@/components/custom/Experience";
import HeroContainer from "@/components/custom/HeroLander";
import ProjectCard from "@/components/custom/ProjectCard/ProjectCard";

const App = () => {
  return (
    <>
      <div className="">
        <HeroContainer />
        <Experience />
        <div className="container py-10">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <div>
            <div>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
