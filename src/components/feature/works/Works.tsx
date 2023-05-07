import Container from "../../shared/Container";
import { projects } from "../../../data/projects";
import ImageContainer from "./ImageContainer";

function Works() {
  return (
    <Container>
      <div className="w-full p-8">
        <div className="w-full flex justify-center">
          <h1 className="border-b border-[#faa916] text-2xl md:text-3xl">
            01 - PROJECTS
          </h1>
        </div>
        {projects.map((project) => {
          return <ImageContainer key={project.id} project={project} />;
        })}
      </div>
    </Container>
  );
}

export default Works;
