import React, { useEffect,useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

const NewsList=()=> {
  const [articles,setArticles]=useState([]);
  const [query,setQuery]=useState('technology');
 useEffect(()=>{
  const getArticles=async()=>{
    const response=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=78a692b538124f488ee2e33e8987ba07`);
    setArticles(response.data.articles);
    console.log(response);
    // console.log(response.data.articles.urlToImage)
  }
  getArticles();
},[]);
return (
  <div>
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>Search your news...</h2>
    <input
      type='text'
      className='form-input'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
    />
  </form>
 
      {articles.map((article) => {
          return(
              <NewsItem 
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage} 
              />
          )
      })}
  </div>
)
}
export default NewsList;