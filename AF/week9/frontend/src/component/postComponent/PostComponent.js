import React from 'react';

function PostComponent({ postsData }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f9fa' }}>
      {postsData.map((post, index) => (
        <div key={index} style={cardStyle}>
          <h1 style={titleStyle}>{post.title}</h1>
          <p style={paragraphStyle}>{post.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
  padding: '20px',
  marginBottom: '20px',
  borderLeft: '5px solid #3498db'  // Adding a colored border as an accent
};

const titleStyle = {
  color: '#2c3e50',
  borderBottom: '2px solid #dfe6e9',
  paddingBottom: '10px',
  fontSize: '24px',  // Larger font size for title
  fontWeight: '600', // Slightly heavier font weight
  letterSpacing: '1px' // Adding some spacing between letters for better readability
};

const paragraphStyle = {
  fontSize: '16px',
  color: '#7f8c8d',
  lineHeight: '1.6',  // Increased line height for better readability
  textIndent: '20px', // Indent first line of each paragraph
  marginBottom: '10px' // Space between paragraphs for clear separation
};

export default PostComponent;
