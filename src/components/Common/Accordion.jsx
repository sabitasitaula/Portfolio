import React from "react";

const Accordion = ({ header1, description1, header2, description2 }) => {
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
              <strong className="companyName">{header1}</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
          >
            <div class="accordion-body">{description1}</div>
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
              <strong className="companyName">{header2}</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
          >
            <div class="accordion-body">{description2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
