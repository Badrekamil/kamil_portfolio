const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="section">
      <h2 className="section-title">Why Hire Me</h2>
      <div className="card about-card">
        <ul className="bullet-points">
          <li>
            <i className="fa-solid fa-check"></i> Strong hands-on DevOps experience
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Built real-world CI/CD pipelines
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Experience with AWS & Kubernetes
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Focused on automation and scalability
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Fast learner and problem solver
          </li>
        </ul>
        <div style={{ marginTop: '2rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--left-bg)' }}>
          Ready to contribute from Day 1 🚀
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
