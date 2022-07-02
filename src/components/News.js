import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem'

const News = (props) => {

  const {pagesize, category, country} = props

    const [articles, SetArticles] = useState([])
    const [loader, SetLoader] = useState(false)
    const [page, SetPage] = useState(1)
    const [totalResult, SetTotalResult] = useState()


    const handlenNextClick = () => {
      if (page+1> Math.ceil(totalResult/pagesize)){

      }
      else{

        SetPage(page+1)
      }
    }
  
    const handlenPreviousClick = () => {
      SetPage(page-1)
    }

    document.title = `${category}  NewsApp`

    useEffect(() => {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=3093a016d18647959e842117e4e63411&pagesize=${pagesize}&page=${page}`;
      SetLoader(true)
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          SetArticles(json.articles)
          SetTotalResult(json.totalResults)
          SetLoader(false)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, [country,category,pagesize,page]);

 
    

  return (
    <div className='container my-3'>
        <h1 className='text-center' >{category}</h1>
       
        <div className='row'>
        {articles.map( (element) => {
            return(
                <div className='col-md-4' key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} />
            </div>
            )
            
        })}
            
        </div>
     
        <div class=" container my-2 d-flex justify-content-between">
          <button disabled={page <=1 } type="button" class="btn btn-outline-primary" onClick={handlenPreviousClick} >&larr; prev</button>
          <button disabled={page+1> Math.ceil(totalResult/pagesize)} type="button" class="btn btn-outline-primary" onClick={handlenNextClick} >next 	&rarr;</button>
        </div>
        
    </div>
  )
}

export default News