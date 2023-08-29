import React from 'react'
import './search.css'
export default function More({gap}) {
  return (
    <div> <div className="con">
    <button className="relc">Related Contents</button>
  </div>
  <div className="searcheditems vum">
    
      {gap.map((list, id) => (
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
      
    </div>
  )
}
