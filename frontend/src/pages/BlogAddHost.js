// frontend/src/pages/BlogAddHost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogAddHost = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleHostLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/host/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Login failed');
      }

      const data = await res.json();
      localStorage.setItem('hostToken', data.token);
      setStep('form');
      setMessage('Logged in as host');
    } catch (err) {
      setMessage(err.message || 'Error logging in');
    }
  };

  const handleBlogChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({
      ...prev,
      [name]: value,
      slug:
        name === 'title'
          ? value.toLowerCase().trim().replace(/\s+/g, '-')
          : prev.slug,
    }));
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const token = localStorage.getItem('hostToken');
      const formData = new FormData();
      formData.append('title', blogForm.title);
      formData.append('slug', blogForm.slug);
      formData.append('excerpt', blogForm.excerpt);
      formData.append('content', blogForm.content);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          // no Content-Type; browser sets multipart boundary
        },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Could not create blog');
      }

      setMessage('Blog published successfully');
      setBlogForm({ title: '', slug: '', excerpt: '', content: '' });
      setImageFile(null);
      navigate('/insights/blogs');
    } catch (err) {
      setMessage(err.message || 'Error creating blog');
    }
  };

  return (
    <section className="pp-page pp-blog-admin">
      <div className="pp-page-inner">
        <h1 className="pp-page-title">Host Blog Console</h1>
        <p className="pp-page-subtitle">
          Login as host and publish new insights with a cover image.
        </p>

        {message && <p className="pp-form-message">{message}</p>}

        {step === 'login' && (
          <form className="pp-form" onSubmit={handleHostLogin}>
            <div className="pp-form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="pp-form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit" className="pp-hero-cta pp-hero-cta--primary">
              Login as Host
            </button>
          </form>
        )}

        {step === 'form' && (
          <form className="pp-form" onSubmit={handleBlogSubmit}>
            <div className="pp-form-group">
              <label>Title</label>
              <input
                name="title"
                value={blogForm.title}
                onChange={handleBlogChange}
                required
              />
            </div>
            <div className="pp-form-group">
              <label>Excerpt</label>
              <input
                name="excerpt"
                value={blogForm.excerpt}
                onChange={handleBlogChange}
                required
              />
            </div>
            <div className="pp-form-group">
              <label>Cover image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImageFile(file || null);
                }}
              />
              {imageFile && (
                <p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  Selected: {imageFile.name}
                </p>
              )}
            </div>
            <div className="pp-form-group">
              <label>Content</label>
              <textarea
                name="content"
                rows="8"
                value={blogForm.content}
                onChange={handleBlogChange}
                required
              />
            </div>
            <button type="submit" className="pp-hero-cta pp-hero-cta--primary">
              Publish Blog
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BlogAddHost;
