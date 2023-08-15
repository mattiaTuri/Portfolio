import Container from "../shared/Container";

function StartPage() {
  return (
    <div id="home" className="h-screen">
      <Container>
        <div className="h-full w-full p-8 flex flex-col justify-center items-center relative">
          <div className="flex flex-col items-center">
            <span className="w-full text-center text-2xl lg:text-5xl md:text-start">
              Turina Mattia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl">FRONT-END</h1>
            <h1 className="text-5xl md:text-6xl lg:text-8xl md:text-end">
              DEVELOPER
            </h1>
          </div>
          <div className="relative top-10 lg:w-[50%]">
            <p className="text-sm lg:text-2xl text-center">
              I&apos;m a software developer, based in Verona, Italy. I&apos;m
              appassionate about the front-end with a focus on the world of
              graphics and animation
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StartPage;
