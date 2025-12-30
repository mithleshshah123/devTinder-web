import React, { useRef, useEffect } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero.jpg";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const Welcome = () => {
  const connectRef = useRef(null);
  const showcaseRef = useRef(null);
  const communityRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Basic SEO polish
  useEffect(() => {
    document.title = "DevLink – Connect Developers Worldwide";
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-base-100">
      <Navbar minimal={true} />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-primary">DevLink</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with developers worldwide and build meaningful
            collaborations.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-xl text-lg font-semibold bg-primary hover:bg-primary/80 transition"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl text-lg font-semibold border border-white hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
            Why <span className="text-primary">DevLink?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div
              onClick={() => scrollTo(connectRef)}
              className="cursor-pointer card bg-base-100 shadow-xl hover:-translate-y-2 transition"
            >
              <figure className="pt-6">
                <img src={feature1} className="h-40 mx-auto object-contain" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">
                  Connect with Developers
                </h3>
                <p className="opacity-80">
                  Build strong developer connections.
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollTo(showcaseRef)}
              className="cursor-pointer card bg-base-100 shadow-xl hover:-translate-y-2 transition"
            >
              <figure className="pt-6">
                <img src={feature2} className="h-40 mx-auto object-contain" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">Showcase Your Skills</h3>
                <p className="opacity-80">
                  Highlight your projects & experience.
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollTo(communityRef)}
              className="cursor-pointer card bg-base-100 shadow-xl hover:-translate-y-2 transition"
            >
              <figure className="pt-6">
                <img src={feature3} className="h-40 mx-auto object-contain" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">Join the Community</h3>
                <p className="opacity-80">Learn, grow, and collaborate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section ref={connectRef} className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={feature1} className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Connect with Developers
            </h2>
            <p className="opacity-80 mb-6">
              Discover developers across technologies, regions, and experience
              levels. Collaborate on real-world projects.
            </p>
            <ul className="list-disc ml-6 space-y-2 opacity-80">
              <li>Skill-based matching</li>
              <li>Meaningful connections</li>
              <li>Project collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section ref={showcaseRef} className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Showcase Your Skills
            </h2>
            <p className="opacity-80 mb-6">
              Build a professional developer profile and let others discover
              your work.
            </p>
            <ul className="list-disc ml-6 space-y-2 opacity-80">
              <li>Project portfolio</li>
              <li>Tech stack highlights</li>
              <li>Developer visibility</li>
            </ul>
          </div>
          <img src={feature2} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* COMMUNITY */}
      <section ref={communityRef} className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={feature3} className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Join the Community</h2>
            <p className="opacity-80 mb-6">
              Engage in discussions, mentorship, and collaborative learning.
            </p>
            <ul className="list-disc ml-6 space-y-2 opacity-80">
              <li>Developer discussions</li>
              <li>Mentorship & support</li>
              <li>Knowledge sharing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16">What Developers Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Aarav Patel", "Full Stack Dev"],
              ["Sophia Williams", "Frontend Engineer"],
              ["Daniel Kim", "Backend Developer"],
            ].map(([name, role], i) => (
              <div key={i} className="card bg-base-100 shadow-xl p-6">
                <p className="italic opacity-80 mb-4">
                  “DevLink helped me grow my network and collaborate with
                  amazing developers.”
                </p>
                <h4 className="font-semibold">{name}</h4>
                <span className="text-sm opacity-60">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            ["10K+", "Developers"],
            ["5K+", "Projects"],
            ["25K+", "Connections"],
            ["40+", "Countries"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-5xl font-extrabold text-primary mb-2">
                {value}
              </h3>
              <p className="opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-base-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Frequently Asked Questions
          </h2>
          {[
            ["Is DevLink free?", "Yes, DevLink offers a free tier."],
            [
              "Can I showcase projects?",
              "Yes, you can add projects to your profile.",
            ],
            ["Who can join?", "Developers, designers, and tech enthusiasts."],
            [
              "How do connections work?",
              "Send and accept requests based on interests.",
            ],
          ].map(([q, a], i) => (
            <div key={i} className="collapse collapse-arrow bg-base-100 mb-4">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">{q}</div>
              <div className="collapse-content opacity-80">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Free",
                price: "$0",
                features: ["Profile", "Connections", "Community"],
              },
              {
                name: "Pro",
                price: "$9/mo",
                features: ["Unlimited Connections", "Project Highlights"],
                highlight: true,
              },
              {
                name: "Team",
                price: "$29/mo",
                features: ["Team Tools", "Priority Support"],
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`card p-8 shadow-xl ${
                  p.highlight
                    ? "bg-primary text-white scale-105"
                    : "bg-base-200"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-4xl font-extrabold mb-6">{p.price}</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map((f, idx) => (
                    <li key={idx}>✓ {f}</li>
                  ))}
                </ul>
                <Link to="/login" className="btn btn-neutral">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="opacity-90 mb-10">
          Join thousands of developers on DevLink today.
        </p>
        <Link
          to="/login"
          className="px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition"
        >
          Sign Up Now
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Welcome;
