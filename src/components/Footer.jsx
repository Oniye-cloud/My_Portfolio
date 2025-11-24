import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6 mt-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        © {currentYear} Cybersecurity Portfolio by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Cyb3r_Cure 
        </span>
        .
        All rights reserved.
      </p>

      <a href="https://twitter.com/omotosho_oniye" target="_blank"><i class="fab fa-x-twitter"></i></a>
<a href="https://github.com/Oniye-cloud" target="_blank"><i class="fab fa-github"></i></a>
<a href="https://instagram.com/cyb3r_cure" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://www.linkedin.com/in/ahmad-oniye-7886911b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fab fa-linkedin"></i></a>
    </motion.footer>
  );
};

export default Footer;