// // Services.js
// import React from 'react';
// import { servicesData } from '../data/data'; // Import services data

// const Services = () => {
//   return (
//     <div className="services-container">
     
//     <section>
 
//  <div class="row">
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-hammer"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-brush"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-wrench"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-truck-pickup"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-broom"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//    <div class="column">
//      <div class="card">
//        <div class="icon-wrapper">
//          <i class="fas fa-plug"></i>
//        </div>
//        <h3>Service Heading</h3>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//          consequatur necessitatibus eaque.
//        </p>
//      </div>
//    </div>
//  </div>
// </section>


//     </div>
//   );
// };

// export default Services;

// Services.js
import React from 'react';
import { servicesData } from '../data/data'; // Import services data

const Services = () => {
  return (
    <div className="services-container">
     <div className="container">
     <section>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="column" key={index}>
              <div className="card">
                <div className="icon-wrapper">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
     </div>
    </div>
  );
};

export default Services;
