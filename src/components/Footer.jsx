import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaThreads, FaFacebookF } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section className="bg-[rgb(16,16,16)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Logo + Tagline */}
            <div>
              <Link href="/" className="block text-2xl font-bold mb-4">
                Rakshak Command
              </Link>
              <p className="text-gray-300 text-sm">
                “Led by Ex-Servicemen and trusted across Jaipur, we deliver disciplined,
                24/7 protection for your home, business, and peace of mind.”
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
                <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
                <li><Link href="/guards" className="hover:text-yellow-400">Guards</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://maps.app.goo.gl/gBeHbh42iuJtgXMy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-yellow-400"
                >
                  <LuMapPin className="w-9 h-9 mr-2 text-yellow-400" />
                  <span className="text-sm">
                    P.N.- 1, 2 Narayan Dham 3rd, Rani Colony, Niwaru Road,
                    Jhotwara, Jaipur
                  </span>
                </a>

                <a href="tel:+918003001702" className="flex items-center hover:text-yellow-400">
                  <FaPhoneAlt className="w-4 h-4 mr-2 text-yellow-400" />
                  +91 8003001702
                </a>

                <a href="tel:+919351696417" className="flex items-center hover:text-yellow-400">
                  <FaPhoneAlt className="w-4 h-4 mr-2 text-yellow-400" />
                  +91 9351696417
                </a>

                <a
                  href="mailto:rakshakcommand@gmail.com"
                  className="flex items-center hover:text-yellow-400"
                >
                  <MdMail className="w-5 h-5 mr-2 text-yellow-400" />
                  rakshakcommand@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
           <div>
  <h5 className="text-xl font-semibold mb-4">Social Media</h5>

  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/profile.php?id=61576295347312"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rakshak Command on Facebook"
      className="hover:text-blue-400 transition"
    >
      <FaFacebookF className="w-6 h-6" />
    </a>

    <a
      href="https://wa.me/918003001702?text=Hello%20Rakshak%20Command%20Security%20Team!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rakshak Command on WhatsApp"
      className="hover:text-green-400 transition"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>

    <a
      href="https://www.instagram.com/rakshakcommand/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rakshak Command on Instagram"
      className="hover:text-red-400 transition"
    >
      <FaInstagram className="w-6 h-6" />
    </a>

    <a
      href="https://www.threads.com/@rakshakcommand"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rakshak Command on Threads"
      className="hover:opacity-80% transition"
    >
      <FaThreads className="w-6 h-6" />
    </a>

    {/* ✅ YOUTUBE */}
    <a
      href="https://www.youtube.com/@RakshakCommandSecurityServices"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rakshak Command on YouTube"
      className="hover:text-red-600 transition"
    >
      <FaYoutube className="w-6 h-6" />
    </a>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <footer className="w-full bg-[rgb(28,28,28)] text-center py-4">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="text-yellow-400 hover:underline">
            Rakshak Command
          </Link>
          . All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
