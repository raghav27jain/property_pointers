// frontend/src/pages/BlogList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('hostToken');
    setIsHost(!!token);

    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this blog?')) return;
    try {
      const token = localStorage.getItem('hostToken');
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Could not delete blog');
      }
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message || 'Error deleting blog');
    }
  };

  return (
    <section className="pp-page pp-blogs">
      <div className="pp-page-inner">
        <header className="pp-blogs-hero">
          <div>
            <p className="pp-blogs-kicker">Insights</p>
            <h1 className="pp-blogs-title">Latest Blogs & Updates</h1>
            <p className="pp-blogs-subtitle">
              Real estate trends, investing, and property buying in India.
            </p>
          </div>

          {isHost && (
            <button
              type="button"
              className="pp-blogs-cta"
              onClick={() => navigate('/insights/blogs/add')}
            >
              + New blog
            </button>
          )}
        </header>

        <div className="pp-blogs-grid">
          {posts.length === 0 && (
            <p className="pp-blogs-empty">
              No blogs yet. Once the host publishes, posts will appear here.
            </p>
          )}

          {posts.map((post) => (
            <article key={post._id} className="pp-blog-card">
              {post.imageUrl && (
                <div className="pp-blog-card-image-wrap">
                  <img
                    src={`http://localhost:5000${post.imageUrl}`}
                    alt={post.title}
                    className="pp-blog-card-image"
                  />
                </div>
              )}

              <div className="pp-blog-card-top">
                <p className="pp-blog-card-meta">
                  {post.author} · {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <h2 className="pp-blog-card-title">{post.title}</h2>
                <p className="pp-blog-card-excerpt">{post.excerpt}</p>
              </div>

              <div className="pp-blog-card-bottom">
                <button
                  type="button"
                  className="pp-blog-read"
                  onClick={() => navigate(`/insights/blogs/${post._id}`)}
                >
                  Read →
                </button>

                {isHost && (
                  <button
                    type="button"
                    className="pp-blog-delete"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
