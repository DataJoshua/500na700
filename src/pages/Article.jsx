import { useParams } from "react-router-dom";
import ArticleElement from "../components/ArticleElement";
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

  return ( 
    <>
      {newsArticle && <ArticleElement article={newsArticle} />}
    </>
   )
}

export default Article;
