import React from "react";
import ClientCard from "./ClientCard/ClientCard";
import NewClient from "../ListClient/NewClient/NewClient";
import { useState } from "react";
const ListClient = ({
  items,
  deleteClientCard,
  showAddClient,
  isChangeShowAddClient,
}) => {
  return (
    <>
      {showAddClient && (
        <NewClient isChangeShowAddClient={isChangeShowAddClient} />
      )}
      {items.map((item, index) => (
        <ClientCard
          key={item.id}
          item={item}
          onDeleteClientCard={deleteClientCard}
        />
      ))}
    </>
  );
};

export default ListClient;
