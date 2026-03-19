// frontend/src/pages/BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [state, setState] = useState({ loading: true, error: '' });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setState({ loading: true, error: '' });

        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || 'Blog not found');
        }
        const data = await res.json();
        setPost(data);
        setState({ loading: false, error: '' });
      } catch (err) {
        console.error('Error fetching blog detail:', err);
        setPost(null);
        setState({ loading: false, error: err.message || 'Error fetching blog' });
      }
    };

    fetchBlog();
  }, [id]);

  if (state.loading) {
    return (
      <section className="pp-page">
        <div className="pp-page-inner">
          <p>Loading blog...</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="pp-page">
        <div className="pp-page-inner">
          <p>{state.error || 'Blog not found.'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pp-page pp-blog-detail">
      <div className="pp-page-inner">
        <button
          type="button"
          className="pp-blog-back"
          onClick={() => navigate('/insights/blogs')}
        >
          ← Back to blogs
        </button>

        {post.imageUrl && (
          <div className="pp-blog-detail-image-wrap">
            <img
              src={`http://localhost:5000${post.imageUrl}`}
              alt={post.title}
              className="pp-blog-detail-image"
            />
          </div>
        )}

        <h1 className="pp-blog-detail-title">{post.title}</h1>
        <p className="pp-blog-detail-meta">
          {post.author} · {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <div className="pp-blog-detail-content">
          {post.content}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
