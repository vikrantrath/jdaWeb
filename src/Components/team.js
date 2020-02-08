import React from "react";
import JDASectionHeader from "./shared/JDASectionHeader";
import "./team.css";

export default function() {
  const teamItems = [
    { memberName: "K.C Agarwal", memberPhoto: "", memberDesignation: "C.A" },
    { memberName: "Rakesh Gupta", memberPhoto: "", memberDesignation: "C.A" },
    {
      memberName: "Pankaj Kumpawat",
      memberPhoto: "",
      memberDesignation: "C.A"
    },
    { memberName: "Shekhar Nigam", memberPhoto: "", memberDesignation: "C.A" },
    { memberName: "Ajay Gupta", memberPhoto: "", memberDesignation: "C.A" }
  ];

  return (
    <section
      id="team"
      style={{
        marginTop: "140px",
        padding: "100px 0px",
        backgroundColor: "#f5f8f9"
      }}
    >
      <div className="container">
        <JDASectionHeader
          headingText={"The Team"}
          headingDescription={
            "With our team of experts in accountancy, Company Law and the corporate taxation system; Jain Dhingra & Associates stands high on its core values and services with its certified and experienced Chartered Accountants, Business Analysts, Tax and Finance Experts, IT Professionals, and the Support Staff who strive to resolve your queries and guide you at their best. Meet the top-notch professionals of Jain Dhingra &amp; Associates."
          }
          backgroundText={"TEAM"}
        />
        <div className="row justify-content-between">
          {teamItems.map(member => {
            return (
              <div className="col-md-12 col-lg-4" style={{ width: "360px" }}>
                <div className="team-box">
                  <img
                    src="https://envytheme.com/tf-jsx-demo/rosy/static/media/blog-four.c936976f.jpg"
                    alt="Description"
                  />
                  <div className="box-content">
                    <div className="box-inner-content">
                      <h3 className="title">{member.memberName}</h3>
                      <span className="post">{member.memberDesignation}</span>
                      <ul className="icon list-inline">
                        <li className="list-inline-item">
                          <a href="/tf-jsx-demo/rosy/#0">
                            <i
                              className="icofont-facebook"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/tf-jsx-demo/rosy/#0">
                            <i
                              className="icofont-linkedin"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/tf-jsx-demo/rosy/#0">
                            <i
                              className="icofont-twitter"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mt-4 text-center align-center">
          <div className="col-md-8 col-sm-12 offset-md-2 mt-4">
            <i className="icofont-quote-left"></i>
            <p className="font-weight-bold text-secondary text-capitalize font-italic">
              Partner having 25 years of qualitative experience in various
              Finance &amp; Accounts functions, Annual finalization of Accounts
              , Internal Controls, Budgeting &amp; Budgetary Controls, Inventory
              Controls, Product Costing, Credit Control, Contract Manufacturing
              Operation ,Internal Financial Controls (IFC) ,ERP Implementation
              (SME), Financial Statements preparation &amp; analysis, Statutory
              &amp; Tax Audits , Business Analysis, arrangement of Loans from
              Financial Institutions &amp; arranging credit ratings for
              Organisations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
