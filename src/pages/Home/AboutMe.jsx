import React, { useEffect } from 'react';

export default function AboutMe() {
  useEffect(() => {
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Clean up observer on component unmount
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="AboutMe" className="about">
    <div className="about1">
      <div className="about--section--img">
        <img src="./img/pic1.jpeg" alt="About Me" style={{zIndex:'15'}}/>
      </div>
      <div className="hero1 about--section--box">
        <div className="hero2">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">Skanda S Shetty</h1>
          <p className="heroDesc">
          I am pursuing my B.Tech in Computer Science and Engineering at PES University. With a focus on real-world applications, I aspire professional experiences in various industries and domains. I am passionate about contributing and making an impact by utilizing my expertise.
          </p>
          <p className="heroDesc">
          I am continously driven by a pursuit of skill enhancement and problem-solving. I'm lucky to have shared space with many talented individuals who have helped me learn and explore different aspects of technology and community.
          </p>
        </div>
      </div>
      </div>
      <div class="timeline">
        <h2>Education</h2>
        <div class="timeline-container">
            <div class="timeline-item">
                <div class="timeline-icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"></path></svg>
                </div>
                <div class="timeline-content">
                    <h3>B.Tech-CSE</h3>
                    <p>PES University</p>
                    <span>2021 - 2025</span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"></path></svg>
                </div>
                <div class="timeline-content">
                    <h3>12th Grade</h3>
                    <p>PoornaPrajna PU College</p>
                    <span>2019 - 2021</span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path></svg>
                </div>
                <div class="timeline-content">
                    <h3>10th Grade</h3>
                    <p>Little Rock Indian School</p>
                    <span> - 2019</span>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}
