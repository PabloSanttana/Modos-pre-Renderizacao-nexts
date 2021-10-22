export function getStaticProps() {
  return {
    props: {
      number: Math.random(),
    },
  };
}

interface pageProps {
  number: number;
}

export default function static1(props: pageProps) {
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
