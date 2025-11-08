import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Logo & Contact Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-xl">Import Export Hub</span>
          </div>
          <p className="link link-hover">Alinagar, Gomastapur</p>
          <p className="link link-hover">Chapainawabganj, Bangladesh</p>
          <p className="link link-hover">
            Email:{" "}
            <a
              href="mailto:golapraj47@gmail.com"
              className="hover:text-primary transition-colors duration-300"
            >
              golapraj47@gmail.com
            </a>
          </p>
          <p className="link link-hover">
            Phone:{" "}
            <a
              href="tel:+8801707115247"
              className="hover:text-primary transition-colors duration-300"
            >
              01707115247
            </a>
          </p>
        </div>

        {/* Terms & Policies */}
        <div>
          <h6 className="footer-title text-lg font-bold mb-2">
            Terms & Policies
          </h6>
          <ul className="space-y-1 text-sm">
            <li className="link link-hover">1. Provide accurate information</li>
            <li className="link link-hover">2. No illegal use allowed</li>
            <li className="link link-hover">3. User data is protected</li>
            <li className="link link-hover">
              4. We hold no liability for misuse
            </li>
            <li className="link link-hover">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="footer-title text-lg font-bold mb-2">Follow Us</h6>
          <div className="flex gap-6 mt-2">
            {/* GitHub */}
            <a
              href="https://github.com/md-tahmid-hasan-golap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.435.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/watch?v=MB9SgSYw0Gw&t=32s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/g.lap.raj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Import Export Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
