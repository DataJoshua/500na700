import "./Banner.scss";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import headerImg from "../../assets/imgs/photo1.jpg";
import headerImg2 from "../../assets/imgs/photo2.png";
import headerImg3 from "../../assets/imgs/photo3.png";

import arrow from "../../assets/imgs/big-arrow.svg";
import Tag from "../Tag";
import { nanoid } from "nanoid";

function Banner() {
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
      title: "Заголо вок 2 Заголо вок 2 Заголо вок 2",
      description: "Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта",
      img: headerImg3,
      tag: "Сайты"
    }
  ]

  return ( 
    <>
      <Splide hasTrack={ false }>
        <div className="banner">
          <SplideTrack>
            {data.map(val =>
              <SplideSlide key={val.id} className="slide">
                <div className="slide__aside">
                  <div className="banner__tag">
                    <Tag label={val.tag}/>
                  </div>
                  <h1 className="slide__title">{val.title}</h1>
                  <p className="slide__description">{val.description}</p>
                </div>
                <div className="image-container">
                  <img className="image-container__img" src={val.img} alt="" />
                </div>
              </SplideSlide>
            )}
          </SplideTrack>

          <div className="splide__arrows">
            <img src={arrow} alt="prev" className="custom-splide--prev splide__arrow splide__arrow--prev" />
            <img src={arrow} alt="next" className="custom-splide--next splide__arrow splide__arrow--next" />
          </div>        
        </div>
      </Splide>
      <br />
    </>
  )
}

export default Banner;