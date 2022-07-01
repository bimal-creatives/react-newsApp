import React from 'react'

const NewsItem = (props) => {

    const {title, description, imageurl, newsurl} = props

  return (
    <div className='my-3' >
        <div class="card" style={{width: '18rem'}}>
            <img src={imageurl} class="card-img-top" alt="..."/> 
            <div class="card-body">
                <h5 class="card-title">{title}...</h5>
                <p class="card-text">{description}...</p>
                <a href={newsurl} target="_blank" class="btn btn-primary btn-sm">Read More</a>
            </div>
            </div>
    </div>
  )
}

export default NewsItem