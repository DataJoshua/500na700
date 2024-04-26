import { useParams } from "react-router-dom";
import news1 from "../assets/imgs/news1.png";
import ArticleElement from "../components/ArticleElement";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirebase";
import { getDoc, doc, getFirestore } from "firebase/firestore";

function Article() {
  const [newsArticle, setNewsArticle] = useState()
  const { id } = useParams()
  const app = useFirestore()

  useEffect(()=> {
    (async () => {
      const data = await getDoc(doc(getFirestore(app), "news", id))

      setNewsArticle(data.data())
    })()
  }, [app, id])

  const articleElement =  {
    id: nanoid(),
    title: "Заголовок новости 1",
    subtile: "",
    description: `В студии уверены, что их подход к дизайну и внимание к деталям помогут создать логотип, который станет визитной карточкой любой компании.
    Студия уже имеет опыт работы с крупными клиентами из различных отраслей, и теперь предлагает свои услуги малым и средним предприятиям. “Мы стремимся к тому, чтобы каждый клиент получил именно то, что ему нужно, и в то же время оставался доволен результатом”, - говорит руководитель студии “500 на 700”.
    Новый сервис уже доступен на сайте студии, и клиенты могут заказать разработку логотипа как для своего бизнеса, так и для социальных сетей. “Создание логотипа - это важный шаг для любого бизнеса, и мы рады помочь в этом процессе”, - добавляет руководитель студии.`,
    img: news1,
    date: "01 января 1990"
  }

  return ( 
    <>
      {newsArticle && <ArticleElement article={newsArticle} />}
    </>
   )
}

export default Article;
