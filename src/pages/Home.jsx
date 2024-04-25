import Banner from "../components/Banner";
import News from "../components/News";

import headerImg from "../assets/imgs/photo1.jpg";
import headerImg2 from "../assets/imgs/photo2.png";
import headerImg3 from "../assets/imgs/photo3.png";
import { nanoid } from "nanoid";

function Home() {
  const data = [
    {
      id: nanoid(),
      title: "Заголо вок 1 Заголо вок 1 Заголо вок 1",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: headerImg,
      tag: "Сайты"
    },
    {
      id: nanoid(),
      title: "Заголо вок 2 Заголо вок 2 Заголо вок 2",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: headerImg2,
      tag: "Сайты"
    },
    {
      id: nanoid(),
      title: "Заголо вок3 Заголо вок 3 Заголо вок 3",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: headerImg3,
      tag: "Сайты"
    }
  ]

  return ( <>
    <Banner data={data}/>
    <News/>
  </>)
}

export default Home;
