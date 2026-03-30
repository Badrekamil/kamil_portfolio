import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFeedbackMsg(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // reset form
      } else {
        setStatus('error');
        setFeedbackMsg(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMsg('Network error. Is the backend server running?');
    }
    
    // Reset status message after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setFeedbackMsg('');
    }, 5000);
  };

  return (
    <section id="contact" className="section mb-large">
      <div style={{ color: 'var(--left-bg)', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Let's Connect 🚀</div>
      <h2 className="section-title" style={{ marginBottom: '1rem' }}>Contact</h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        Open to opportunities in DevOps, Cloud, and Automation.
      </p>
      
      <div className="card contact-card" style={{ marginBottom: '2rem', padding: '3.5rem', gap: '2rem' }}>
        <a href="mailto:badrekamil3@gmail.com" className="contact-link">
          <i className="fa-solid fa-envelope"></i> badrekamil3@gmail.com
        </a>

        <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/badre-kamil" target="_blank" rel="noreferrer" className="contact-link">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        
        <p style={{ marginTop: '1rem', color: 'var(--text-light)', fontSize: '1.05rem', borderTop: '1px solid #eaeaea', paddingTop: '1.5rem' }}>
          Feel free to reach out for opportunities or collaboration.
        </p>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '1.4rem' }}>Send Me a Message</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
            style={inputStyle} 
          />
          
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
            style={inputStyle} 
          />
          
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message..." 
            required 
            rows="5" 
            style={{ ...inputStyle, resize: 'vertical' }} 
          ></textarea>
          
          <button 
            type="submit" 
            className="btn btn-solid" 
            disabled={status === 'loading'}
            style={{ alignSelf: 'flex-start', border: 'none', cursor: status === 'loading' ? 'wait' : 'pointer' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          
          {feedbackMsg && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: status === 'success' ? '#e8f5e9' : '#ffebee',
              color: status === 'success' ? '#2e7d32' : '#c62828'
            }}>
              {feedbackMsg}
            </div>
          )}
          
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontFamily: 'var(--font-main)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s'
};

export default Contact;
