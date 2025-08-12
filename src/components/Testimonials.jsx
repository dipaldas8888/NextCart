import React from "react";
import TestimonialCard from "../components/TestimonialCard";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Donald Jackman",
      role: "Content Creator",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      rating: 5,
      text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    },
    {
      name: "Richard Nelson",
      role: "Instagram Influencer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      rating: 5,
      text: "The team is fantastic! The platform is very intuitive and perfect for scaling my content strategy.",
    },
    {
      name: "James Washington",
      role: "Digital Content Creator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
      text: "The best platform I’ve used for managing content. Super easy to learn, and the features are exactly what I need.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Testimonials</h1>
        <p className="text-gray-500">
          Hear what our happy customers have to say
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}
