import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10 mt-12 font-outfit">
      <div className="container mx-auto px-6 lg:px-20 sm:w-[83%]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 space-y-6 lg:space-y-0">
          {/* Logo and Info */}
          <div className="flex flex-col space-y-3">
            <img src="../logo.png" alt="Logo" className="w-[140px]" />
            <p className="text-gray-400 text-sm">
              Providing quality meals for every craving. Taste the difference
              today!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-[#E77917] transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-[#E77917] transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-[#E77917] transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-[#E77917] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links and Contact */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-gray-300">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-[#E77917] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#E77917] transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#E77917] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#E77917] transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:text-[#E77917] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-[#E77917] transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-[#E77917] transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-[#E77917] transition">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/catering" className="hover:text-[#E77917] transition">
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="/gift-cards"
                  className="hover:text-[#E77917] transition"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="/loyalty" className="hover:text-[#E77917] transition">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p className="text-sm mb-4">
              Feel free to reach out to us for any assistance or inquiries.
            </p>
            <ul className="text-sm space-y-3">
              <li className="flex items-center">
                <span className="text-[#E77917] mr-2">
                  <i className="fas fa-envelope"></i>
                </span>
                <a
                  href="mailto:support@yourcompany.com"
                  className="hover:text-[#E77917] transition"
                >
                  support@yourcompany.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-[#E77917] mr-2">
                  <i className="fas fa-phone"></i>
                </span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#E77917] transition"
                >
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-[#E77917] mr-2">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                123 Foodie Street, Flavor Town, FT 56789
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Tomato. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
