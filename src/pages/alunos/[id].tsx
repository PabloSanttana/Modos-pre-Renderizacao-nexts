export async function getStaticPaths() {
  // com isso conseguimos gerar 3 páginas estáticas dos aluno da lista
  /* return {
    //fallback: false error 404 rotas diferente dessas abaixo
    //
    fallback: false,
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
  }; */

  // modulo 2 async

  // pegando resposta do servidor e gerando  paginas estáticas de acordos com ids
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
  const ids = await resp.json();

  const paths = ids.map((id) => {
    return { params: { id } };
  });

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const student = await resp.json();
  return {
    props: {
      student,
    },
  };
}

interface studentProps {
  id: number;
  name: string;
  idade: number;
  email: string;
}

interface PageProps {
  student: studentProps;
}

export default function StudentsId(props: PageProps) {
  const { student } = props;
  return (
    <div>
      detalhes alunos
      <table>
        <thead>
          <tr style={{ borderStyle: "double" }}>
            <th style={{ borderStyle: "double" }}>Id</th>
            <th style={{ borderStyle: "double" }}>Nome</th>
            <th style={{ borderStyle: "double" }}>Idade</th>
            <th style={{ borderStyle: "double" }}>Emial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ borderStyle: "double" }}>{student.id}</th>
            <th style={{ borderStyle: "double" }}>{student.name}</th>
            <th style={{ borderStyle: "double" }}>{student.idade}</th>
            <th style={{ borderStyle: "double" }}>{student.email}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
