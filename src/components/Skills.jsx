
import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C++"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Deep Learning", "YOLO", "Computer Vision"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "Express", "Flask"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Arduino"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">TECHNICAL SKILLS</div>

        <h2 className="section-title">
          My <span className="gradient-text">toolkit.</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to develop, experiment and build.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div className="card skill-card" key={group.title}>
                <div className="skill-heading">
                  <Icon size={22} color="#a78bfa" />
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
