import { useState } from 'react';
import '../styles/Projects.css';

const projects = [
    {
      id: 1,
      title: "HexGuess",
      tags: ["iOS"],
      description:
        "A simple iOS game where players guess hex color codes based on displayed colors. Built to make learning hex codes feel more interactive and fun.",
      tech: ["Swift", "SwiftUI", "iOS"],
      categories: ["iOS"],
      preview: "hex",
    },
    {
      id: 2,
      title: "Messaging Application",
      tags: ["web development", "school projects"],
      description:
        "Built a web-based messaging app with a custom NoSQL document database that could be accessed over the network.",
      tech: ["REST APIs", "JSON", "HTTP", "NoSQL"],
      categories: ["school projects", "web development"],
      preview: "messaging",
    },
    {
      id: 3,
      title: "Code Compiler",
      tags: ["systems", "school projecs"],
      description:
        "Created a compiler for the ILOC language with features like register allocation and instruction scheduling to improve generated code performance.",
      tech: ["Compiler Design", "ILOC", "Systems"],
      categories: ["school projects"],
      preview: "compiler",
    },
    {
      id: 4,
      title: "Non-Prehensile Manipulation Planning",
      tags: ["robotics", "school projects"],
      description:
        "Built a motion planning system for a 7-DoF robot arm that could push and rearrange objects across a table using physics-based path planning.",
      tech: ["Python", "RRT", "Robotics", "Motion Planning"],
      categories: ["school projects"],
      preview: "robotics",
    },
  ];
const filters = ["all projects", "iOS", "web development", "school projects"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all projects");

  const filtered = projects.filter(p =>
    activeFilter === "all projects" || p.categories.includes(activeFilter)
  );

  return (
    <div className="project">
      <div className="proj-container">
        <div className="proj-header">
            <p className="proj-title">personal projects</p>
            <p className="proj-squiggle">〜〜</p>
            <p className="proj-subtitle">
              Things I build for fun, to solve<br />
              problems, and to keep learning.<br />
              Each project is a new adventure!
            </p>
        </div>

        <div className="proj">
          <div className="proj-controls">
            <div className="proj-filters">
              {filters.map(f => (
                <button
                  key={f}
                  className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="proj-grid">
            {filtered.map((proj, i) => (
              <div className="proj-card" key={proj.id} style={{"--i": i}}>
                <div className="proj-card-body">
                  <div className="proj-card-title-row">
                    <h3 className="proj-card-title">{proj.title}</h3>
                    <span className="proj-card-emoji">{proj.emoji}</span>
                  </div>
                  <div className="proj-card-tags">
                    {proj.tags.map(t => (
                      <span className="proj-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <p className="proj-card-desc">{proj.description}</p>
                  <div className="proj-card-footer">
                    <div className="proj-tech">
                      {proj.tech.map(t => <span key={t} className="tech-item">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;