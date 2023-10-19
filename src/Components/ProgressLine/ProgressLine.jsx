import React, { useEffect, useState, useRef } from "react";
import "./ProgressLine.css";

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return "0%";
    })
  );

  // Ref to the container element that will be observed
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation when the component is in the viewport
            setWidths(
              visualParts.map((item) => {
                return item.percentage;
              })
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [visualParts]);

  return (
    <div ref={containerRef}>
      <div className='progressLabel'>{label}</div>
      <div
        className='progressVisualFull h-3 rounded-lg'
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => (
          <div
            key={index}
            style={{
              width: widths[index],
              backgroundColor: item.color,
            }}
            className='progressVisualPart rounded-lg'
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressLine;
