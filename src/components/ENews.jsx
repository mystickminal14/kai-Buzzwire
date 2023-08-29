import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./category.css";
import RelatedContent from "./RelatedContent";
export default function ENews() {
  const [val, newVal] = useState([]);
  const { category } = useParams();
  async function getData() {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=bf01118bbd7c492abad31cd685400e7a`
    );
    newVal(res.data.sources);
  }
  const gg = val.slice(0, 8);

  useEffect(() => {
    getData();
  }, [category]);
  return (
    <>
      <Navbar />
    <div className="b"><button className="category">TOP {category.toUpperCase()} STORIES</button>
    </div> 
      <div className="allCards">
        {gg.map((data, id) => {
          return (
            <div className="bigCards" key={id}>
              <div className="heaf">
                <h1>{data.name}</h1>
                <p>
                  <i>country : {data.country}</i>
                </p>
              </div>
              <p className="desc">{data.description}</p>
              <div className="close">
                <button className="gemm">
                  <a href={data.url}>Read full story</a>
                </button>
                <p className='lan'><i>language : {data.language}</i></p>
              </div>
            </div>
          );
        })}
      </div>
      <RelatedContent/>
    </>
  );
}
