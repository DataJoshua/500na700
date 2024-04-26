import "./Banner.scss";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import arrow from "../../assets/imgs/big-arrow.svg";
import Tag from "../Tag";

function Banner({ data }) {
  const imageStyles = (img) =>  
                      ({ background: `url(${img})`,
                        backgroundRepeat: "no-repeat", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center"
                      })
  return (
    <>
      <Splide hasTrack={ false }>
        <div className="banner">
          <SplideTrack>
            {data?.map(val =>
              <SplideSlide key={val.id} className="slide">
                <div className="slide__aside">
                  <div className="banner__tag">
                    <Tag label={val.tag}/>
                  </div>
                  <h1 className="slide__title">{val.title}</h1>
                  <p className="slide__description">{val.description}</p>
                  {val.hasOwnProperty("date") && <span className="slide__data">{val.date}</span>}
                </div>
                <div className="image-wrapper">
                  <div style={imageStyles(val.img)} className="image-container"></div>
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
    </>
  )
}

export default Banner;