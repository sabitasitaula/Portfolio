import React from 'react'

const Card = ({imageUrl,altText,cardTitle,cardText,gitUrl}) => {
  return (
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt={altText} />
            <div className="card-body">
                  <h5 className="card-title">{cardTitle}</h5>
                  <p className="card-text">{new Date(cardText).toDateString()}</p>
                  <a href={gitUrl} className="btn btn-primary" target="_blank" rel='noreferrer'>Goto Code</a>
            </div>
          </div>
    </div>
  )
}

export default Card