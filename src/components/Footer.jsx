import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ minimal }) => {
  return (
    <footer className="bg-base-200 text-center p-6 shadow-inner">
      {minimal ? (
        <p className="text-sm text-gray-500">
          © 2025 DevLink.{" "}
          <a href="/terms" className="underline">
            Terms
          </a>{" "}
          |{" "}
          <a href="/privacy" className="underline">
            Privacy
          </a>
        </p>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <div>© 2025 DevLink. Build your developer network.</div>

          {/* Social icons */}
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-gray-800" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-blue-400" />
            </a>
          </div>

          <div className="flex gap-4">
            <a href="/about" className="underline">
              About
            </a>
            <a href="/contact" className="underline">
              Contact
            </a>
            <a href="/terms" className="underline">
              Terms
            </a>
            <a href="/privacy" className="underline">
              Privacy
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
