import React, { useState, useEffect } from 'react';
import './ads.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Ads() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf01118bbd7c492abad31cd685400e7a');
      const articles = response.data.articles;
      setData(articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const slicedData = data.slice(7, 8);
  const slicedData3 = data.slice(1, 2);
  const slicedData2 = data.slice(2, 3);
  return (
    <div className="boc">
      <div className="headlines">
        <button className='trend'>TRENDING NOW</button>
        <div className="newsbox">
       
            {slicedData.map((article, id) => (
              <div className='left' key={id}>
               <div className="img"> <img src={article.urlToImage} alt='images'/>
               </div>
               <div className="artc">  <p >{article.title}</p>
                <div className="n">
                <p>{article.publishedAt}</p>
                <button className='click'><Link to={article.url} target="_blank">Readmore</Link></button>
                </div> </div></div>
            ))}
            <div className="might">
            {slicedData2.map((article, id) => (
              <div className='right' key={id}>
               <div className="img2"> <img src={article.urlToImage} alt='images'/>
               </div>
               <div className="artc2">  <p >{article.title}</p>
                <div className="n">
                <p>{article.publishedAt}</p>
                <button className='click'><Link to={article.url} target="_blank">Readmore</Link></button>
                </div> </div></div>
            ))}
             {slicedData3.map((article, id) => (
              <div className='right2' key={id}>
               <div className="img3"> <img src={article.urlToImage} alt='images'/>
               </div>
               <div className="artc4">  <p >{article.title}</p>
                <div className="n">
                <p>{article.publishedAt}</p>
                <button className='click'><Link to={article.url} target="_blank">Readmore</Link></button>
                </div> </div></div>
            ))}
            
            </div>
          
        </div>
      </div>
    </div>
  );
}
