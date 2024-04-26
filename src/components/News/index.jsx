import "./News.scss";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import useFirebase from "../../hooks/useFirebase";
import NewsElement from "./components/NewsElement";
import Banner from "../Banner";
import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState()
  const app = useFirebase()

  const toArray = (data) => {
    const res = []
    data.forEach(val => {
      const id = val.id
      const obj = val.data()
      obj["id"] = id

      res.push(obj)
    })

    res.sort((a, b) => a.order - b.order)

    return res;
  }

  useEffect(()=> {
    (async () => {
      const data = await getDocs(collection(getFirestore(app), "news"))
  
      setNews(toArray(data))
    })()
  }, [app])

  return ( 
    <>
      <main className="news">
        <h1 className="news__title">НОВОСТИ</h1>
          <div className="news__small">
            <Banner data={news} isRedirectable/> :
          </div>
          <div className="news__container">
            {news?.map(val => <NewsElement key={val.id} {...val}/>)}
          </div>
      </main>
    </>
  )
}

export default News;
