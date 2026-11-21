
import { GitBranch, Link as LinkIcon, Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="section-label">GET IN TOUCH</div>

          <h2>
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p>
            I'm always interested in learning, exploring new technologies
            and connecting with people in the tech community.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanujadesai2006@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary contact-email"
          >
            <Mail size={18} />
            Send Me an Email
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/tanujadesai1122"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tanuja-desai-16453933b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="footer">
          <a href="#home" className="logo">
            Tanuja<span className="gradient-text">.dev</span>
          </a>

          <p>Designed & built with React.</p>

          <span>© {new Date().getFullYear()} Tanuja Desai</span>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
