// // import React from 'react'
// // import Places from './Places'
// // import Services from './Services'
// // import Navbar from './Navbar'
// // import HowItWorks from './HowItWorks'
// // import About from './About'
// // import Faq from './Faq'
// // import CircleMenu from './Slider'
// // import TestimonialsSlider from './Testimonals'
// // import TourSwiper from './Banner'
// // import Packages from './Packages'

// // const Home = () => {
// //   return (
// //     <div>
// //         <Navbar/>
// //         <TourSwiper/>
// //         <About/>
// //         <Places/>
// //         <Services/>
// //         <HowItWorks/>
// //         <Packages/>
// //         <CircleMenu/>
// //         <TestimonialsSlider/>
// //         <Faq/>
// //     </div>
// //   )
// // }

// // export default Home
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './Navbar';
import TourSwiper from './Banner';
import About from './About';
import Places from './Places';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Packages from './Packages';
import CircleMenu from './Slider';
import TestimonialsSlider from './Testimonals';
import Faq from './Faq';
import Footer from './Footer';
import FormOne from './Form';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState({});
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting, entry];
};

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, isIntersecting]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnimatedSection><TourSwiper /></AnimatedSection>
      <FormOne/>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Places /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><Packages /></AnimatedSection>
      <AnimatedSection><CircleMenu /></AnimatedSection>
      <AnimatedSection><TestimonialsSlider /></AnimatedSection>
      <AnimatedSection><Faq /></AnimatedSection>
      <Footer/>
    </div>
  );
};

export default Home;
// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import Navbar from './Navbar';
// import TourSwiper from './Banner';
// import About from './About';
// import Places from './Places';
// import Services from './Services';
// import HowItWorks from './HowItWorks';
// import Packages from './Packages';
// import CircleMenu from './Slider';
// import TestimonialsSlider from './Testimonals';
// import Faq from './Faq';
// import Footer from './Footer';

// // Define animation variants
// const animationVariants = {
//   fadeInUp: {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -50 },
//   },
//   slideInLeft: {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
//   },
//   slideInRight: {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 100 },
//   },
//   scaleUp: {
//     initial: { opacity: 0, scale: 0.5 },
//     animate: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.5 },
//   },
// };

// // Hook to observe intersection
// const useIntersectionObserver = (options) => {
//   const [entry, setEntry] = useState({});
//   const [isIntersecting, setIntersecting] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIntersecting(entry.isIntersecting);
//       setEntry(entry);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options]);

//   return [ref, isIntersecting, entry];
// };

// // AnimatedSection component
// const AnimatedSection = ({ children, animation }) => {
//   const controls = useAnimation();
//   const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

//   useEffect(() => {
//     if (isIntersecting) {
//       controls.start(animation.animate);
//     } else {
//       controls.start(animation.initial);
//     }
//   }, [controls, isIntersecting, animation]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial={animation.initial}
//       exit={animation.exit}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Main Home component
// const Home = () => {
//   return (
//     <div>
//       {/* <AnimatedSection animation={animationVariants.fadeInUp}><Navbar /></AnimatedSection> */}
//       <Navbar/>
//       <AnimatedSection animation={animationVariants.slideInLeft}><TourSwiper /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.slideInRight}><About /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.scaleUp}><Places /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.fadeInUp}><Services /></AnimatedSection>
//       {/* <AnimatedSection animation={animationVariants.slideInLeft}><HowItWorks /></AnimatedSection> */}
//       <AnimatedSection animation={animationVariants.slideInRight}><Packages /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.scaleUp}><CircleMenu /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.fadeInUp}><TestimonialsSlider /></AnimatedSection>
//       <AnimatedSection animation={animationVariants.slideInLeft}><Faq /></AnimatedSection>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;
