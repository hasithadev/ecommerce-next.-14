'use client'
import React from "react";

interface RatingProps {
  value: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value = 0, readOnly = false, onChange }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          onClick={() => !readOnly && onChange && onChange(index + 1)}
          className={`w-6 h-6 ${
            index < value ? "text-yellow-500" : "text-gray-300"
          } ${readOnly ? "cursor-default" : "cursor-pointer"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.845L19.334 24 12 20.09 4.666 24 6 15.432 0 9.587l8.332-1.569L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
