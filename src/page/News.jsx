
import Wrapper from "../component/Wrapper";

import { useEffect } from "react";

import {useNewsContext} from '../context/NewsContext'

const News = ({className}) => {
    const {news,setNews,fetcNewsh} = useNewsContext();
    console.log(news);
   

  
    useEffect(()=>{
       (async()=>{
        const data = await fetcNewsh();
        setNews(data.articles);
       })()
    },[])
  return (


   

    <Wrapper>


        <div className={`grid grid-cols-4 gap-5 ${className}`}>

            {news.map((newsDetail)=>{
                return (
                      <NewsCard newsDetail={newsDetail} />
                )
            })}


    
    
    
        </div>
    </Wrapper>

  );
};

const NewsCard = ({newsDetail}) => {
  return (
    <>
      <div className="card bg-base-300  shadow-sm">
        <figure>
          <img className="object-contain aspect-video"
            src={newsDetail?.urlToImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{newsDetail.title}</h2>
          <p className="line-clamp-3">
           {newsDetail.description}
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=>window.open(newsDetail.url)} className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
