type DisplayProps = {
  route: any
}

const DisplayData = (props: any) => {
  const { dados } = props.route.params;

  return (
    <div>
      <h1>Dados do Formulário</h1>
      <p>Nome: {dados.nome}</p>
      <p>Sobrenome: {dados.sobrenome}</p>
      <p>Email: {dados.email}</p>
      <p>Nível: {dados.nivel}</p>
    </div>
  );
};

export default DisplayData;
