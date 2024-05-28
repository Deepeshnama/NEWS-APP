import React, { useContext, useEffect } from "react";
import Caraousel from "../components/Caraousel";
import NewsCard from "../components/NewsCard";
import NewsContext from "../Context/news/NewsContext";
import { fetchNews } from "../Context/news/NewsActions";
import ThemeContext from "../Context/theme/ThemeContext";

const Home = () => {

  const {darkMode} = useContext(ThemeContext)

  const {allNews , dispatch} = useContext(NewsContext)

const getNews = async (topic) => {
  const data = await fetchNews(topic)
  
  dispatch({
    type : 'GET_NEWS' ,
    payload : data ,
  })

}

  useEffect(() => {
    getNews("Indore")
  } , [])

  if(!allNews || allNews.length === 0 ){
    return (
      <h1 className="text-secondary text-center my-3 display-1">Loading...</h1>
    )
  }

  return (
    <>
      <Caraousel />

      <div className={darkMode ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"}>
        <h1 className="text-center my-3">TOP NEWS</h1>

        <section>
          <div className="row">

            <div className="col-md-12 col-sm-12 g-3">
             {
              allNews.map((news , index) => <NewsCard key = {index} news = {news} />)
             }
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
