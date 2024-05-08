import React from 'react'
import { Link } from 'react-router-dom'
import ProductCards from './productCards';


const ProductsView1 = ({ products, sortingOrder, clickedCategory, search, priceRange }) => {

  console.log(clickedCategory);
  console.log(priceRange);
  if (priceRange > 0) {
    if (!clickedCategory) {
      return (
        <div className='flex flex-wrap'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item =>
            (
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)) &&
              item.price <= priceRange
            )
            ).map(
              (items, key) => (
                <ProductCards item={items} key={key} />
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item =>
              (
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)) &&
                item.price <= priceRange
              )
              ).map(
                (items, key) => (
                  <ProductCards item={items} key={key} />
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item =>
                (
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search)) &&
                  item.price <= priceRange
                )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item =>
                ((
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search)) &&
                  item.price <= priceRange
                )
                )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                ))}
        </div>
      )
    }
    else {
      return (
        <div className='flex flex-wrap'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item => (item.category == clickedCategory) &&
              (
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)) &&
                item.price <= priceRange
              )
            ).map(
              (items, key) => (
                <ProductCards item={items} key={key} />
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item => (item.category == clickedCategory) &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search) &&
                  item.price <= priceRange
                )
              ).map(
                (items, key) => (
                  <ProductCards item={items} key={key} />
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => (item.category == clickedCategory) &&
                  (
                    (item.title.toLowerCase().includes(search) ||
                      item.category.toLowerCase().includes(search) ||
                      item.brand.toLowerCase().includes(search)) &&
                    item.price <= priceRange
                  )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => (item.category == clickedCategory) &&
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search) &&
                    item.price <= priceRange
                  )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                ))}
        </div>
      )
    }

  }
  else {
    if (!clickedCategory) {
      return (
        <div className='flex flex-wrap'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item =>
            (item.title.toLowerCase().includes(search) ||
              item.category.toLowerCase().includes(search) ||
              item.brand.toLowerCase().includes(search)
            )
            ).map(
              (items, key) => (
                <ProductCards item={items} key={key} />
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item =>
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)
              )
              ).map(
                (items, key) => (
                  <ProductCards item={items} key={key} />
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item =>
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item =>
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
                ).map(
                  (items, key) => (
                    <ProductCards item={items} key={key} />
                  )
                )
                )}
        </div>
      )
    }
    return (
      <div className='flex flex-wrap'>
        {sortingOrder === "Lowest" ?
          ([...products]?.sort((a, b) => a.price - b.price).filter(item => item.category == clickedCategory &&
            (item.title.toLowerCase().includes(search) ||
              item.category.toLowerCase().includes(search) ||
              item.brand.toLowerCase().includes(search)
            )
          ).map(
            (items, key) => (
              <ProductCards item={items} key={key} />
            )
          )) : sortingOrder === "Highest" ?
            ([...products]?.sort((a, b) => b.price - a.price).filter(item => item.category == clickedCategory &&
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)
              )
            ).map(
              (items, key) => (
                <ProductCards item={items} key={key} />
              )
            )) : sortingOrder === "AtoZ" ?
              ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.category == clickedCategory &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
              ).map(
                (items, key) => (
                  <ProductCards item={items} key={key} />
                )
              )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => item.category == clickedCategory &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
              ).map(
                (items, key) => (
                  <ProductCards item={items} key={key} />
                )
              ))}
      </div>
    )
  }
}


export default ProductsView1
