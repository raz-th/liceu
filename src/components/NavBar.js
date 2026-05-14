"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import { FaFeatherAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/NavContext";


export function FakeNavbar() {

  return (
    <nav className="navbar fake" style={{position: 'relative'}}>
      <div className="logo">
        <img src="/assets/logo.png" style={{ width: 20 }} />
      </div>

      <button className="nav_toggle" aria-label="Meniu">
        <span />
        <span />
        <span />
      </button>

      <ul className="nav_links">
        <li className="selected">Acasă</li>
        <li>Biografie</li>
        <li>Opere</li>
        <li>Galerie</li>
      </ul>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'right' }}>
        <FaFeatherAlt size={30} color="#e6c69d" />
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = usePathname();
  const { theme } = useTheme();
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(position)
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <div className="navContent">
        <div className="logo" style={theme ? {color: "#fff"} : {}}>
          <img src="/assets/logo.png" style={{ width: 40, height: 'fit-content' }} />
          <p>Colegiul National<br /> „ Mihai Eminescu"</p>
        </div>

        <button className="nav_toggle" onClick={() => setOpen(!open)} aria-label="Meniu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`nav_links ${theme ? "light" : ""}`} >
        <li className={nav == "/"?"selected":""} onClick={()=>setOpen(false)}><Link href={"/"}>Acasă</Link></li>
        <li className={nav == "/biografie"?"selected":""} onClick={()=>setOpen(false)}><Link href={"/biografie"}>Biografie</Link></li>
        <li className={nav.startsWith("/oper")?"selected":""} onClick={()=>setOpen(false)}><Link href={"/opere"}>Opere</Link></li>
        <li className={nav== "/galerie"?"selected":""} onClick={()=>setOpen(false)}><Link href={"/galerie"}>Galerie</Link></li>
      </ul>
      {/* <div style={{display: 'flex', flex: 1, justifyContent: 'right'}}>
        <FaFeatherAlt size={30} color="#e6c69d"/>
      </div> */}
    </nav>
  );
}