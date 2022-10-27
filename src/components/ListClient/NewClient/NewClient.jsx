import React from "react";
import s from "./NewClient.module.scss";
const NewClient = ({ isChangeShowAddClient }) => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.infoClient}>
          <h2>Заказчик</h2>
          <span className={s.btnClose} onClick={() => isChangeShowAddClient()}>
            X
          </span>
          <form action=''>
            <div>
              <label htmlFor=''>Ф.И.О</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Адрес</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Номер</label>
              <input type='text' />
            </div>
            <h2>Заказ</h2>
            <div>
              <label htmlFor=''>Формат двери</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Модель</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor='' id='size'>
                Размер
              </label>
              <input id='size' type='text' />
            </div>
            <div>
              <label htmlFor=''>Комплектация</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Фурнитура</label>
              <input type='text' />
            </div>
            <button>Добавить Клиента</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewClient;
