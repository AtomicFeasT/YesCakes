import Products from '../db.json';


export function PuffPastry(){
  const puffPastry = Products.filter((db: { category: string; }) => {
    return db.category === "Folhados";
  })
  return (
    <div className="PuffPastry">
      { 
        puffPastry.map( db => {
          return(
            <div>
              <h1></h1>
              {db.products.map( product => {
                return(
                  <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>R${product.price}</p>
                  <img src={product.image}></img>
                  </div>
                  )
                })}
            </div>
          )})
        }
    </div>
    )
  }