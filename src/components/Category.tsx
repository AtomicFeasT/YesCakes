import React from 'react';
import Products from '../json/database.json';

export function Category({ parentToChild }: any) {

  const Category = Products.filter((data: { category: string | null; }) => {


    return data.category === parentToChild

  })
  return (
    <section className="product-section">
      {
        Category.map(data => {
          return (
            <React.Fragment key={data.category}>
              {data.products.map(product => {
                return (
                  <div key={product.name} className="card-container">
                    <div className="card-content">
                      <h1 className="card-title">{product.name}</h1>
                      <p dangerouslySetInnerHTML={{ __html: product.description }} className="card-description" />
                      <h2 className="card-price">R$ {product.price}</h2>
                    </div>
                    {/* <img src={product.image} alt={product.name} className="card-image" /> */}
                  </div>
                )
              })}
            </React.Fragment>
          )
        })
      }
    </section>
  )
}
