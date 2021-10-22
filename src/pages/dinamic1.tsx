export async function getServerSideProps() {
  // gerado todas as vezes que a pagina for chamada e o html e gerado dinamicamente
  console.log("Server");
  const resp = await fetch("http://localhost:3000/api/products");
  const products = await resp.json();
  return {
    props: {
      products,
    },
  };
}

interface ProductProps {
  id: number;
  nome: string;
  price: number;
}

interface pageProps {
  products: ProductProps[];
}

export default function dinamic1(props: pageProps) {
  const renderProducts = props.products.map((product) => {
    return (
      <tr key={product.id}>
        <th style={{ borderStyle: "double" }}> {product.id}</th>
        <th style={{ borderStyle: "double" }}>{product.nome}</th>
        <th style={{ borderStyle: "double" }}>{product.price}</th>
      </tr>
    );
  });
  return (
    <div>
      <h1>dinamic1 #01</h1>
      <table>
        <thead>
          <tr style={{ borderStyle: "double" }}>
            <th style={{ borderStyle: "double" }}>ID</th>
            <th style={{ borderStyle: "double" }}>NOME</th>
            <th style={{ borderStyle: "double" }}>PREÇO</th>
          </tr>
        </thead>
        <tbody>{renderProducts}</tbody>
      </table>
    </div>
  );
}
