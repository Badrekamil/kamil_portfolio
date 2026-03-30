const Skills = () => {
  const skills = [
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'fa-solid fa-dharmachakra', color: '#326CE5' },
    { name: 'Jenkins', icon: 'fa-brands fa-jenkins', color: '#D24939' },
    { name: 'Terraform', icon: 'fa-solid fa-cloud', color: '#7B42BC' },
    { name: 'ArgoCD', icon: 'fa-solid fa-arrows-spin', color: '#EF7B4D' },
    { name: 'Prometheus', icon: 'fa-solid fa-chart-line', color: '#E6522C' },
    { name: 'Grafana', icon: 'fa-solid fa-chart-pie', color: '#F46800' },
    { name: 'Linux', icon: 'fa-brands fa-linux', color: '#FCC624' },
    { name: 'Bash', icon: 'fa-solid fa-terminal', color: '#4EAA25' },
    { name: 'Ansible', icon: 'fa-solid fa-server', color: '#EE0000' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#181717' },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            className="skill-item" 
            key={index}
            style={{ '--brand-color': skill.color }}
          >
            <i className={skill.icon}></i> {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
