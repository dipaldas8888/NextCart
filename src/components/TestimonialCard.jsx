// TestimonialCard.jsx
export default function TestimonialCard({ name, role, image, rating, text }) {
  return (
    <div className="text-sm max-w-md w-full border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
        <img
          className="h-12 w-12 rounded-full"
          src={image}
          alt={`${name} profile`}
        />
        <div>
          <h1 className="text-lg font-medium text-gray-800">{name}</h1>
          <p className="text-gray-800/80">{role}</p>
        </div>
      </div>
      <div className="p-5 pb-7">
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                fill="#FF532E"
              />
            </svg>
          ))}
        </div>
        <p className="text-gray-500 mt-5">{text}</p>
      </div>
      <a href="#" className="text-red-500 underline px-5">
        Read more
      </a>
    </div>
  );
}
