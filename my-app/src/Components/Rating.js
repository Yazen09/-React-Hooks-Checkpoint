import React from "react";

const Rating = ({ rate, onRateChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${rate >= star ? "selected" : ""}`}
          onClick={() => onRateChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
