const Projects = () => {
  const projectList = [
    {
      title: 'DevOps CI/CD Pipeline with GitOps',
      desc: 'Implemented a modern GitOps workflow for seamless and automated application delivery.',
      stack: 'GitOps | ArgoCD | Kubernetes'
    },
    {
      title: 'End-to-End DevOps Pipeline with Monitoring',
      desc: 'Designed a complete pipeline including robust monitoring and alerting mechanisms.',
      stack: 'Jenkins | Prometheus | Grafana'
    },
    {
      title: 'Dockerized Node.js App on Kubernetes',
      desc: 'Containerized a scalable Node.js application and orchestrated its deployment.',
      stack: 'Node.js | Docker | Kubernetes'
    },
    {
      title: 'Terraform AWS Infrastructure',
      desc: 'Automated the provisioning of complete AWS environments using Infrastructure as Code.',
      stack: 'Terraform | AWS (VPC, EC2, RDS)'
    },
    {
      title: 'Jenkins CI/CD for Java App',
      desc: 'Built reliable continuous integration and deployment pipelines for enterprise Java apps.',
      stack: 'Java | Maven | Jenkins'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div className="card project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="tech-stack">{project.stack}</div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-github">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
