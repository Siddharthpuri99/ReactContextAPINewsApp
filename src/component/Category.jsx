import React from 'react'
import Wrapper from '../component/Wrapper'
import {useNewsContext} from '../context/NewsContext'
const Category = ({className}) => {

   const {setNews,fetcNewsh} = useNewsContext();

    const category = ['business',' entertainment','general',' health','science','sports','technology']

    const handleClick = async(e)=>{
        const cat = e.target.value;
        const data = await fetcNewsh(`/everything?q=${cat}`);
        setNews(data.articles);

    }
  return (
    <div className={`${className}`}>

    <Wrapper>
    <div className="max-w-full scroll w-fit flex  m-auto overflow-x-auto gap-5">

      {category.map((category)=>{
        return (
            <button onClick={handleClick} key={category} value={category} className="btn btn-primary">{category}</button>
        )
      })}
    </div>
    </Wrapper>
    </div>
  )
}

export default Category
