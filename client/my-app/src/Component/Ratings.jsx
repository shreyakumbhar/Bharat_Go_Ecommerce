import React from 'react';

const Rating = ({ value }) => {
  // Generate stars based on value
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= value ? 'gold' : 'gray' }}>
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default Rating;
