import React, { useEffect,useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';
const NewsList=()=> {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const getArticles=async()=>{
      const response=await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=53a96d038ac3478c9e6fc21f2e87224b`);
      setArticles(response.data.articles);
      console.log(response);
    }
    getArticles();
  },[]);
  return (
    <div>
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