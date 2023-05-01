import Container from "../../shared/Container";
import { projects } from "../../../data/projects";
import ImageContainer from "./ImageContainer";

function Works() {
  return (
    <Container>
      <div className="w-full p-8">
        <div className="border-b border-[#faa916] max-w-max">
          <h1>01 - WORKS</h1>
        </div>
        {projects.map((project) => {
          return <ImageContainer key={project.id} project={project} />;
        })}
      </div>
    </Container>
  );
}

export default Works;
