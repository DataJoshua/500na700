import "./News.scss";
import news1 from "../../assets/imgs/news1.png";
import news2 from "../../assets/imgs/news2.png";
import news3 from "../../assets/imgs/news3.png";
import news4 from "../../assets/imgs/news4.png";
import news5 from "../../assets/imgs/news5.png";
import news6 from "../../assets/imgs/news6.png";

import { nanoid } from "nanoid";
import NewsElement from "./components/NewsElement";
import Banner from "../Banner";
import { useEffect, useState } from "react";

function News() {
  const [isResponsive, setIsResponsive] = useState(false)

  const data = [
    {
      id: nanoid(),
      title: "Заголовок новости 1",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news1,
      date: "01 января 1990"
    },
    {
      id: nanoid(),
      title: "Заголовок новости 2",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news2,
      date: "01 января 1990"
    },
    {
      id: nanoid(),
      title: "Заголовок новости 3",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news3,
      date: "01 января 1990"
    },
    {
      id: nanoid(),
      title: "Заголовок новости 4",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news4,
      date: "01 января 1990"
    },
    {
      id: nanoid(),
      title: "Заголовок новости 5",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news5,
      date: "01 января 1990"
    },
    {
      id: nanoid(),
      title: "Заголовок новости 6",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: news6,
      date: "01 января 1990"
    }
  ]

  useEffect(()=> {
    if(window.innerWidth <= 970) {
      setIsResponsive(true)
    }

    const handleOnResize = () => {
      if(window.innerWidth <= 970) {
        setIsResponsive(true)
      }
      else {
        setIsResponsive(false)
      }
    }

    const event = window.addEventListener("resize", handleOnResize)

    return () =>  window.removeEventListener("resize", event)
  },[])

  return ( 
    <>
      <main className="news">
        <h1 className="news__title">НОВОСТИ</h1>
        {
          isResponsive ? <Banner data={data}/> :
                         <div className="news__container">
                          {data.map(val => <NewsElement key={val.id} {...val}/>)}
                         </div>
        }
      </main>
    </>
  )
}

export default News;