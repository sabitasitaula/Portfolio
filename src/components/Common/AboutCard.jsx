import React from 'react'

const AboutCard = ({id, header, title, text, link}) => {
  return (
      <div>
          <div className="education">
            <div className="mbmLogo" id={id}></div>
            <div className="card">
              <div className="card-header" >
                <h1>{header}</h1>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                {title}
                </h5>
                <p className="card-text">
                  {text} 
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
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