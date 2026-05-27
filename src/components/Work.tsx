import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Solar Samriddhi",
    category: "Web Platform",
    tech: "Django, HTML, CSS, JavaScript, API Integration",
    description: "Smart solar estimation platform that calculates solar panel requirements based on user location, bill, and area. Integrates real-time solar data and government subsidy info to provide savings & ROI analysis.",
    image: "/images/placeholder.webp",
    link: "https://github.com/Darshan-1812/solar-samriddhi",
  },
  {
    title: "Decision-Centric AI for MSME",
    category: "Agentic AI",
    tech: "Python, FastAPI, Google Gemini API, Next.js, React, TailwindCSS",
    description: "Agentic AI platform that automates MSME operations by converting emails into structured projects and prioritizing tasks using weighted business rules. Multi-agent workflows for requirement extraction and team assignment.",
    image: "/images/placeholder.webp",
    link: "https://github.com/Darshan-1812",
  },
  {
    title: "VibeOps",
    category: "MLOps Pipeline",
    tech: "Python, LightGBM, DVC, MLflow, Flask, Docker, AWS (EC2, ECR, S3), GitHub Actions",
    description: "End-to-end MLOps pipeline for YouTube comment sentiment analysis with DVC-based data versioning, MLflow experiment tracking, and automated CI/CD deployment on AWS. Includes a Flask API and Chrome Extension for real-time predictions.",
    image: "/images/placeholder.webp",
    link: "https://github.com/Darshan-1812",
  },
  {
    title: "End-to-End Medical Chatbot",
    category: "Conversational AI",
    tech: "Flask, Llama-2, LangChain, Pinecone, HTML, CSS",
    description: "Conversational AI chatbot for medical queries using Llama-2 LLM and LangChain for contextual flow. Integrates PDF-based medical knowledge with semantic search via Pinecone vector database for accurate, reliable responses.",
    image: "/images/placeholder.webp",
    link: "https://github.com/Darshan-1812",
  },
];

const Work = () => {
  useLayoutEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {project.title}
                      </a>
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
