import { Link } from "react-router-dom";

export default function ProductExample() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>

      {/* 4 per row on large screens */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link to="/" className="group">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
            src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$29.00</p>
        </Link>

        <Link to="/" className="group">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$39.00</p>
        </Link>

        <Link to="/" className="group">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$29.00</p>
        </Link>

        <Link to="/" className="group">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$49.00</p>
        </Link>
      </section>
    </>
  );
}
