
import { useState } from "react";
import { GitBranch, Workflow, X, ArrowDown } from "lucide-react";

const projects = [
  {
    title: "AI-Based Microplastic Detection",
    description:
      "Deep learning based microscopic image analysis system designed to detect and classify suspected microplastic particles.",
    tech: ["YOLOv8", "React", "Flask", "SQLite"],
    github: "https://github.com/tanujadesai1122/microplastic_detection",
    flow: [
      "Microscopic Image Upload",
      "Image Preprocessing",
      "YOLOv8 Detection Model",
      "Particle Classification",
      "Analysis & Results",
    ],
  },
  {
    title: "Pipeline Leakage Detection",
    description:
      "A flow-sensor-based system that monitors pipeline flow readings and identifies potential leakage conditions.",
    tech: ["ESP32", "C++", "Flow Sensors", "IoT"],
    github: "",
    flow: [
      "Flow Sensor Input",
      "ESP32 Data Acquisition",
      "Flow Rate Comparison",
      "Leak Condition Analysis",
      "Alert System",
    ],
  },
  {
    title: "Law Assist",
    description:
      "An AI-powered legal assistance application that analyzes legal queries and helps retrieve related case information.",
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/tanujadesai1122/LowAssit",
    flow: [
      "Legal Query Input",
      "Query Processing",
      "Case Data Analysis",
      "Related Case Matching",
      "Results Display",
    ],
  },
  {
    title: "Medicine Toxicity Detection",
    description:
      "A machine learning application that analyzes medicine-related input data and predicts a toxicity result.",
    tech: ["Python", "Machine Learning", "Flask"],
    github:
      "https://github.com/tanujadesai1122/medical_toxicity_prediction",
    flow: [
      "Medicine Data Input",
      "Data Preprocessing",
      "Machine Learning Model",
      "Toxicity Prediction",
      "Result & Risk Score",
    ],
  },
];

function WorkflowModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="workflow-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <div className="section-label">SYSTEM ARCHITECTURE</div>
            <h2>{project.title}</h2>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close workflow"
          >
            <X size={22} />
          </button>
        </div>

        <p className="modal-description">
          Workflow overview of the project.
        </p>

        <div className="workflow-list">
          {project.flow.map((step, index) => (
            <div className="workflow-item" key={step}>
              <div className="workflow-box">
                <span className="workflow-number">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step}</h3>
              </div>

              {index !== project.flow.length - 1 && (
                <ArrowDown className="workflow-arrow" size={22} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">MY PROJECTS</div>

        <h2 className="section-title">
          Things I've <span className="gradient-text">built.</span>
        </h2>

        <p className="section-subtitle">
          Projects, experiments and applications built using
          AI, machine learning and software development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card project-card" key={project.title}>
              <div className="project-top">
                <span className="project-index">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <Workflow color="#a78bfa" size={22} />
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    <GitBranch size={17} />
                    View Code
                  </a>
                ) : (
                  <span className="btn btn-outline code-unavailable">
                    <GitBranch size={17} />
                    Code Unavailable
                  </span>
                )}

                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  <Workflow size={17} />
                  AI Flow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <WorkflowModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
