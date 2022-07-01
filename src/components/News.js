import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = () => {

    const [articles, SetArticles] = useState()

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3093a016d18647959e842117e4e63411')
        .then (response => response.json)
        .then (json => console.log(json))
    }, [articles])


  return (
    <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className='row'>
        {articles.map( (element) => {
            return(
                <div className='col-md-4' key={element.url} >
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsurl={element.url}  />
            </div>
            )
            
        })}
            

            
        </div>
        
    </div>
  )
}

export default News