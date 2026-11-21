
import { GitBranch, Link as LinkIcon, ArrowDown, FileText } from "lucide-react";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <div className="hero-status">
            <span className="status-dot"></span>
            AI & MACHINE LEARNING DEVELOPER
          </div>

          <h1>
            Hi, I'm <span className="gradient-text">Tanuja Desai</span>
          </h1>

          <h2>
            I build <span className="gradient-text">intelligent</span>
            <br />
            digital solutions.
          </h2>

          <p>
            A passionate AI & Machine Learning developer exploring
            Deep Learning, intelligent applications and modern web
            technologies to solve real-world problems.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a
              href="https://github.com/tanujadesai1122"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <GitBranch size={18} />
              GitHub
            </a>

            <a href="/resume.pdf" download className="btn btn-outline">
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/tanuja-desai-16453933b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkIcon size={22} />
            </a>

            <a
              href="https://github.com/tanujadesai1122"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitBranch size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE PHOTO */}
        <div className="hero-image-area">
          <div className="hero-image-glow"></div>

          <div className="hero-image-frame">
            <img src="/profile.png" alt="Tanuja Desai" />
          </div>

          <div className="floating-card">
            <span className="gradient-text">AI / ML</span>
            <p>Building with intelligence</p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-indicator">
        <ArrowDown size={18} />
        <span>Explore</span>
      </a>
    </section>
  );
}

export default Hero;
