import styled from "styled-components";

export default function Menu() {
  return (
    <>
    <div>
      <h1>Push - [ 2.22.1 - 27062022 ]</h1>
    </div>
      <StyledMenu>
        <li>Configurações</li>
        <li>Cadastro</li>
        <li>Processo</li>
        <li>Consultas</li>
        <li>Centificados</li>
        <li>Ultilitario</li>
        <li>Redes Sociais</li>
      </StyledMenu>
    </>
  );
}

const StyledMenu = styled.li`
color:red;
`;