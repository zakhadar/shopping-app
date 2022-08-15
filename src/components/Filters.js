import React from 'react'
import "../css/filters.css"

const Filters = (props) => {
  return (
    <div className='filters'>
      <h4>Filters</h4>
      <input
        className='form-control searchbox'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Search products'
      ></input>
      <h4>Product Categories</h4>
      <button onClick={(event) => {props.setCategoryValue(event.target.value);}} value="men's clothing">men's clothing</button>
      <button onClick={(event) => {props.setCategoryValue(event.target.value)}} value="women's clothing">women's clothing</button>
      <button onClick={(event) => {props.setCategoryValue(event.target.value)}} value="jewelery">jewelery</button>
      <button onClick={(event) => {props.setCategoryValue(event.target.value)}} value="electronics">electronics</button>
      <h4>Sort</h4>
      <select className='form-control' value={props.sortValue} onChange={(event) => {props.setSortValue(event.target.value)}}>
        <option value="">Select</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default Filters;