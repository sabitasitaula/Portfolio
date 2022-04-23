import React from 'react'

const AboutCard = ({id, header, title, text, link}) => {
  return (
      <div>
          <div className="education">
            <div className="mbmLogo" id={id}></div>
            <div class="card">
              <div class="card-header" >
                <h1>{header}</h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                {title}
                </h5>
                <p class="card-text">
                  {text} 
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AboutCard