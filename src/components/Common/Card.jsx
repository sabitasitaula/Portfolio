import React from 'react'

const Card = ({imageUrl,altText,cardTitle,cardText,gitUrl}) => {
  return (
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} class="card-img-top" alt={altText} />
            <div class="card-body">
                  <h5 class="card-title">{cardTitle}</h5>
                  <p class="card-text">{new Date(cardText).toDateString()}</p>
                  <a href={gitUrl} class="btn btn-primary" target="_blank" rel='noreferrer'>Goto Code</a>
            </div>
          </div>
    </div>
  )
}

export default Card