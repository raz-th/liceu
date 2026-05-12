"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import { FaFeatherAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function FakeNavbar() {

  return (
    <nav className="navbar fake">
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

export default function Navbar({light=false}) {
  const [open, setOpen] = useState(false);
  const nav = usePathname();
  
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
        <div className="logo" style={light ? {color: "#fff"} : {}}>
          <img src="/assets/logo.png" style={{ width: 40, height: 'fit-content' }} />
          <p>Colegiul National<br /> „ Mihai Eminescu"</p>
        </div>

        <button className="nav_toggle" onClick={() => setOpen(!open)} aria-label="Meniu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`nav_links ${light ? "light" : ""}`} >
        <li className={nav == "/"?"selected":""} ><Link href={"/"}>Acasă</Link></li>
        <li className={nav == "/biografie"?"selected":""} ><Link href={"/biografie"}>Biografie</Link></li>
        <li className={nav == "/opere"?"selected":""} >Opere</li>
        <li className={nav== "/galerie"?"selected":""} >Galerie</li>
      </ul>
      {/* <div style={{display: 'flex', flex: 1, justifyContent: 'right'}}>
        <FaFeatherAlt size={30} color="#e6c69d"/>
      </div> */}
    </nav>
  );
}