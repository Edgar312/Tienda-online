export default function App() {
  const product = {
    id: "sku-demo-001",
    name: "Playera básica",
    price: 199.99,
    url: "/", 
    description: "Algodón suave, unisex. Corte regular.",
    image:
      "https://www.mecanicojeans.mx/cdn/shop/files/WhatsAppImage2025-05-26at1.12.16PM_720x@2x.jpg?v=1748292239",
  };
  return (
    <>

      <header className="header">
        <div className="header-inner">
          <div className="brand">Mi Tienda</div>
          <button className="snipcart-checkout btn">
             <span className="snipcart-items-count">0</span> ·{" "}
            <span className="snipcart-total-price">$0.00</span>
          </button>
        </div>
      </header>
      <main className="container">
        <h1 style={{ margin: "12px 0 6px" }}>Producto destacado</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          Añade al carrito y abre el checkout.
        </p>
        <article className="card" style={{ marginTop: 16 }}>
          <img className="card-img" src={product.image} alt={product.name} />
          <div className="card-body">
            <h2 className="title">{product.name}</h2>
            <p className="muted">{product.description}</p>
            <div className="price">${product.price.toFixed(2)}</div>

            <button
              className="snipcart-add-item btn-primary"
              data-item-id={product.id}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url={product.url}
              data-item-description={product.description}
              data-item-image={product.image}
            >
              Añadir al carrito
            </button>
          </div>
        </article>

        <p className="footer">
          * Recuerda: en producción <code>data-item-url</code> debe ser una URL
          pública de esta misma página para que Snipcart valide el ítem.
        </p>
      </main>
    </>
  );
}
