import React, { useState } from 'react'
import NewsItem from './NewsItem'

const News = () => {

    
    
    
    const demoarticle= [
        
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Global smartphone, PC shipments to decline in 2022 on China slowdown - Gartner - Reuters.com",
            "description": "China's slowing economy and an inflation-driven drop in consumer spending are expected to drag down global shipments of computers and smartphones this year, according to research firm Gartner.",
            "url": "https://www.reuters.com/technology/global-smartphone-pc-shipments-decline-2022-china-slowdown-gartner-2022-06-30/",
            "urlToImage": "https://www.reuters.com/resizer/2vvPgEqhFFGS-mnURNlibN66x3s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HWNV43ZZJVKADEXEWOKYZT5LEY.jpg",
            "publishedAt": "2022-06-30T07:10:00Z",
            "content": "June 30 (Reuters) - China's slowing economy and an inflation-driven drop in consumer spending are expected to drag down global shipments of computers and smartphones this year, according to research … [+1512 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Gartner revises 2022 mobile sales estimates to fall 7.1% - Reuters.com",
            "description": "Gartner forecast global mobile phone sales to fall 7.1% this year on Thursday, revising its earlier estimate of a growth of 2.2%, citing inflation, Russia's invasion of Ukraine and lockdowns in China.",
            "url": "https://www.reuters.com/business/media-telecom/gartner-revises-2022-mobile-sales-estimates-fall-71-2022-06-30/",
            "urlToImage": "https://www.reuters.com/resizer/n7KsvwqMnKCoUsx0Ynd5y94Veew=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CGXMILVKSNJJZPPDYF5M46NXYA.jpg",
            "publishedAt": "2022-06-30T07:06:00Z",
            "content": "STOCKHOLM, June 30 (Reuters) - Gartner forecast global mobile phone sales to fall 7.1% this year on Thursday, revising its earlier estimate of a growth of 2.2%, citing inflation, Russia's invasion of… [+2017 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Samsung Elec starts 3-nanometre chip production to lure new foundry customers - Reuters.com",
            "description": "Samsung Electronics Co Ltd said on Thursday it has begun mass producing chips with advanced 3-nanometre technology, the first to do so globally, as it seeks new clients to c…",
            "url": "https://www.reuters.com/technology/samsung-elec-starts-3-nanometre-chip-production-lure-new-foundry-customers-2022-06-30/",
            "urlToImage": "https://www.reuters.com/resizer/s7SsVqat4BZwwvTaxEp0ROMENPI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EJ44HKWM5RM2TCOSJ42L2GMCL4.jpg",
            "publishedAt": "2022-06-30T02:01:00Z",
            "content": "SEOUL, June 30 (Reuters) - Samsung Electronics Co Ltd (005930.KS) said on Thursday it has begun mass producing chips with advanced 3-nanometre technology, the first to do so globally, as it seeks new… [+2900 chars]"
            }
        ]
        
        const [articles, SetArticles] = useState(demoarticle)


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