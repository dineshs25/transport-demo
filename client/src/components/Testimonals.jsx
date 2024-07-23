import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    content: "Mr. Pilgrim's Andhra Pradesh tour is an incredible journey through spiritual sites and historical landmarks. The experience was truly transformative.",
    name: "Ravi Kumar",
    position: "Tourist",
    image: "https://via.placeholder.com/100" // Placeholder image URL for Ravi Kumar
  },
  {
    content: "Our trip with Mr. Pilgrim through Andhra Pradesh was enlightening. The well-organized tour allowed us to explore the rich cultural heritage of the region.",
    name: "Sita Rani",
    position: "Tourist",
    image: "https://via.placeholder.com/100" // Placeholder image URL for Sita Rani
  },
  {
    content: "Mr. Pilgrim's insights and knowledge about Andhra Pradesh's pilgrimage sites made our journey exceptional. Highly recommended for anyone seeking spiritual growth.",
    name: "Anil Raj",
    position: "Tourist",
    image: "https://via.placeholder.com/100" // Placeholder image URL for Anil Raj
  },
  {
    content: "The Andhra Pradesh tour with Mr. Pilgrim was a memorable experience. His guidance through the sacred temples and historic places was invaluable.",
    name: "Meera Devi",
    position: "Tourist",
    image: "https://via.placeholder.com/100" // Placeholder image URL for Meera Devi
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRowRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleResize = () => updateSlide();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateSlide = () => {
    const mainWidth = mainRef.current.offsetWidth;
    const translateValue = currentIndex * -mainWidth;
    slideRowRef.current.style.transform = `translateX(${translateValue}px)`;
  };

  useEffect(() => {
    updateSlide();
  }, [currentIndex]);

  return (
  <div className="testimonal-sec">
     <div className="container">
     <main ref={mainRef}>
      <h1>Testimonials</h1>
      <div className="slider">
        <div className="slide-row" id="slide-row" ref={slideRowRef}>
          {testimonials.map((testimonial, index) => (
            <div className="slide-col" key={index}>
              <div className="content">
                <p>{testimonial.content}</p>
                <h2>{testimonial.name}</h2>
                <p>{testimonial.position}</p>
              </div>
              <div className="hero">
                <img src={testimonial.image} alt="avatar" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="indicator">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`btn ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </main>
     </div>
  </div>
  );
};

export default TestimonialsSlider;
