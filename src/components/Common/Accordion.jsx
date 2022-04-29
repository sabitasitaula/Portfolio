import React from "react";

const Accordion = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong className="companyName">Sarobar Technology Pvt. Ltd.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            // data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              I have done 3 month <strong>React Developer Internship</strong> at Sarobar
              Technology Pvt. Ltd. where I am involved in customer dashboard of
              logistics management system (React Js) and designed and developed
              user interface using material UI. This application has customer
              authentication using JWT token. We had Fetched and posted data to
              backend API using axios and Embedded navigation using react router
              DOM.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong className="companyName">Optimum Futurist</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            // data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              I am currently doing 3 month <strong>Software Engineering Trainee</strong> at
              Optimum Futurist where I am learning about the whole lifecycle of
              Software Development process.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Accordion;
