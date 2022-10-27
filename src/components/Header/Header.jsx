import React from "react";
import s from "./Header.module.scss";

const Header = ({ isChangeShowAddClient }) => {
  return (
    <>
      <header>
        <h2>Андрей Мебель</h2>
        <div>
          <ul>
            <li>База клиентов</li>
            <li onClick={() => isChangeShowAddClient()}>
              <span>+</span> Добавить клиента
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
