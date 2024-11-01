import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };

  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  const selectedPage = (PageSelect) => {
    return setPage(PageSelect);
  };

  return (
    <>
      <div>
        {products.slice(page * 10 - 10, page * 10).map((items) => {
          return (
            <div>
              <img src={items.thumbnail} alt={items.title} />
              <span>{items.title}</span>
            </div>
          );
        })}
        <span>⬅️</span>
        {/*[...(Array(products.length) / 10)].map((_, i) => {
          return <span>{i + 1}</span>;
        })*/}
        {[...Array(products.length / 10)].map((_, i) => {
          return (
            <span key={i} onClick={() => selectedPage(i + 1)}>
              {i + 1}
            </span>
          );
        })}
        <span>➡️</span>
      </div>
    </>
  );
}

export default App;
