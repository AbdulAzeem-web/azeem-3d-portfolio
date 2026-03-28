import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Clinic Management System",
    category: "Clinic Management System",
    tools: "Codeigniter 4, PHP, MySQL",
    video: "/images/cmsvideo.mp4",
  },
  {
    title: "Aurelius",
    category: "Horology / Luxury Timepieces",
    tools: "React.js, Laravel, MySQL",
    image: "/images/screen.png",
  },
  {
    title: "Matsubara Educação",
    category: "Educational Services / Editorial Consulting",
    tools: "React.js, Laravel, MySQL",
    image: "/images/project.jpg",
  },
  {
    title: "Gatorade 5v5",
    category: "CRM Platform",
    tools: "Codeigniter 4, PHP, MySQL",
    video: "/images/gatorade 5v5 project .mp4",
  },
  {
    title: "Horologe",
    category: "Horologe / Luxury Timepieces",
    tools: "React.js, Node.js, Microservices",
    image: "/images/screen2.png",
  },
];

const CarouselVideo = ({ src, isActive }: { src: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.playbackRate = 1.5;
        // play returns a promise that might reject if not interacted, but muted allows autoplay
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      disablePictureInPicture
      preload="metadata"
      onLoadedData={(e) => {
        e.currentTarget.playbackRate = 1.5;
      }}
      style={{
        width: "100%",
        maxWidth: "550px",
        maxHeight: "400px",
        objectFit: "cover",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "block"
      }}
    />
  );
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.video ? (
                        <CarouselVideo src={project.video} isActive={currentIndex === index} />
                      ) : (
                        <WorkImage image={project.image as string} alt={project.title} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
