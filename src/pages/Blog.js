import React, { useEffect, useState } from 'react';
import './styles/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Fetch Medium RSS feed and convert it to JSON
  useEffect(() => {
    const mediumRSS = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bhanukadissanayake`;
    
    fetch(mediumRSS)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => console.error('Error fetching Medium feed:', error));
  }, []);

  const truncateDescription = (description, length) => {
    return description.length > length 
      ? description.substring(0, length) + "..." 
      : description;
  };

  return (
    <section className="blog">
      <div className="blog-container">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ 
              __html: truncateDescription(post.description, 500) 
            }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;