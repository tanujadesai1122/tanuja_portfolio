
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">ABOUT ME</div>

        <h2 className="section-title">
          Turning ideas into <span className="gradient-text">intelligence.</span>
        </h2>

        <p className="section-subtitle">
          A little about my journey, interests and what I am building.
        </p>

        <div className="about-grid">
          <div className="card about-card">
            <h3>Who I Am</h3>

            <p>
              I am a B.Tech student specializing in Artificial Intelligence
              and Machine Learning. I enjoy building intelligent applications,
              exploring new technologies and developing projects that connect
              AI with real-world problems.
            </p>

            <p>
              My interests include machine learning, computer vision,
              deep learning, data analysis and full-stack development.
              I continuously work on improving my technical skills through
              projects and practical learning.
            </p>
          </div>

          <div className="card education-card">
            <div className="education-icon">🎓</div>
            <div className="section-label">EDUCATION</div>

            <h3>B.Tech — Artificial Intelligence & Machine Learning</h3>

            <p>D. Y. Patil Agriculture and Technical University</p>

            <span className="education-year">2024 – 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
