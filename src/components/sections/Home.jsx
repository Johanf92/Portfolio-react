export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
          Hi! Welcome to Johan's WebDev solutions
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
          dolorum officiis illum placeat debitis sit atque mollitia dignissimos
          provident adipisci aspernatur unde neque nesciunt excepturi
          distinctio? Sequi atque ut molestiae aliquam earum? Nemo adipisci
          autem assumenda excepturi exercitationem, expedita illum odit fugiat!
          Eius aut veritatis cum voluptatum ipsa iusto molestiae?
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#Projects"
            className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)]"
          >
            View Projects
          </a>

          <a
            href="#Contact"
            className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-yellow-500/10"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
