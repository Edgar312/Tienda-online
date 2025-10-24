// App.tsx
type Product = {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: string;
};

type ProductCardProps = { product: Product };

function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="card"
      style={{
        borderRadius: 16,
        padding: 16,
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,.06)",
      }}
    >
      {/* Media box grande */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3", 
          background: "#f6f6f6",
          borderRadius: 12,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="card-body">
        <h2 className="title" style={{ margin: "4px 0 6px" }}>
          {product.name}
        </h2>
        <p className="muted" style={{ margin: 0 }}>
          {product.description}
        </p>
        <div className="price" style={{ fontWeight: 700, margin: "12px 0" }}>
          ${product.price.toFixed(2)}
        </div>

        <button
          className="snipcart-add-item btn-primary"
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={String(product.price)} // Snipcart lee strings
          data-item-url={product.url}
          data-item-description={product.description}
          data-item-image={product.image}
        >
          Añadir al carrito
        </button>
      </div>
    </article>
  );
}

const PRODUCTS: Readonly<Product[]> = [
  {
    id: "sku-demo-001",
    name: "Playera básica",
    price: 199.99,
    url: "/",
    description: "Algodón suave y unisex",
    image:
      "https://www.mecanicojeans.mx/cdn/shop/files/WhatsAppImage2025-05-26at1.12.16PM_720x@2x.jpg?v=1748292239",
  },
  {
    id: "sku-demo-002",
    name: "Gorra Snapback",
    price: 249,
    url: "/",
    description: "Ajuste universal, cómoda y ligera",
    image: "https://takka.mx/wp-content/uploads/2024/11/GL5010_negro_lrg.jpg",
  },
   {
    id: "sku-demo-003",
    name: "Sudadera unisex",
    price: 549,
    url: "/", 
    description: "Fleece suave, corte regular.",
    image: "https://http2.mlstatic.com/D_NQ_NP_820766-MLM73968181089_012024-O-sudadera-hombre-negra-con-capucha-basica.webp",
  },
];

export default function App() {
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
        <h1 style={{ margin: "12px 0 6px" }}>Productos</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          Añade al carrito y abre el checkout.
        </p>

        <section
          style={{
            marginTop: 16,
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {PRODUCTS.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>

        <p className="footer" style={{ marginTop: 24 }}>
          * En producción <code>data-item-url</code> debe ser la URL pública de
          esta misma página para que Snipcart valide el ítem.
        </p>
      </main>
    </>
  );
}
