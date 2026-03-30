const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <header className="hero">
          <h1 className="name">Badre Kamil</h1>
          <h2 className="role">DevOps Engineer | Cloud & Automation</h2>
          <p className="description">
            I build scalable cloud infrastructure, automate deployments, and design production-ready CI/CD pipelines using AWS, Docker, Kubernetes, and Terraform.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-solid">View Projects</a>
            <a href="resume.pdf" className="btn btn-outline" download target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </header>

        <nav className="desktop-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#stats">Stats</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
