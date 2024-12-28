const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-white">Cricket Blog</h1>
          <p>
            Stay updated with the latest cricket news, match analyses, and
            exciting stories from the cricket world.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-white transition-colors duration-200"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24H12.82v-9.294H9.692V11.25h3.127V8.436c0-3.1 1.893-4.787 4.656-4.787 1.325 0 2.463.099 2.796.144v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.456h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.325V1.325C24 .594 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.148 4.822 4.822 0 001.523 6.573 4.905 4.905 0 01-2.229-.616v.061a4.924 4.924 0 003.946 4.827 4.9 4.9 0 01-2.224.084 4.922 4.922 0 004.604 3.417A9.867 9.867 0 010 21.539a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.311.975.975 1.25 2.242 1.311 3.608.058 1.266.069 1.646.069 4.848s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.311 3.608-.975.975-2.242 1.25-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.311-.975-.975-1.25-2.242-1.311-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.311-3.608.975-.975 2.242-1.25 3.608-1.311 1.266-.058 1.646-.069 4.85-.069zm0-2.163C8.755 0 8.34.012 7.052.07 5.684.131 4.416.406 3.441 1.38 2.467 2.355 2.191 3.622 2.131 4.99.973 8.375.973 15.625 2.131 19.01c.06 1.368.336 2.635 1.31 3.61.975.975 2.243 1.25 3.611 1.31 1.288.059 1.703.07 4.948.07s3.661-.012 4.949-.07c1.368-.06 2.635-.336 3.61-1.31.975-.975 1.25-2.243 1.31-3.611.059-1.288.07-1.703.07-4.948s-.012-3.661-.07-4.949c-.06-1.368-.336-2.635-1.31-3.61-.975-.975-2.243-1.25-3.611-1.31C15.661.012 15.246 0 12 0zM12 5.838a6.162 6.162 0 00-6.162 6.162A6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.124a3.962 3.962 0 01-3.962-3.962A3.962 3.962 0 0112 8.038a3.962 3.962 0 013.962 3.962A3.962 3.962 0 0112 15.962zm4.406-10.845a1.44 1.44 0 100-2.882 1.44 1.44 0 000 2.882z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cricket Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
