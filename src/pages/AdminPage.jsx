import { useEffect, useState } from "react";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  });

  // GET all products
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // CREATE product
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct]); // update UI instantly
        setForm({ name: "", description: "", origin: "", price: "" });
      });
  }

  // DELETE product
  function handleDelete(id) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    }).then(() => {
      setProducts(products.filter(p => p.id !== id));
    });
  }

  // UPDATE product (price/description/origin)
  function handleUpdate(id, updatedField) {
    const product = products.find(p => p.id === id);

    fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...product,
        ...updatedField
      })
    })
      .then(res => res.json())
      .then(updated => {
        setProducts(products.map(p => (p.id === id ? updated : p)));
      });
  }

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="origin" placeholder="Origin" value={form.origin} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />

        <button type="submit">Add Cereal</button>
      </form>

      <hr />

      {/* PRODUCT LIST */}
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{product.name}</h3>

          <p>
            Description:{" "}
            <input
              defaultValue={product.description}
              onBlur={(e) =>
                handleUpdate(product.id, { description: e.target.value })
              }
            />
          </p>

          <p>
            Price:{" "}
            <input
              defaultValue={product.price}
              onBlur={(e) =>
                handleUpdate(product.id, { price: e.target.value })
              }
            />
          </p>

          <p>Origin: {product.origin}</p>

          <button
            onClick={() =>
              handleUpdate(product.id, { origin: "Not in stock ❌" })
            }
          >
            Mark Out of Stock
          </button>

          <button
            onClick={() => handleDelete(product.id)}
            style={{ marginLeft: "10px", background: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;