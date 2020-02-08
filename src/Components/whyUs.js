import React from "react";
import JDASectionHeader from "./shared/JDASectionHeader";

export default function() {
  const sectionItems = [
    {
      sectionHeader: "Accounting",
      sectionDescription:
        "Maintain your Books of Accounts with our skilled and experienced Chartered Accountants who are ready to guide you with all their knowledge and potentials.",
      icon: "icofont-spreadsheet"
    },
    {
      sectionHeader: "Taxation",
      sectionDescription:
        "Consult with us for all your taxation tasks and plan the most effective taxation strategies with us which will indeed help your business to excel.",
      icon: "icofont-ebook"
    },
    {
      sectionHeader: "Legal Guidance",
      sectionDescription:
        "To run a business in the country of laws is not a cup of tea unless you're a pro but with us, you can and that too according to all the legal compliances of India.",
      icon: "icofont-briefcase"
    },
    {
      sectionHeader: "Business Advice",
      sectionDescription:
        "Understanding your business and suggesting the best for the same is our prime agenda for which we serve 24X7 with our team to make your business graph always inclined.",
      icon: "icofont-data"
    }
  ];

  return (
    <section id="whyus" style={{padding: "100px 0px", backgroundColor: "#f5f8f9" }}>
      <div className="container">
        <JDASectionHeader
          headingText={"Why Jain Dhingra & Associates?"}
          headingDescription={
            " We at Jain Dhingra & Associates, strive to add value to your work with our best financial guidance and services at various genres. With our easily accessible professional guidance and support, you can groom your business complying all regulatory compliances."
          }
          backgroundText={"Why J.D.A"}
        />
        <div className="row">
          {sectionItems.map(ele => {
            return (
              <div className="col-md-6 col-lg-6 text-center">
                <div className="service-item border border-light">
                  <div className="glyph mb-2">
                    <i className={ele.icon}></i>
                  </div>
                  <h3 className="mb-4 text-secondary font-weight-bold">
                    {ele.sectionHeader}
                  </h3>
                  <p className="text-muted font-weight-normal">
                    {ele.sectionDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
