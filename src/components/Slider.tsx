import Products from '../json/database.json'
import { FormEventHandler, useState } from 'react';

export function Slider({ childToParent }: any) {

  window.addEventListener('load', function() {
    // @ts-ignore
    new Glider(document.querySelector('.glider'), {
      // Mobile-first defaults
      slidesToScroll: 2,
      slidesToShow: 2,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 445,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '2',
            itemWidth: 150,
            duration: 0.25
          }
        }, {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 160,
            duration: 0.25
          }
        }
      ]
    });
  })

  return (
    <div className="glider-container">
      <div className="glider">
        {Products.map(data => {


          const changeFilterData = (filter: string) => () => childToParent(filter)
          return (

            <div key={data.category} onClick={changeFilterData(data.category)} className="glider-item">
              <img className="category-image" src={data.img} alt="" />
              <h2 className="category-name">{data.category}</h2>
            </div>

          )
        })}

      </div>
      <div role="tablist" className="dots"></div>

      <div className="glider-movement-container">
        <button aria-label="Previous" className="glider-prev">«</button>
        <button aria-label="Next" className="glider-next">»</button>
      </div>
    </div>


  )
}
