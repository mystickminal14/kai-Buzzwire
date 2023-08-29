import React, { useState, useEffect } from "react";
import "./search.css";
import axios from "axios";
export default function Search() {
  const [val, newval] = useState();
  const [sb, setsb] = useState('apple');
  const great = (e) => {
    newval(e.target.value);
  };
  const click = () => {
    setsb(val);
    newval(''); 
    setsear([]);
    window.scrollTo({
      top: window.scrollY + 300,
      behavior: 'smooth'
    });
   
    fetcch();
  };

  const [sear, setsear] = useState([]);
  async function fetcch() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${sb}&apiKey=bf01118bbd7c492abad31cd685400e7a`
    );
    setsear(response.data.articles);
    console.log(response)
    
  }


  const loss = sear.slice(0, 1);





  return (
    <>
      <div className="mod">
        <div className="search">
          <input type="text" value={val}onChange={great} placeholder="Search news" />
          <button onClick={click} className="searchbth">
            Search
          </button>
        </div>
        <div className="searcheditems">
          {sear.map((list, id) => (
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
                  <i>source :{list.source.name}</i>
                </p>
                <p>{list.publishedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
