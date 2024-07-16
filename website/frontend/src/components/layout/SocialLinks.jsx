import { motion, transform } from "framer-motion";
import FacebookIcon from "../../assets/facebook.svg";
import YouTubeIcon from "../../assets/youtube.svg";
import MailIcon from "../../assets/mail.png";
import PhoneIcon from "../../assets/call.svg";

import "../../styles/layout.css";

const listVariants = {
  hidden: { y: -80 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, x: -64 },
  visible: { opacity: 1, x: -2 },
};

const SocialLinks = () => {
  const socialIcons = [
    {
      icon: FacebookIcon,
      alt: "Facebook",
      className: "bg-facebook",
      href: "https://www.facebook.com/phy.kamal.ahmed/",
    },
    {
      icon: YouTubeIcon,
      alt: "YouTube",
      className: "bg-red",
      href: "https://www.youtube.com/channel/@keyofphysicskamalahmed4744",
    },
    {
      icon: MailIcon,
      alt: "Mail",
      className: "bg-mail",
      href: "mailto:mr_kamal_physics@yahoo.com",
    },
    {
      icon: PhoneIcon,
      alt: "Phone",
      className: "bg-call",
      href: "tel:01005892842",
    },
  ];

  return (
    <motion.ul
      className="social-links"
      role="list"
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {socialIcons.map(({ alt, className, icon, href }) => (
        <motion.li
          key={alt}
          className={`social-link ${className}`}
          variants={itemVariants}
        >
          <a target="_blank" title={href} href={href}>
            <img src={icon} alt={alt} />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SocialLinks;
