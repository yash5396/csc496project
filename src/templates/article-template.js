import React from 'react';
import './article-template.css'; // Import CSS for styling

const ArticleTemplate = ({ pageContext }) => {
  const {
    title,
    author,
    body,
    mediaImage, // Media image field
  } = pageContext;

  // Check if mediaImage is available and has a URL
  const imageUrl = mediaImage?.url || '';
  const imageAltText = title || 'Article image';

  // Share and Print functionalities
  const handlePrint = () => window.print();
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: `Check out this article: ${title}`,
        url: window.location.href,
      });
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  return (
    <div className="article-container">
      <div className="article-card">
        {imageUrl && <img src={imageUrl} alt={imageAltText} className="article-image" />}

        <h1 className="article-title">{title}</h1>

        <div className="article-info">
          <p><strong>Author:</strong> {author}</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-share" onClick={handleShare}>Share</button>
          <button className="btn-print" onClick={handlePrint}>Print</button>
        </div>

        {/* Display article body */}
        <h2>Article Content:</h2>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default ArticleTemplate;
