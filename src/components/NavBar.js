"use client";
import { useState } from "react";
import "./navbar.css";
import { FaFeatherAlt } from "react-icons/fa";


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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <div className="navContent">
        <div className="logo">
          <img src="/assets/logo.png" style={{ width: 40, height: 'fit-content' }} />
          <p>Colegiul National<br /> „ Mihai Eminescu"</p>
        </div>

        <button className="nav_toggle" onClick={() => setOpen(!open)} aria-label="Meniu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className="nav_links">
        <li className="selected">Acasă</li>
        <li>Biografie</li>
        <li>Opere</li>
        <li>Galerie</li>
      </ul>
      {/* <div style={{display: 'flex', flex: 1, justifyContent: 'right'}}>
        <FaFeatherAlt size={30} color="#e6c69d"/>
      </div> */}
    </nav>
  );
}