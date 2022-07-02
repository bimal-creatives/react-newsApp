import React from 'react'

const NewsItem = (props) => {

    const {title, description, imageurl, newsurl, date} = props

  return (
    <div className='my-2' >
        <div class="card" style={{width: '22rem'}}>
            <img src={!imageurl?'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80':imageurl} class="card-img-top" alt="..."/> 
            <div class="card-body">
                <h5 class="card-title">{title}...</h5>
                <p class="card-text">{!description? 'description' : description }...</p>
                <p class="card-text"><small class="text-muted">{date}</small></p>
                <a href={newsurl} rel="noreferrer" target="_blank" class="btn btn-primary btn-sm">Read More</a>
            </div>
            </div> 
    </div>
  )
}

export default NewsItem