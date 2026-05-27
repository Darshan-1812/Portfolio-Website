import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Internship — most recent */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CrewAI / LLM Intern — R&D Team</h4>
                <h5>CrowdWisdomTrading (Remote)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and optimized LLM-based and multi-agent (CrewAI) workflows for AI research
              and automation. Contributed to prompt engineering, model evaluation, and AI pipeline
              testing to improve system reliability. Prepared daily technical reports reviewed
              directly by the CEO. Followed data privacy and secure AI development practices in a
              remote, production-focused R&D environment. (Sep 2025 – Dec 2025)
            </p>
          </div>

          {/* B.Tech */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Artificial Intelligence & Data Science</h4>
                <h5>Vishwakarma Institute of Information Technology, Pune</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech in AI & Data Science (2023–27), maintaining a CGPA of 8.72.
              Active member of the Entrepreneurship Development Cell as Associate General Secretary.
            </p>
          </div>

          {/* Higher Secondary */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PCMB — Higher Secondary (Science)</h4>
                <h5>Nashik Cambridge School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed the PCMB stream from Nashik Cambridge School (2021–2023), building a
              strong foundation in Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="career-achievements">
          <h3>Achievements <span>&</span> Certificates</h3>
          <ul>
            <li>
              <span className="career-ach-icon">🏆</span>
              <div>
                <strong>Published Dataset</strong> — Vegetable Image Dataset for Machine
                Learning Applications, published on <em>Mendeley Data</em> &amp; <em>Data in Brief</em>.
              </div>
            </li>
            <li>
              <span className="career-ach-icon">🎓</span>
              <div>
                <strong>Certificate</strong> — Data Science &amp; Machine Learning (Theory + Projects)
                A-Z · 90 Hours, by <em>AI Sciences</em>.
              </div>
            </li>
            <li>
              <span className="career-ach-icon">⚡</span>
              <div>
                <strong>Leadership</strong> — Associate General Secretary, Entrepreneurship
                Development Cell, VIIT Pune.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
