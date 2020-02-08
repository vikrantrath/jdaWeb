import React from "react";
import JDASectionHeader from "./shared/JDASectionHeader";
import "./servicesOffered.css";

export default function() {
  const serviceItems = [
    {
      headingText: "Business Setup",
      headingIcon: "icofont-mail",
      itemList: [
        "Start-up Business advice",
        "Registration of company",
        "Legal & Various types of Documentation",
        "Obtaining Approval from Government",
        "Providing end to end Business solution to clients"
      ]
    },
    {
      headingText: "Audit & Assurance",
      headingIcon: "icofont-briefcase",
      itemList: [
        "Statutory Audit",
        "Internal Audit",
        "IND AS Compliance",
        "IFC Framework Implementation",
        "Concurrent Audit",
        "Revenue Audit",
        "Stock Audit",
        "Management Assurance Services"
      ]
    },
    {
      headingText: "Taxation",
      headingIcon: "icofont-ebook",
      itemList: [
        "Tax Audit",
        "Tax & Regulatory compliances",
        "Tax Planning and Advisory",
        "Tax Assessment and Litigation Support",
        "Goods and Service Tax (GST)"
      ]
    },
    {
      headingText: "Business Support",
      headingIcon: "icofont-live-support",
      itemList: [
        "ERP Consultancy",
        "SOPs Development",
        "Regulatory Approvals",
        "Fund Raising",
        "Compliance",
        "Fixed Assets Management",
        "Financial Accounting",
        "Costing & Management services"
      ]
    },
    {
      headingText: "Statutory Compliances",
      headingIcon: "icofont-institution",
      itemList: [
        "Co-ordination for Government Approvals",
        "Other Legal Compliances",
        "Secretarial Support"
      ]
    },
    {
      headingText: "Outsourcing Services",
      headingIcon: "icofont-globe",
      itemList: [
        "Accounting Services",
        "Taxation compliances services",
        "Project Accounting",
        "Short term/Long term Management Need Based Services"
      ]
    },
    {
      headingText: "CFO Services",
      headingIcon: "icofont-bill",
      itemList: ["Budgeting", "Costing", "MIS", "Compliance"]
    }
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 0px",
        backgroundColor: "#f5f8f9"
      }}
    >
      <div className="container">
        <JDASectionHeader
          headingText={"Our Services"}
          headingDescription={
            "We shall provide you the best aid for your business finances and their respective documentation. Shake hands and allow us to be your best pal for:"
          }
          backgroundText={"Services"}
        />
        <div className="row mt-4 justify-content-between">
          {serviceItems.map(ele => {
            return (
              <div
                className="col-md-6 col-lg-4 text-center mb-4 mr-1 servicesCard"
                style={{ maxWidth: "350px" }}
              >
                <div className="glyph mb-2 mt-2">
                  <i className={ele.headingIcon}></i>
                </div>
                <h3 className="mb-4 font-weight-normal">{ele.headingText}</h3>
                <ul className="list-unstyled">
                  {ele.itemList.map(e => (
                    <li className="p-2 font-weight-bold cool-link">{e}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
