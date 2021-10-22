export async function getStaticProps() {
  /// função chamada uma unica vez no build gerar o html
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

export default function static4(props: pageProps) {
  // jeito 1
  function handleRenderProduct(): JSX.Element[] {
    const renderProducts = props.products.map((product) => {
      return (
        <li key={product.id}>
          id: {product.id} | Nome: {product.nome} | preço:{product.price}
        </li>
      );
    });

    return renderProducts;
  }
  // jeito 2
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
      <h1>Estático #04</h1>
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
