
// import '../styles/Experience.css';


// function Experience(){
//     return(
//         <div className="exp-container">
//             <p>experience</p>
//         </div>
//     )
// }

// export default Experience;

import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    dates: "May 2025 – Aug 2025",
    type: "Internship",
    company: "Pinterest",
    role: "Software Development Intern",
    bullets: [
      "Worked on the iOS platform team to improve how links navigate inside the Pinterest app.",
      "Built a system that handles both in-app and web links, helping thousands of users get to content more smoothly every day.",
      "Helped launch the new navigation flow to production and tracked performance using internal monitoring tools.",
      "Automated part of the migration from older Objective-C code to Swift to make the codebase easier to maintain.",
      "Collaborated closely with the iOS platform team through code reviews, pull requests, and Agile team meetings.",
    ],
    tags: ["Swift", "iOS", "Objective-C", "Mobile", "Agile"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    logoAlt: "Pinterest",
  },
  {
    id: 2,
    dates: "May 2024 – Aug 2024",
    type: "Internship",
    company: "Pinterest",
    role: "Mobile Development Intern",
    bullets: [
      "Worked on the Pinterest iOS ads formats team to improve how users interact with ad content inside the app.",
      "Built a feature that opens ad links directly in the Pinterest app instead of sending users to an external browser.",
      "Helped launch the Board Sections for Ads feature and monitored its performance after release.",
      "Wrote automated tests and used internal tools to track real-user experience and app performance.",
      "Partnered with engineers and designers to write technical plans, review code, and ship new features.",
    ],
    tags: ["Swift", "iOS", "Testing", "Mobile", "UI/UX"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    logoAlt: "Pinterest",
  },
  {
    id: 3,
    dates: "Aug 2022 – May 2026",
    type: "Education",
    company: "Rice University",
    role: "B.A. in Computer Science",
    bullets: [
      "GPA: 3.6/4.0",
      "Relevant Coursework: Concurrent Program Design, Reasoning about Algorithms, Computer Systems",
    ],
    tags: ["Algorithms", "Systems"],
    logo: "https://1000logos.net/wp-content/uploads/2021/07/Rice-Owls-logo.png",
    logoAlt: "Rice",
  },
];

function Experience() {
  return (
    <div className="exp-container">
      <div className="exp-header">
        <p className="exp-title">experience</p>
        <div className="exp-squiggle">〜〜</div>
        <p className="exp-subtitle">
          A few places I've worked, things I've built, and lessons I've learned along the way.
        </p>
      </div>

      <div className="exp-timeline">
        {/* Vertical line */}
        <div className="timeline-line"></div>

        <div className="timeline-entries">
          {experiences.map((exp, i) => (
            <div className="timeline-entry" key={exp.id}>
              <div className="entry-meta">
                <span className="entry-dates">{exp.dates}</span>
                <span className="entry-type">{exp.type}</span>
              </div>
              <div className="entry-card">
                <div className="card-header">
                  <img
                    className="company-logo"
                    src={exp.logo}
                    alt={exp.logoAlt}
                  />
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="company-role">{exp.role}</p>
                  </div>
                </div>
                <ul className="card-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {exp.tags.length > 0 && (
                  <div className="card-tags">
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="timeline-end-dot" /> */}
        {/* <FishingHook className="timeline-end-dot"/> */}
      </div>


    </div>
  );
}

export default Experience;