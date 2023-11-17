import './App.css';
import { useState } from 'react';


function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);


  return (
    <div>
      <SearchBar
      filterText={filterText}
      onChangeFilterText={setFilterText}
      inStockOnly={inStockOnly}
      onChangeInStockOnly={setInStockOnly}
      />
      <ProductTable
      products={products}
      filterText={filterText}
      inStockOnly={inStockOnly}
      />
    </div>
  );
}


function SearchBar({inStockOnly, onChangeInStockOnly, filterText, onChangeFilterText}) {
  return (
    <form>
    <input
    type="text"
    placeholder="Search..."
    value={filterText}
    onChange={(e) => onChangeFilterText(e.target.value)}
    />
    <label>
      <input
      type="checkbox"
      value={inStockOnly}
      onChange={(e) => onChangeInStockOnly(e.target.checked)}
      />
      {' '}
      Only show products in stock
    </label>
  </form>
  );
}


function ProductTable( {products, filterText, inStockOnly} ) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if ((!product.stocked && inStockOnly)) {
      return;
    }

    console.log(product.name.indexOf(filterText), product.name, filterText);
    if ((product.name).toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
      product={product}
      key={[product.category, product.name]}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}


function ProductRow( {product} ) {
  const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}


export default function App() {
  // import data from json
  const fruit_vendor = require('./fruit_vendor.json');

  return (
  <FilterableProductTable products={fruit_vendor} />
  );
}
