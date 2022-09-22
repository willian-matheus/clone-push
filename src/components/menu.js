import "./menu.css";
import React from "react";

export default function Menu() {
  return (
    <>
      <nav className="dp-menu">
        <ul>
          <li>
            <a href="#">Principal</a>
          </li>
          <li>
            <a href="#">Lojas</a>

            <ul>
              <li>
                <a href="#">Text1</a>
              </li>
              <li>
                <a href="#">Text2</a>
              </li>
              <li>
                <a href="#">Text3</a>
              </li>
              <li>
                <a href="#">Text4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
          <li>
            <a href="#">Vagas</a>
          </li>
          <li>
            <a href="#">Rede Social</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Configurações</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
