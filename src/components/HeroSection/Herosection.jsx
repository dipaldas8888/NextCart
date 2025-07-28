import heroImage from "../../assets/img/hero-img.png"; // adjust path as needed

function Herosection() {
  return (
    <section className="relative w-full h-[80vh]">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to NextCart
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop shop for everything awesome
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Herosection;
