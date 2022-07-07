import React from 'react'
import logoImage from "../Images/yuka.jpg"

const Gallery = () => {
  return (
    <div className='gallery'>
      <h1 className='text-center p-5'><span>G</span>allery</h1>
      <div className='row g-0'>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mb-5">
          <img
            alt=""
            src={logoImage}
            width="340"
            height="480"
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
