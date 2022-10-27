import "./App.scss";
import Header from "./components/Header/Header";
import ListClient from "./components/ListClient/ListClient";
import { itemsDoor } from "./api";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [showAddClient, isShowAddClient] = useState(false);
  const deleteClientCard = (id) => {
    setItems(items.filter((el) => el.id !== id));
    console.log(items);
  };
  useEffect(() => {
    setItems(itemsDoor);
  }, []);
  const changeShowAddClient = () => {
    isShowAddClient(!showAddClient);
  };
  return (
    <div className='App'>
      <Header isChangeShowAddClient={changeShowAddClient} />
      <div className='main'>
        <ListClient
          isChangeShowAddClient={changeShowAddClient}
          items={items}
          deleteClientCard={deleteClientCard}
          showAddClient={showAddClient}
        />
      </div>
    </div>
  );
}

export default App;
