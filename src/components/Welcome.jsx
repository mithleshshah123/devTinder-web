import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const Welcome = () => {
  return (
    <div className="w-full overflow-x-hidden bg-base-100">
      {/* Navbar */}
      <Navbar minimal={false} />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-2xl px-6 animate-fadeIn">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg md:text-6xl">
            Welcome to <span className="text-primary">DevLink</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with developers around the world and showcase your skills.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-xl text-lg font-semibold bg-primary hover:bg-primary/80 shadow-lg transform hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="px-6 py-3 rounded-xl text-lg font-semibold border border-white text-white hover:bg-white hover:text-black shadow-lg transform hover:scale-105 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-200 text-base-content">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 animate-fadeIn">
            Why <span className="text-primary">DevLink?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-fadeUp delay-[100ms]">
              <figure className="px-6 pt-6">
                <img
                  src={feature1}
                  alt="Connect with Developers"
                  className="rounded-xl h-40 mx-auto object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-semibold mb-2">
                  Connect with Developers
                </h3>
                <p className="opacity-80">
                  Find developers worldwide, collaborate on projects, and grow
                  your network.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-fadeUp delay-[200ms]">
              <figure className="px-6 pt-6">
                <img
                  src={feature2}
                  alt="Showcase Your Skills"
                  className="rounded-xl h-40 mx-auto object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-semibold mb-2">
                  Showcase Your Skills
                </h3>
                <p className="opacity-80">
                  Create a profile, display your projects, and get noticed by
                  others.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-fadeUp delay-[300ms]">
              <figure className="px-6 pt-6">
                <img
                  src={feature3}
                  alt="Join the Community"
                  className="rounded-xl h-40 mx-auto object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-semibold mb-2">
                  Join the Community
                </h3>
                <p className="opacity-80">
                  Engage in discussions, ask questions, and help other
                  developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white text-center overflow-hidden">
        {/* Decorative Glow / Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Ready to <span className="text-white/90">Start Your Journey?</span>
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Join thousands of developers, collaborate on projects, and showcase
            your skills on{" "}
            <span className="font-semibold text-white">DevLink</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/login"
              className="px-8 py-3 rounded-xl text-lg font-semibold bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign Up Now
            </Link>

            <a
              href="#features"
              className="px-8 py-3 rounded-xl text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Welcome;
