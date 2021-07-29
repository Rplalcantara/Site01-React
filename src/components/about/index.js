import React from "react";
import Menu from "../header/menu";
import Footer from "../footer/footer";
import aboutimg from "../../images/placeholder-about.jpg";

function About() {
  return (
    <>
      <Menu />
      <div className="about-container">
        <img src={aboutimg} className="about-img" alt="About" />
        <img src={aboutimg} className="about-img2" alt="About" />
        <span className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          pulvinar mauris. Donec egestas suscipit sem at gravida. Phasellus in
          felis porta, varius diam ut, auctor sapien. Sed quis viverra leo.
          Nullam tempus massa sit amet libero imperdiet, ac accumsan massa
          suscipit. Donec aliquam eleifend enim, eu iaculis risus finibus et.
          Etiam nec eleifend augue. Vivamus tellus dui, dignissim nec pretium
          sed, porttitor sit amet dolor. Nunc molestie enim risus, eget
          efficitur erat volutpat quis. Donec rhoncus est dui. Duis efficitur
          vitae justo ut elementum. Morbi nec justo faucibus magna aliquam
          aliquet ac sed leo. Quisque varius risus nec sapien ultricies, vitae
          ultricies nulla iaculis. Integer quis iaculis tellus. Quisque sodales
          ullamcorper massa ut convallis. Quisque dui nibh, cursus vitae lorem
          non, aliquet posuere libero. Morbi suscipit, enim non aliquet
          fringilla, urna lorem pellentesque lectus, ac egestas eros mi vel.
        </span>
        <span className="about-desc2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          pulvinar mauris. Donec egestas suscipit sem at gravida. Phasellus in
          felis porta, varius diam ut, auctor sapien. Sed quis viverra leo.
          Nullam tempus massa sit amet libero imperdiet, ac accumsan massa
          suscipit. Donec aliquam eleifend enim, eu iaculis risus finibus et.
          Etiam nec eleifend augue. Vivamus tellus dui, dignissim nec pretium
          sed, porttitor sit amet dolor. Nunc molestie enim risus, eget
          efficitur erat volutpat quis. Donec rhoncus est dui. Duis efficitur
          vitae justo ut elementum. Morbi nec justo faucibus magna aliquam
          aliquet ac sed leo. Quisque varius risus nec sapien ultricies, vitae
          ultricies nulla iaculis. Integer quis iaculis tellus. Quisque sodales
          ullamcorper massa ut convallis. Quisque dui nibh, cursus vitae lorem
          non, aliquet posuere libero. Morbi suscipit, enim non aliquet
          fringilla, urna lorem pellentesque lectus, ac egestas eros mi vel.
        </span>
      </div>
      <Footer />
    </>
  );
}

export default About;
