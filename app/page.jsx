import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share </h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient">AI-Powered Prompt </span>
      <p className="desc text-center">
        Kapadia is your gateway to a revolution in education, where the fusion
        of cutting-edge AI technology and personalized learning experiences
        opens doors to boundless opportunities for growth and success.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
