import React from "react";
import { useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import s from "./ClientCard.module.scss";
import ClientInfo from "./ClientInfo/ClientInfo";
const ClientCard = ({ item, onDeleteClientCard }) => {
  const [isPopup, setIsPopup] = useState(true);
  const [isCardInfo, setIsCardInfo] = useState(false);
  const [modal, setModal] = useState(false);
  const showPopup = () => {
    setIsPopup(!isPopup);
  };
  const showCardInfo = () => {
    setIsCardInfo(!isCardInfo);
    setIsPopup(true);
  };
  const closeCardInfo = () => {
    setIsCardInfo(false);
  };
  const closeModal = () => {
    setModal(!modal);
    setIsPopup(true);
  };
  const deleteItem = () => {
    onDeleteClientCard(item.id);
    console.log(item.id);
  };
  return (
    <div className={s.wrapper}>
      {modal && (
        <Modal
          name={item.info.name}
          modal={modal}
          onModalDelete={closeModal}
          onDeleteClientCard={deleteItem}
        />
      )}
      {isCardInfo && (
        <ClientInfo onCloseModalCard={closeCardInfo} item={item} />
      )}
      <div>
        <p className={s.name}>
          <span>Ф.И.О :</span> {item.info.name}
        </p>
        <p className={s.order}>
          <span>Заказ :</span> {item.order.typeDoor} {item.order.nameDoor}
        </p>
        <p className={s.address}>
          <span>Адрес :</span> {item.info.address}
        </p>
      </div>
      <div className={s.info}>
        <div
          style={isPopup ? { display: "none" } : { display: "block" }}
          className={s.infoPopup}
        >
          <p onClick={showCardInfo}>Подробние</p>
          <p onClick={closeModal}>Удалить</p>
        </div>
        <span onClick={showPopup}>. . .</span>
      </div>
    </div>
  );
};

export default ClientCard;
