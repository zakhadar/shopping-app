import React,{useState, useEffect} from 'react'
import Filters from './Filters';
import axios from 'axios';
import AddFavourites from './AddToFavourites';
import RemoveFavourites from './RemoveFavourites';
import ProductList from './ProductList';
import "../css/product.css";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  

  const addFavouriteMovie = (product) => {
		axios ({
      method: "PUT",
      url: "https://fakestoreapi.com/carts/7",
      body:JSON.stringify({
        userId:3,
        products:[{productId:product.id,quantity:1}]
      })
    })
    .then((res) => {
      console.log(res.data);
    })
	};

  const addtoCart = (product) => {
		axios ({
      method: "PUT",
      url: "https://fakestoreapi.com/carts/7",
      body:JSON.stringify({
        userId:3,
        products:[{productId:product.id,quantity:1}]
      })
    })
    .then((res) => {
      console.log(res.data);
    })
	};

  const removeFavouriteMovie = (movie) => {
		
	};

  useEffect(() => {
    setLoading(true);
    let url = "https://fakestoreapi.com/products/";

    if(Object.keys(categoryValue).length > 0) {
      url = url + "category/" + categoryValue
    }

    if(Object.keys(sortValue).length > 0) {
      url = url + "?sort=" + sortValue
    }

    axios({
      method: "GET",
      url: url
    })
    .then((res) => {
      setProducts(res.data);
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
  }, [searchValue, categoryValue, sortValue]);

  return (
    <div className='row'>
      <div className='col-sm-4'>
        <Filters searchValue={searchValue} setSearchValue={setSearchValue} setCategoryValue={setCategoryValue} setSortValue={setSortValue}/>
      </div>
      <div className='col-sm-8'>
        <div className='row'>          
          <div className="products-container">
            {loading && (
              <div>
                {" "}
                <h4 className='loading'>Loading...</h4>
              </div>
            )}

            <ProductList products={products} searchValue={searchValue} handleAddtoCartClick={addtoCart} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites} />
          </div>
        </div>
      </div>      
    </div>
    
  );
}

export default Products;