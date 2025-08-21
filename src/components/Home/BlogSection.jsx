import React, { useState, useEffect } from 'react';

import bags from '../../assets/bags.png';
import superfert from '../../assets/superfert_logo.png';
import boximg from '../../assets/group3.png';

const ProductsSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewingPost, setViewingPost] = useState(null); // 👈 new state
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    // Fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError('Failed to load posts. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const createPost = async () => {
        if (!formData.title.trim() || !formData.body.trim()) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title,
                    body: formData.body,
                    userId: 1,
                }),
            });

            if (!response.ok) throw new Error('Failed to create post');
            const newPost = await response.json();
            
            // Add to beginning of posts array
            setPosts([newPost, ...posts]);
            setFormData({ title: '', body: '' });
            setShowForm(false);
        } catch (err) {
            setError('Failed to create post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const updatePost = async () => {
        if (!formData.title.trim() || !formData.body.trim()) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: editingPost.id,
                    title: formData.title,
                    body: formData.body,
                    userId: editingPost.userId,
                }),
            });

            if (!response.ok) throw new Error('Failed to update post');
            const updatedPost = await response.json();
            
            // Update posts array
            setPosts(posts.map(post => 
                post.id === editingPost.id ? updatedPost : post
            ));
            setFormData({ title: '', body: '' });
            setEditingPost(null);
            setShowForm(false);
        } catch (err) {
            setError('Failed to update post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const deletePost = async (postId) => {
        if (!window.confirm('Are you sure you want to delete this post?')) {
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Failed to delete post');
            
            // Remove from posts array
            setPosts(posts.filter(post => post.id !== postId));
        } catch (err) {
            setError('Failed to delete post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            body: post.body
        });
        setShowForm(true);
    };

    const handleSubmit = () => {
        if (editingPost) {
            updatePost();
        } else {
            createPost();
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingPost(null);
        setFormData({ title: '', body: '' });
        setError('');
    };

    // Filter posts based on search term
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
        <>
            <section className='products-section'>
                <div className="upper-part">
                    <h2>Blog Posts.</h2>
                    <img src={superfert} alt="logo" className='superfert-logo' />
                </div>

                <div className="middle-part">
                    <img src={bags} alt="bags" className='super-bags' />
                    <p>Stay updated with our latest news, insights, and stories. Discover what's happening in our world through our dynamic blog posts.</p>
                </div>

                {/* Search and New Post Controls */}
                <div className="blog-controls">
                    <input
                        type="text"
                        placeholder="Search posts by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <button
                        onClick={() => setShowForm(true)}
                        disabled={loading}
                        className="new-post-btn"
                    >
                        New Post
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {/* Loading Spinner */}
                {loading && (
                    <div className="loading-message">
                        Loading...
                    </div>
                )}

                {/* Form Modal */}
                {showForm && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3 className="modal-title">
                                {editingPost ? 'Edit Post' : 'Create New Post'}
                            </h3>
                            <div className="form-container">
                                <input
                                    type="text"
                                    placeholder="Post title..."
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="form-input"
                                    required
                                />
                                <textarea
                                    placeholder="Post content..."
                                    value={formData.body}
                                    onChange={(e) => setFormData({...formData, body: e.target.value})}
                                    rows="6"
                                    className="form-textarea"
                                    required
                                />
                                <div className="form-buttons">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="submit-btn"
                                    >
                                        {editingPost ? 'Update' : 'Create'}
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="cancel-btn"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* View Modal */}
                {viewingPost && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3 className="modal-title">{viewingPost.title}</h3>
                            <p className="modal-body">{viewingPost.body}</p>
                            <div className="form-buttons">
                                <button
                                    onClick={() => setViewingPost(null)}
                                    className="cancel-btn"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid-part">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="grid-item">
                            <img src={boximg} alt="box" className='mini-box' />
                            <div className="text-box">
                                <h3>{post.title}</h3>
                                <p>{post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}</p>
                                <div className="post-actions">
                                    <button
                                        onClick={() => setViewingPost(post)} // 👈 updated
                                        className="view-btn"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleEdit(post)}
                                        className="edit-btn"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deletePost(post.id)}
                                        disabled={loading}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredPosts.length === 0 && !loading && (
                        <div className="no-posts-message">
                            {searchTerm ? 'No posts found matching your search.' : 'No posts available.'}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ProductsSection;
