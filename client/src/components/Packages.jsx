/* eslint-disable no-unused-vars */
// import React from 'react'

// const Packages = () => {
//   return (
//     <div>
//       <div className="packages-sec">
//   <div className="container">
//   <div class="games">
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1715591843" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>Rust</span>
//             <p>Wilderness</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg?t=1710347075" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://files.facepunch.com/lewis/1b1311b1/gmod-logo.svg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>Garry's Mod</span>
//             <p>Physics Sandbox</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1567020/capsule_616x353.jpg?t=1676560649" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://static.bandainamcoent.eu/high/the-dark-pictures/the-devil-in-me/00-page-setup/tdim_header_mobile_new-keyart.jpg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>The Devil In Me</span>
//             <p>Survivor Horror</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
// </div>
//   <div class="games pt-2">
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1715591843" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>Rust</span>
//             <p>Wilderness</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg?t=1710347075" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://files.facepunch.com/lewis/1b1311b1/gmod-logo.svg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>Garry's Mod</span>
//             <p>Physics Sandbox</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
//   <div class="banner_wrapper">
//     <div class="banner">
//       <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1567020/capsule_616x353.jpg?t=1676560649" alt="Banner Game" class="banner__image"/>
//     </div>
//     <div class="card__wrapper">
//       <div class="card">
//         <div class="card__info">
//           <img src="https://static.bandainamcoent.eu/high/the-dark-pictures/the-devil-in-me/00-page-setup/tdim_header_mobile_new-keyart.jpg" alt="Game" class="card__avatar"/>
//           <div>
//             <span>The Devil In Me</span>
//             <p>Survivor Horror</p>
//           </div>
//         </div>
//         <button>Get</button>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>
//       </div>
//     </div>
//   )
// }

// export default Packages

// Packages.js
import React from 'react';

// Sample data for Andhra Pradesh spiritual packages
const packagesData = [
  {
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Places-to-Visit-in-Tirupati600x400.jpg", // Replace with real image URL
    avatar: "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Places-to-Visit-in-Tirupati600x400.jpg", // Replace with real image URL
    title: "Tirupati Temple Tour",
    description: "Experience the divine blessings at the sacred Tirupati Temple with a guided tour."
  },
  {
    image: "https://media1.thrillophilia.com/filestore/4q2a6kti7gjnzotoidtl8ix0mhx9_1591622876_shutterstock_1009388653.jpg", // Replace with real image URL
    avatar: "https://media1.thrillophilia.com/filestore/4q2a6kti7gjnzotoidtl8ix0mhx9_1591622876_shutterstock_1009388653.jpg", // Replace with real image URL
    title: "Srisailam Temple Visit",
    description: "Visit the revered Srisailam Temple, known for its rich history and spiritual significance."
  },
  {
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Places-to-visit-in-Vijayawada600x400.jpg", // Replace with real image URL
    avatar: "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Places-to-visit-in-Vijayawada600x400.jpg", // Replace with real image URL
    title: "Vijayawada Temple Experience",
    description: "Explore the spiritual ambiance of the Kanaka Durga Temple in Vijayawada with our exclusive package."
  },
 
];
const packagesDataTwo = [
  {
    image: "https://facts.net/wp-content/uploads/2023/07/32-facts-about-warangal-1688627100.jpeg", // Replace with real image URL
    avatar: "https://facts.net/wp-content/uploads/2023/07/32-facts-about-warangal-1688627100.jpeg", // Replace with real image URL
    title: "Warangal Temple Tour",
    description: "Discover the ancient temples of Warangal, each a testament to Andhra Pradesh’s spiritual heritage."
  },
  {
    image: "https://turuhi.com/storage/story/7-Jwala-Narasmiha-Temple-Ahobilam.jpg", // Replace with real image URL
    avatar: "https://turuhi.com/storage/story/7-Jwala-Narasmiha-Temple-Ahobilam.jpg", // Replace with real image URL
    title: "Ahobilam Temple Journey",
    description: "Embark on a spiritual journey to Ahobilam, known for its ancient temples and divine energy."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ananta_Padmanabha_Swami_Temple.jpg/1200px-Ananta_Padmanabha_Swami_Temple.jpg", // Replace with real image URL
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ananta_Padmanabha_Swami_Temple.jpg/1200px-Ananta_Padmanabha_Swami_Temple.jpg", // Replace with real image URL
    title: "Undavalli Caves Tour",
    description: "Explore the historical Undavalli Caves, famous for their intricate rock-cut architecture and spiritual significance."
  },
 
];

const Packages = () => {
  return (
    <div className="packages-sec">
      <h4 className='titles-main' >Our Spiritual Packages</h4>
      <div className="container">
        <div className="games">
          {packagesData.map((pkg, index) => (
            <div className="banner_wrapper" key={index}>
              <div className="banner">
                <img src={pkg.image} alt={`Banner for ${pkg.title}`} className="banner__image" />
              </div>
              <div className="card__wrapper">
                <div className="card">
                  <div className="card__info">
                    <div>
                      <span>{pkg.title}</span>
                      <p>{pkg.description.slice(0,70)}...</p>
                    </div>
                  </div>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="games pt-3">
          {packagesDataTwo.map((pkg, index) => (
            <div className="banner_wrapper" key={index}>
              <div className="banner">
                    <img src={pkg.avatar} alt={`Avatar for ${pkg.title}`} className="card__avatar" />
              </div>
              <div className="card__wrapper">
                <div className="card">
                  <div className="card__info">
                    <div>
                      <span>{pkg.title}</span>
                      <p>{pkg.description.slice(0,70)}...</p>
                    </div>
                  </div>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
