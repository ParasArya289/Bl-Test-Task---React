import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import "./Symptoms.css";

const data = [
  "https://cdni.iconscout.com/illustration/premium/thumb/sick-woman-having-dry-cough-5314670-4432125.png?f=webp",
  "https://cdni.iconscout.com/illustration/premium/thumb/woman-fainting-5314669-4432124.png?f=webp",
  "https://cdni.iconscout.com/illustration/premium/thumb/woman-in-fever-5314676-4432131.png?f=webp",
];
const Symptoms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (i) => setCurrentIndex(i);
  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === data.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  useEffect(() => {
    const interval = setTimeout(() => handleNext(), 1500);
    return () => clearTimeout(interval);
  }, [currentIndex]);
  return (
    <div className="symptomscarousel">
      <img src={data[currentIndex]} alt="image" />
      <div className="symptomsheading">
        <div>
          Symptoms <FaArrowRight onClick={handleNext} />
        </div>
        <span>Read Carefully 3 Symptoms of Covid-19</span>
      </div>
      {new Array(data.length).fill(0).map((_, i) => (
        <span
          className={`pill ${i === currentIndex ? "activepill" : ""}`}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};

export default Symptoms;
