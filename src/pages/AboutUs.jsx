import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Truck,
  Shield,
  Heart,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Seamless Shopping",
      description:
        "Intuitive interface designed for the perfect shopping experience",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping to get your products when you need them",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description:
        "Bank-level security ensuring your transactions are always protected",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Dedicated support team committed to your satisfaction",
    },
  ];

  const stats = [
    { number: "500K+", label: "Happy Customers" },
    { number: "1M+", label: "Orders Delivered" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime" },
  ];

  const values = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Focused",
      description:
        "Building connections between customers, sellers, and communities worldwide.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description:
        "Connecting markets across continents with seamless international commerce.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Excellence Driven",
      description:
        "Constantly innovating to deliver the highest quality shopping experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                NextCart
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing ecommerce with cutting-edge technology, seamless
              experiences, and unlimited possibilities for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      <section className="py-16 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2020 by a team of passionate entrepreneurs and tech
                innovators, NextCart emerged from a simple vision: to create the
                most intuitive, powerful, and accessible ecommerce platform in
                the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a small startup in a garage has grown into a
                global platform serving hundreds of thousands of businesses.
                We've never lost sight of our core mission – empowering
                businesses of all sizes to succeed in the digital marketplace.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Trusted by businesses worldwide
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Award-winning customer support
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Continuously evolving platform
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To democratize ecommerce by providing businesses with
                  enterprise-level tools and capabilities, regardless of their
                  size or technical expertise.
                </p>
                <div className="mt-6 flex items-center text-yellow-300">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  <span className="font-semibold">
                    Rated #1 Ecommerce Platform
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">NextCart?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our platform around the features that matter most to
              modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : ""
                }`}
              >
                <div
                  className={`text-blue-600 mb-4 ${
                    activeFeature === index ? "text-blue-700" : ""
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company
              culture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful businesses who've chosen NextCart as
            their ecommerce partner. Start your journey today and discover
            what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </div>
  );
};
export default AboutUs;
