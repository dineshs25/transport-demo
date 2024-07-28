/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { FaClock, FaComments, FaUser, FaTags, FaUpload, FaBriefcase } from 'react-icons/fa';

const CircleMenu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const radius = containerRef.current.offsetWidth / 2.5;
    const fields = document.querySelectorAll('.itemDot');
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const step = (2 * Math.PI) / fields.length;
    let angle = 0;

    fields.forEach((field, index) => {
      const x = Math.round(width / 2 + radius * Math.cos(angle) - field.offsetWidth / 2);
      const y = Math.round(height / 2 + radius * Math.sin(angle) - field.offsetHeight / 2);
      field.style.left = `${x}px`;
      field.style.top = `${y}px`;
      angle += step;
    });

    const rotateMenu = () => {
      setActiveTab((prevTab) => {
        const nextTab = prevTab >= 6 ? 1 : prevTab + 1;
        rotateElements(nextTab);
        return nextTab;
      });
    };

    intervalRef.current = setInterval(rotateMenu, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const rotateElements = (tab) => {
    const dotCircle = document.querySelector('.dotCircle');
    const itemDots = document.querySelectorAll('.itemDot');

    dotCircle.style.transform = `rotate(${360 - (tab - 1) * 36}deg)`;
    dotCircle.style.transition = '2s';

    itemDots.forEach((itemDot, index) => {
      itemDot.style.transform = `rotate(${(tab - 1) * 36}deg)`;
      itemDot.style.transition = '1s';
    });
  };

  const handleClick = (tab) => {
    setActiveTab(tab);
    clearInterval(intervalRef.current);
    rotateElements(tab);
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextTab = prevTab >= 6 ? 1 : prevTab + 1;
        rotateElements(nextTab);
        return nextTab;
      });
    }, 5000);
  };

  return (
    <div className="slider-sec">
      <section className="iq-features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12"></div>
            <div className="col-lg-6 col-md-12">
              <div className="holderCircle" ref={containerRef}>
                <div className="round"></div>
                <div className="dotCircle">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <span
                      key={num}
                      className={`itemDot ${activeTab === num ? 'active' : ''} itemDot${num}`}
                      data-tab={num}
                      onClick={() => handleClick(num)}
                    >
                      {num === 1 && <FaClock />}
                      {num === 2 && <FaComments />}
                      {num === 3 && <FaUser />}
                      {num === 4 && <FaTags />}
                      {num === 5 && <FaUpload />}
                      {num === 6 && <FaBriefcase />}
                      <span className="forActive"></span>
                    </span>
                  ))}
                </div>
                <div className="contentCircle">
                  {[
                    { title: "Automate", description: "Streamline pilgrim's journey planning with advanced automation tools." },
                    { title: "Chat", description: "Connect with fellow pilgrims through real-time, instant messaging features." },
                    { title: "Responses", description: "Manage pilgrimage feedback and inquiries efficiently with organized responses." },
                    { title: "Tags", description: "Categorize pilgrimage information with tags for easy retrieval and management." },
                    { title: "Sharing", description: "Easily share pilgrimage details and updates with your travel group." },
                    { title: "Support", description: "Get round-the-clock assistance for any pilgrimage-related issues or questions." }
                  ].map((item, index) => (
                    <div
                      key={index + 1}
                      className={`CirItem title-box ${activeTab === index + 1 ? 'active' : ''} CirItem${index + 1}`}
                    >
                      <h2 className="title">
                        <span>{item.title}</span>
                      </h2>
                      <p>{item.description}</p>
                      {index === 0 && <FaClock />}
                      {index === 1 && <FaComments />}
                      {index === 2 && <FaUser />}
                      {index === 3 && <FaTags />}
                      {index === 4 && <FaUpload />}
                      {index === 5 && <FaBriefcase />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CircleMenu;
