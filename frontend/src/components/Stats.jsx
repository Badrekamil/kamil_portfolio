const Stats = () => {
  return (
    <section id="stats" className="section">
      <h2 className="section-title">Stats</h2>
      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">DevOps Projects</div>
        </div>
        <div className="card stat-card">
          <div className="stat-number">
            <i className="fa-brands fa-aws"></i>
          </div>
          <div className="stat-label">AWS & K8s Hands-on</div>
        </div>
        <div className="card stat-card">
          <div className="stat-number">
            <i className="fa-solid fa-code-branch"></i>
          </div>
          <div className="stat-label">CI/CD Pipelines Built</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
