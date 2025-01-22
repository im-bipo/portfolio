import Experience from "@/components/Experience";
import HeroContainer from "@/components/HeroLander";
import ProjectCard from "@/components/ProjectCard";

const page = () => {
  return (
    <>
      <div className="">
        <HeroContainer />
        <Experience />
        <div className="container py-10">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default page;
