import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface MyNavLinkProps {
  href: string;
  text: string;
  sectionId: string;
  activeSection: string;
}


export const NavLink: React.FC<MyNavLinkProps> = ({
  href,
  text,
  sectionId,
  activeSection,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if the current sectionId matches the activeSection
    setIsActive(activeSection === sectionId);
  }, [activeSection, sectionId]);
  console.log(activeSection);

  return (
    <ScrollLink
      to={sectionId} // Target section ID for scrolling
      smooth={true} // Enable smooth scrolling
      duration={500} // Adjust scroll duration (optional)
      className={isActive ? "bg-yellow-500": ""}
    >

        {text}

    </ScrollLink>
  );
};
