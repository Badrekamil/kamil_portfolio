const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="card about-card">
        <p className="intro">
          Hi, I'm Badre. I specialize in designing and maintaining robust infrastructure 
          and CI/CD pipelines to ensure smooth and scalable software delivery.
        </p>
        <ul className="bullet-points">
          <li>
            <i className="fa-solid fa-check"></i> Built CI/CD pipelines using Jenkins
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Deployed apps using Docker & Kubernetes
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Managed AWS (EC2, S3, IAM, VPC, RDS, EKS)
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Used Terraform for Infrastructure as Code
          </li>
        </ul>
        <div className="badge">Open to Work | Immediate Joiner</div>
      </div>
    </section>
  );
};

export default About;
