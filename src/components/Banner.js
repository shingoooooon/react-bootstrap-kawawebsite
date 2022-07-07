import React from 'react'
import { Carousel } from "react-bootstrap"
import Mv1 from "../Images/color1.jpg"
import Mv2 from "../Images/color2.jpg"
import Mv3 from "../Images/color3.jpg"
import Mv4 from "../Images/color4.jpg"
import Mv5 from "../Images/color5.jpg"

const Banner = () => {
  return (
    <div className='banner row flex-row-reverse'>
      <Carousel fade className='banner-carousel col-lg-9 col-md-9 col-sm-12'>
        <Carousel.Item interval={1000}>
          <img
            className="mv d-block w-100"
            src={Mv1}
            alt="1st slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="mv d-block w-100"
            src={Mv2}
            alt="2nd slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="mv d-block w-100"
            src={Mv3}
            alt="3rd slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="mv d-block w-100"
            src={Mv4}
            alt="4th slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="mv d-block w-100"
            src={Mv5}
            alt="5th slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='banner-text d-flex align-items-center col-lg-3 col-md-3 col-sm-12'>
        <h1 className='banner-kawa m-0'>KAWA</h1>
        <p className='banner-dynamic-text m-0'>Illustlation  Vtuber design  Game character Illustlation  Vtuber design  Game character Illustlation  Vtuber design</p>
      </div>
    </div>
  )
}

export default Banner
