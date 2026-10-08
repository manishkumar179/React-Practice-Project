import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

const LIMIT = 12;

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");

  // Prevent multiple requests at the same time
  const loadingRef = useRef(false);

  // Fetch products
  const fetchProducts = useCallback(async () => {
    if (loadingRef.current || !hasMore) {
      return;
    }

    loadingRef.current = true;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      // Add new products to existing products
      setProducts((prevProducts) => [
        ...prevProducts,
        ...data.products,
      ]);

      // Check whether more products are available
      if (data.products.length < LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [skip, hasMore]);

  // Fetch when skip changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Increase skip when user reaches bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // User is near bottom
      if (
        scrollTop + windowHeight >= documentHeight - 300
      ) {
        if (!loadingRef.current && hasMore) {
          setSkip((prevSkip) => prevSkip + LIMIT);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div>
            <span className="badge">REACT PROJECT</span>

            <h1>Infinite Products</h1>

            <p>
              Scroll down to automatically load more products.
            </p>
          </div>

          <div className="product-count">
            <span>{products.length}</span>
            <small>Products Loaded</small>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container">
        {error && (
          <div className="error">
            <span>⚠️</span>
            <div>
              <strong>Something went wrong</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Products */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Image */}
              <div className="image-container">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <span className="discount">
                  -{Math.round(product.discountPercentage)}%
                </span>
              </div>

              {/* Content */}
              <div className="product-content">
                <span className="category">
                  {product.category}
                </span>

                <h2>{product.title}</h2>

                <p className="description">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="rating">
                  <span className="stars">
                    ★★★★★
                  </span>

                  <span>
                    {product.rating.toFixed(1)}
                  </span>
                </div>

                {/* Price */}
                <div className="price-section">
                  <div>
                    <span className="price">
                      ${product.price}
                    </span>

                    <span className="old-price">
                      $
                      {(
                        product.price /
                        (1 -
                          product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  </div>

                  <button className="cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Initial loading */}
        {loading && products.length === 0 && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {/* Loading more */}
        {loading && products.length > 0 && (
          <div className="load-more">
            <div className="spinner small"></div>
            <span>Loading more products...</span>
          </div>
        )}

        {/* End */}
        {!hasMore && (
          <div className="end-message">
            <div className="check">✓</div>

            <h3>You've reached the end!</h3>

            <p>
              All available products have been loaded.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer>
        <p>
          Built with React • Infinite Scrolling
        </p>
      </footer>
    </div>
  );
}

export default App;