import React from "react";
import s from "./ClientInfo.module.scss";
const ClientInfo = ({ onCloseModalCard, item }) => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.infoClient}>
          <h2>Заказчик</h2>
          <span className={s.btnClose} onClick={() => onCloseModalCard()}>
            X
          </span>
          <p>
            <span>Ф.И.О :</span> {item.info.name}
          </p>
          <p>
            <span>Адрес :</span> {item.info.address}
          </p>
          <p>
            <span>Номер :</span> {item.info.number}
          </p>
          <p>
            <span>Сумма рассрочки :</span> {item.info.sum}
          </p>
        </div>
        <div className={s.infoDoor}>
          <h2>Заказ</h2>
          <p>
            <span>Формат двери :</span>
            {item.order.typeDoor}
          </p>
          <p>
            <span>Модель :</span>
            {item.order.nameDoor}
          </p>
          <p>
            <span>Размер :</span>
            {item.order.sizeDoor}
          </p>
          <p>
            <span>Комплектация :</span>
            {item.order.equipmentDoor}
          </p>
          <p>
            <span>Фурнитура :</span>
            {item.order.accessoriesDoor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
