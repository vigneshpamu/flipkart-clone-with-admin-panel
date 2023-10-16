/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'

const FeatureProducts = () => {
  const featureProducts = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697039006/a2pv3ydbpl67vryde3qq.png',
      title: 'Nikon DSLR Camera',
      bgColor: 'rgb(252,248,205)',
      borderColor: 'rgb(255, 238, 46)',
      name: 'dslr',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697039004/edc83dmfrtgwbidxi3ou.png',
      title: 'Infinite Headphone',
      bgColor: 'rgb(217,244,252)',
      borderColor: 'rgb(62, 210, 255)',
      name: 'headphone',
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697041430/hrluw634hc11lb5drgjs.png',
      title: 'Line Bedsheet',
      bgColor: 'rgb(245,220,223)',
      borderColor: 'rgb(253, 110, 127)',
      name: 'bed',
    },
    {
      id: 4,
      img: 'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697039004/fnp0q3f086ejbh0jtnfu.png',
      title: 'Fast Laptop',
      bgColor: 'rgb(210,255,217)',
      borderColor: 'rgb(119, 252, 139)',
      name: 'laptop',
    },
    {
      id: 5,
      img: 'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697039004/r5dipapm6nea2188jbaw.png',
      title: 'SmartWatches',
      bgColor: 'rgb(223,236,254)',
      borderColor: 'rgb(89, 158, 255)',
      name: 'smartwatch',
    },
  ]
  return (
    <div className="homeFeatureProductsMain">
      <h2 className="featureMainTitle">Feature Products</h2>
      <div className="allUpperFeatureProduct">
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[0].bgColor,
            border: `3px dotted ${featureProducts[0].borderColor}`,
          }}
        >
          <img
            src={featureProducts[0].img}
            className={featureProducts[0].name}
          />
          <h2>{featureProducts[0].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[1].bgColor,
            border: `3px dotted ${featureProducts[1].borderColor}`,
          }}
        >
          <img
            src={featureProducts[1].img}
            className={featureProducts[1].name}
          />
          <h2>{featureProducts[1].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[2].bgColor,
            border: `3px dotted ${featureProducts[2].borderColor}`,
          }}
        >
          <img
            src={featureProducts[2].img}
            className={featureProducts[2].name}
          />
          <h2>{featureProducts[2].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[3].bgColor,
            border: `3px dotted ${featureProducts[3].borderColor}`,
          }}
        >
          <img
            src={featureProducts[3].img}
            className={featureProducts[3].name}
          />
          <h2>{featureProducts[3].title}</h2>
        </div>{' '}
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[4].bgColor,
            border: `3px dotted ${featureProducts[4].borderColor}`,
          }}
        >
          <img
            src={featureProducts[4].img}
            className={featureProducts[4].name}
          />
          <h2>{featureProducts[4].title}</h2>
        </div>
      </div>
      <div className="allUpperFeatureProduct">
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[0].bgColor,
            border: `3px dotted ${featureProducts[0].borderColor}`,
          }}
        >
          <img
            src={featureProducts[0].img}
            className={featureProducts[0].name}
          />
          <h2>{featureProducts[0].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[1].bgColor,
            border: `3px dotted ${featureProducts[1].borderColor}`,
          }}
        >
          <img
            src={featureProducts[1].img}
            className={featureProducts[1].name}
          />
          <h2>{featureProducts[1].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[2].bgColor,
            border: `3px dotted ${featureProducts[2].borderColor}`,
          }}
        >
          <img
            src={featureProducts[2].img}
            className={featureProducts[2].name}
          />
          <h2>{featureProducts[2].title}</h2>
        </div>
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[3].bgColor,
            border: `3px dotted ${featureProducts[3].borderColor}`,
          }}
        >
          <img
            src={featureProducts[3].img}
            className={featureProducts[3].name}
          />
          <h2>{featureProducts[3].title}</h2>
        </div>{' '}
        <div
          className="singleFeatureProduct"
          style={{
            background: featureProducts[4].bgColor,
            border: `3px dotted ${featureProducts[4].borderColor}`,
          }}
        >
          <img
            src={featureProducts[4].img}
            className={featureProducts[4].name}
          />
          <h2>{featureProducts[4].title}</h2>
        </div>
      </div>
    </div>
  )
}

export default FeatureProducts
