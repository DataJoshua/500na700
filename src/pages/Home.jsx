import Banner from "../components/Banner";
import News from "../components/News";

import { getDocs, collection, getFirestore  } from "firebase/firestore";

import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";

function Home() {
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
      const data = await getDocs(collection(getFirestore(app), "banner"))
  
      setNews(toArray(data))
    })()
  }, [app])

  return ( <>
    <Banner data={news}/>
    <News/>
    <Faq/>
    <ContactForm/>
  </>)
}

export default Home;
