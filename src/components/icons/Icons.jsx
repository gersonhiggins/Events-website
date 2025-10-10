import { useState, useEffect } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import './Icons.css'

export default function Icons() {
  const [scrollPosition, setScrollPosition] = useState("middle"); // top, bottom, middle

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const threshold = 5; // tolerancia de 5px

    if (scrollTop <= threshold) {
      setScrollPosition("top");
    } else if (scrollTop + windowHeight >= docHeight - threshold) {
      setScrollPosition("bottom");
    } else {
      setScrollPosition("middle");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // chequea al inicio
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className={`icons scroll-${scrollPosition}`}>
      <a href="https://www.instagram.com/casagrande.evento/" ><SlSocialInstagram /></a>
      <a href="https://www.facebook.com/casagrandevento" ><FaFacebookSquare /></a>
      <a href="https://wa.me/+584143025558/" ><FaWhatsappSquare /></a>
      <a href="https://mailto.higgins21alexandra@gmail.com" ><BiLogoGmail /></a>
      <a href="https://www.tiktok.com/@casagrandeventos1"><FaTiktok /></a>
    </div>
  );
}
