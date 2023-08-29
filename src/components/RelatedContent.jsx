import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './search.css';
import More from './More';


export default function RelatedContent() {
  
  const [rel, newrel] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf01118bbd7c492abad31cd685400e7a');
      const articles = response.data.articles;
      newrel(articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const rell = rel.slice(0, 3);
const mern=rel.slice(7,10)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="con">
        <button className="relc"> Top Headlines</button>
      </div>
      <div className="searcheditems vum">
        
          {rell.map((list, id) => (
            <div className="card" key={id}>
              <div className="ca">
                <img src={list.urlToImage} alt="images" />
              </div>
              <div className="text">
                <h3>{list.title}</h3>
                <p>
                  {list.content && list.content.length >= 30
                    ? `${list.content.slice(0, 200)}...`
                    : null}
                </p>
                <button className="read"><a href={list.url}  target="_blank">READ MORE</a></button>
              </div>
              <div className="so">
                <p>
                  <i>source: {list.source.name}</i>
                </p>
                <p>{list.publishedAt}</p>
              </div>
            </div>
        ))}

      </div>
      <More gap={mern}/>
    </div>
  );
}
