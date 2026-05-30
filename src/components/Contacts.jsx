import { useState } from 'react';
import '../styles/Contact.css';
import { TbFishChristianity } from "react-icons/tb";

import green from "../assets/contact_assets/green.png"
import pink from "../assets/contact_assets/pink.png"
import yellow from "../assets/contact_assets/yellow.png"

function Contact() {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
          const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              service_id: 'service_khobgdg',
              template_id: 'template_2fdg121',
              user_id: 'NQVbevdUO20hCJHhJ',
              template_params: {
                name: form.name,
                email: form.email,
                message: form.message,
              },
            }),
          });
          if (res.ok) {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
          } else {
            setStatus('error');
          }
        } catch {
          setStatus('error');
        }
      };
    
    return (
        <div className="contact">
            <img className="green-coral-2" src={green} alt="coral"/>
            <img className="green-coral-1" src={green} alt="coral"/>

            <img className="yellow-coral" src={yellow} alt="coral"/>
            <img className="pink-coral" src={pink} alt="coral"/>
            <div className="contact-container">
                <div className="contact-header">
                    <p className="contact-eyebrow">get in touch</p>
                    <TbFishChristianity/>
                    <p className="contact-subtitle">
                        have a question, idea, or just want to chat?<br />
                        send me a message and i'll get back to you
                    </p>
                </div>

                <div className="contact-body">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="name">name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="what's on your mind?"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`send-btn ${status === 'sending' ? 'sending' : ''}`}
                            disabled={status === 'sending'}
                            >
                            {status === 'sending' ? 'sending…' : 'send message'}
                        </button>

                        {status === 'success' && (
                            <div className="form-feedback-container" >
                                <p className="form-feedback success">message sent! i'll be in touch soon</p>
                            </div>
                        
                        )}
                        {status === 'error' && (
                            <div className="form-feedback-container" >
                                <p className="form-feedback error">something went wrong. try again or email me directly.</p>
                            </div>
                        )}
                    </form>

                    <div className="contact-sidebar">
                        <div className="socials-card">
                            <p className="socials-label">find me online</p>
                            <a
                            href="https://github.com/min-hicc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            >
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                            GitHub
                            </a>
                            <a
                            href="https://www.linkedin.com/in/sharon-yehshin-moon/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            >
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                            </a>
                        </div>

                            <div className="email-card">
                                <p className="socials-label">or email directly</p>
                                <a href="mailto:jsmoon883@gmail.com" className="email-link">
                                jsmoon883@gmail.com
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
    }

export default Contact;