import { projects } from "../../data/projects";

export async function getStaticPaths({ locales }: any) {
  const paths = projects.map((project) => ({
    params: {
      id: project.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const activeProject: any = projects.find((elem) => elem.id == params.id);

  return {
    props: {
      activeProject,
    },
  };
}

function Work() {
  return <div>ciao</div>;
}

export default Work;
