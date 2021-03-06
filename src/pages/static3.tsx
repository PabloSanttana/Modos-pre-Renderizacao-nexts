export function getStaticProps() {
  // refaz o componente acada 7 segundos, ou seja gera um novo html
  return {
    revalidate: 7, //segundos
    props: {
      number: Math.random(),
    },
  };
}

interface pageProps {
  number: number;
}

export default function static3(props: pageProps) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
