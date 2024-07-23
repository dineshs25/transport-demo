import React from 'react'

const Faq = () => {
  return (
    <div>
        <div className="faq-section">
    <div className="container">
    <section>
        <div class="faq">
            <div class="faq-left-desktop">
                <div class="faq-left-image-desktop">
                    <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-desktop.svg" alt="illustration-woman-online-desktop"/>
                </div>
                <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-box-desktop.svg" alt="illustration-box-desktop"/>
            </div>
            <div class="faq-left-mobile">
                <div class="faq-left-image-mobile">
                    <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-mobile.svg" alt="illustration-woman-online-mobile"/>
                </div>
            </div>
            <div class="faq-right">
                <div class="faq-title">FAQ</div>
                <div className="faq-body">
                <details>
                  <summary>What is included in Mr. Pilgrim's tour packages?</summary>
                  <p>Our tour packages typically include transportation, accommodation, guided tours, and some meals. Specific inclusions vary by package.</p>
                </details>
                <details>
                  <summary>How can I book a tour with Mr. Pilgrim?</summary>
                  <p>You can book a tour through our website or by contacting our customer service team. We offer online booking options and phone support.</p>
                </details>
                {/* <details>
                  <summary>Are there any discounts for group bookings?</summary>
                  <p>Yes, we offer discounts for group bookings. Please contact us for more details and to receive a customized quote for your group.</p>
                </details> */}
                <details>
                  <summary>What should I pack for the tour?</summary>
                  <p>We recommend packing comfortable clothing suitable for the weather, personal toiletries, any necessary medications, and a camera to capture your experiences.</p>
                </details>
                <details>
                  <summary>What is the cancellation policy for tours?</summary>
                  <p>Our cancellation policy varies depending on the tour package. Generally, cancellations made 30 days before departure are fully refundable. Please review the terms and conditions specific to your booking.</p>
                </details>
                <details>
                  <summary>Are the tours suitable for all ages?</summary>
                  <p>Our tours are designed to be enjoyable for a wide range of ages. However, some tours may involve physical activities that are more suitable for certain age groups. Please check the tour details for specific requirements.</p>
                </details>
                <details>
                  <summary>What safety measures are in place during the tours?</summary>
                  <p>We prioritize safety and follow all local regulations and guidelines. Our tours include trained guides, safety briefings, and emergency support to ensure a secure and enjoyable experience.</p>
                </details>
                {/* <details>
                  <summary>Can I make changes to my tour itinerary?</summary>
                  <p>Changes to the itinerary may be possible depending on availability and the nature of the changes. Please contact us as soon as possible to discuss any modifications to your tour.</p>
                </details> */}
              </div>
            </div>
        </div>
    </section>
    </div>
        </div>
    </div>
  )
}

export default Faq
