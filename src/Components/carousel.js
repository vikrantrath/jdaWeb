import React, { useState } from "react";
import { Carousel, CarouselItem } from "reactstrap";

import bg1 from "../assets/business.jpeg";
import bg2 from "../assets/calc.jpeg";

import "./carousel.css";

const items = [
  {
    src: bg1,
    altText: "Slide 1",
    caption: "Slide 1",
    contentHeading: "About Us",
    content: [
      "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973.",
      "The certified and trusted advisors of Jain Dhingra & Associates strive to serve and support client with their exquisite services and guidance for entrepreneurs dealing in manufacturing specially FMCG sector, Trading, Exports, Charitable Institutions etc. and looking for the best financial advice for the optimum solutions of Business setup, Audit & Assurance, Taxation, Statutory Compliances, Outsourcing Services, CFO Services and others.",
      "Since its inception, Jain Dhingra & Associates is serving the entities of corporate and dealing with the accounting affairs of giant firms, keeping loyalty and dedication as their prime armours.",
      "With our best team members who are professionally experienced and well-versed with the world of digitalization; always stand to serve nothing like second with their best works of SAP, M.S. Office, Tally and other latest software programs."
    ]
  },
  {
    src: bg2,
    altText: "Slide 2",
    caption: "Slide 2",
    contentHeading: "About Our Founders",
    content: [
      "It was in 1973 when two wise brains of the accounting field CA Ravindra Nath Dhingra and CA Bhoopat S. Jain thought of establishing an entity to provide professional guidance together with all their skills and experiences under one roof.",
      "With their sincere efforts and potentials, they succeed in building Jain Dhingra &amp; Associates as a big name with a small team in the field of Accounts and taxation.",
      "They guided Entrepreneurs in Audit and Taxation, Legal documentations and compliances, proprietary and partnership affairs of small, medium and large associations, and also assisted individuals to Start-up their businesses smoothly without any hiccups of accounting and legal documentation, primarily for the manufacturing, trading, and exports businesses.",
      "It's been more than 46 years of successful navigation and service providence to around 250 of small and large entities who showed their trust on JDA and we prove it worth for them. Besides this, JDA has also been auditing most of the well-known National Banks, Government Insurance Companies and Corporation (Govt. Undertakings) for more than a four decade.",
      "Now with the booming world of digitalisation, we also want to provide services to our clients more easily and smartly to the individuals and firms looking for professional guidance for their account and taxation related digitalisation queries. We know that the subjects of accounting and taxation require sincerity, trust and dedication and JDA is the name with all three of them."
    ]
  }
];

const Example = props => {
  const [animating, setAnimating] = useState(false);

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          className="carousel-slide-item"
          style={{ backgroundImage: "url(" + item.src + ")" }}
        >
          <div className="text-white text-left h4 col-md-12 p-5 blockquote">
            <div className="display-3 mb-2">{item.contentHeading}</div>
            {item.content.map(e => {
              return <p>{e}</p>;
            })}
          </div>
        </div>
      </CarouselItem>
    );
  });

  return <section id="about" ><Carousel activeIndex={props.activeIndex}>{slides}</Carousel></section>;
};

export default Example;
