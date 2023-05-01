import Container from "../../shared/Container";
import { projects } from "../../../data/projects";
import ImageContainer from "./ImageContainer";

function Works() {
  return (
    <Container>
      <div className="w-full p-8">
        <div>
          <h1>WORKS</h1>
        </div>
        <div className="pt-40">
          {projects.map((project) => {
            return <ImageContainer key={project.id} project={project} />;
          })}
        </div>
      </div>
    </Container>
  );
}

export default Works;
