import React from 'react'

const ProductList = (props) => {
  return (
    <div>
      {props.products.filter((product)=>{
        if(product.searchValue == ""){
          return product;
        }
        else if(product.title.toLowerCase().includes(props.searchValue.toLowerCase())){
          return product;
        }
      }).map((product,key)=>{
        return <div key={product.id.toString()}>
           <div className='col-sm-6'>
            <div key={product.id} className="card">
              <div className='image-container'><img src={product.image} alt="#"/></div>
              <div className="card-description">
                <h4>{product.title}</h4>
                <h5>{`Price: ${product.price}`}</h5>
                <h6>{`Category: ${product.category}`}</h6>
                <div onClick={() => props.handleFavouritesClick(product)} className="add-to-favourites"></div>
              </div>
              <button className='btn btn-default' onClick={() => props.handleAddtoCartClick(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default ProductList