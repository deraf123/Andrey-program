import React from "react";
import s from "./Modal.module.scss";
const Modal = (props) => {
  return (
    <div
      style={props.modal ? { display: "block" } : { display: "none" }}
      className={s.wrapper}
    >
      <div className={s.blockText}>
        <p>Вы действительно хотите удалить?</p>
        <p>Клиента: {props.name}</p>
      </div>
      <div className={s.blockButton}>
        <button onClick={() => props.onDeleteClientCard()}>Да</button>
        <button onClick={() => props.onModalDelete()}>Нет</button>
      </div>
    </div>
  );
};

export default Modal;
