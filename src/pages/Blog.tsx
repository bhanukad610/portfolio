import { useEffect, useState } from 'react';
import './styles/Blog.css';
import type { MediumPost, MediumRssResponse } from '../types';

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  // Fetch Medium RSS feed and convert it to JSON
  useEffect(() => {
    const mediumRSS = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bhanukadissanayake`;

    fetch(mediumRSS)
      .then((response) => response.json() as Promise<MediumRssResponse>)
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => console.error('Error fetching Medium feed:', error));
  }, []);

  const truncateDescription = (description: string, length: number): string => {
    return description.length > length 
      ? description.substring(0, length) + "..." 
      : description;
  };

  return (
    <section className="blog">
      <h1>My Blog</h1>
      <div className="blog-container">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="blog-post-thumbnail"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
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