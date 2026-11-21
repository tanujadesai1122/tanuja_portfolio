
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <a href="#home" className="logo">
          Tanuja<span className="gradient-text">.dev</span>
        </a>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([name, link]) => (
            <a key={name} href={link} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
