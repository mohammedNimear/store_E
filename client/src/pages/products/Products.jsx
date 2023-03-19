import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {List} from '../../components'
import "./products.scss"

const Products = () => {

  const cadId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
        <div className="left">
        <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
                <input type="checkbox" value={1} id="1" />
                <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" value={2} id="1" />
                <label htmlFor="2">Skirts</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" value={3} id="1" />
                <label htmlFor="3">Coats</label>
            </div>
        </div>
        <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
        </div>
        <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input type="radio" name="price" id="asc" value="asc" onChange={()=> setSort('asc')}/>
              <label htmlFor="asc">Price (lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" name="price" id="desc" value="desc" onChange={()=> setSort('desc')}/>
              <label htmlFor="desc">Price (highest first)</label>
            </div>
        </div>

        </div>
        <div className="right">
          <img src="https://images.unsplash.com/photo-1679163096312-4edfbfbe2a73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="category_image" className='catImg' />
          <List catId={cadId} maxPrice={maxPrice} sort={sort} />
        </div>
    </div>
  )
}

export default Products