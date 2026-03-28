import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Graduate</h4>
                <h5>Shaheed Zulfikar Ali Bhutto Institute of Science and Technology</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Graduated with a focus on Software Engineering. Began developing web
              applications and database-driven solutions primarily utilizing the
              LAMP stack (Linux, Apache, MySQL, PHP).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend / Web Developer</h4>
                <h5>Web Sphere</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and maintained scalable backend systems and REST APIs. Gained 
              strong experience working with Linux environments and scaling Apache 
              servers for secure application delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Web Sphere</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Transitioned to full-stack development using the MERN stack (MongoDB, 
              Express.js, React.js, Node.js). Actively utilizing advanced AI tools 
              to speed up development and rapidly deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
