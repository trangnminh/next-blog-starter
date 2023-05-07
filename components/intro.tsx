import { BLOG_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
        {`${BLOG_NAME}`}.
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        These{" "}
        <a
          href="https://www.youtube.com/watch?v=gJ50rvySDCk"
          className="bg-black text-white no-underline transition-all duration-200 hover:bg-white hover:text-black hover:underline"
        >
          chains
        </a>{" "}
        never leave me, I keep dragging them around.
      </h4>
    </section>
  );
};

export default Intro;
