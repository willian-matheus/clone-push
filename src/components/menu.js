import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export default function Menu() {

  const [click, setClick] = React.useState(null); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  return (

    
    <>
    <div>
      <h1>Push - [ 2.22.1 - 27062022 ]</h1>
    </div>
      <StyledMenu>
        <li
        onClick={handleClick}>Configurações</li>
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

const StyledMenu = styled.h4`
color:black;
display: flex;
flex-wrap:wrap;
justify-content:space-between;
text-align: center;
margin-top: 15px;
background-color: red;
`