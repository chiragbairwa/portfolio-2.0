const Projects = () => {
  return (
    <>
      <div className="projects" id="work">
          <h1>Projects</h1>

          <div className="projects-card">
            <div className="card">
              <img src="/library-photo.png" />
              <div className="projects-card-content">
                <h2>Library Genie</h2>
                <div className="project-skills-list">
                  <div>
                    <img src="/skills/react.svg" height={25} alt="ReactJs" />
                    <span>ReactJs</span>
                  </div>
                  <div>
                    <img src="/skills/nextjs.svg" height={25} alt="NextJs" />
                    <span>NextJs</span>
                  </div>
                  <div>
                    <img src="/skills/firebase.svg" height={25} alt="NextJs" />
                    <span>Firebase</span>
                  </div>
                </div>
                <p>
                  This WebApp can be used to know about your books using the
                  barcode
                </p>

                <a href="#" className="project-btn">
                  Live Link
                </a>
                <a href="#" className="project-btn">
                  GitHub Link
                </a>
              </div>
            </div>

            <div className="card">
              <div className="projects-card-content">
                <h2>Pokedex WebApp</h2>
                <div className="project-skills-list">
                  <div>
                    <img src="/skills/react.svg" height={25} alt="ReactJs" />
                    <span>ReactJs</span>
                  </div>
                  <div>
                    <img src="/skills/nextjs.svg" height={25} alt="NextJs" />
                    <span>NextJs</span>
                  </div>
                </div>
                <p>
                  This WebApp can be used to know about your books using the
                  barcode
                </p>

                <a href="#" className="project-btn">
                  Live Link
                </a>
                <a href="#" className="project-btn">
                  GitHub Link
                </a>
              </div>
              <img src="/pokedex-photo.png" />
            </div>

            <div className="card">
              <img src="/auth-photo.png" />
              <div className="projects-card-content">
                <h2>Authentication WebApp</h2>
                <div className="project-skills-list">
                  <div>
                    <img src="/skills/react.svg" height={25} alt="ReactJs" />
                    <span>ReactJs</span>
                  </div>
                  <div>
                    <img src="/skills/firebase.svg" height={25} alt="NextJs" />
                    <span>Firebase</span>
                  </div>
                </div>
                <p>
                  This WebApp can be used to know about your books using the
                  barcode
                </p>

                <a href="#" className="project-btn">
                  Live Link
                </a>
                <a href="#" className="project-btn">
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Projects;
