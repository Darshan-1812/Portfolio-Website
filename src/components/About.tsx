import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Darshan Girase, a B.Tech student in Artificial Intelligence &amp; Data Science
          at Vishwakarma Institute of Information Technology, Pune (CGPA: 8.72).
          I'm passionate about building intelligent systems — from end-to-end MLOps pipelines
          and RAG-powered chatbots to multi-agent AI workflows and agentic automation.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          I've interned as a CrewAI / LLM Engineer at CrowdWisdomTrading, where I worked on
          LLM-based multi-agent automation and AI research. I've also published a
          Vegetable Image Dataset on Mendeley Data &amp; Data in Brief, and serve as Associate
          General Secretary of the Entrepreneurship Development Cell at VIIT Pune.
          Currently exploring Generative AI, LangChain, MCP, and Web3.
        </p>
      </div>
    </div>
  );
};

export default About;
