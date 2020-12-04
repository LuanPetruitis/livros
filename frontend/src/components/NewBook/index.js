import React, { useState } from "react";
import api from "../../services/api";

import "./styles.css";

import InputField from "../InputField";;

export default function NewBook(props) {
  const { show, close, loadBooks } = props;

  // book properties
  const [bookStore, setBookStore] = useState("");
  const [nameBook, setNameBook] = useState("");
  const [descriptionBook, setDescriptionBook] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");

    async function saveNewBook() {
      // Make final book object
      const newBook = {
        bookStore,
        nameBook,
        descriptionBook,
        phone,
        price: parseFloat(price.replace(",", ".")),
      };


    // Post the new book into the API
    api
      .post("/products", newBook)
      .then((res) => {
        close();

        setBookStore("");
        setNameBook("");
        setDescriptionBook("");
        setPhone("");
        setPrice("");

        this.loadBooks();
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        console.log(error.response.data);
      });
  }
  return (
      <div className="new-book-root">
        <h1>Novo livro!</h1>
        <form onSubmit={saveNewBook}>
          <InputField
            title="Nome"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Qual é o nome da livraria?"
            value={bookStore}
            onChange={setBookStore}
          />
          <InputField
            title="Livro"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Digite o nome do livro"
            value={nameBook}
            onChange={setNameBook}
          />
          <InputField
            id="new-book-input-field"
            title="Descrição"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Descreva o livro"
            value={descriptionBook}
            onChange={setDescriptionBook}
          />
          <InputField
            id="new-book-input-field"
            title="Celular"
            type="text"
            margin="30px 0 0 0"
            placeHolder="(11) 99999-9999!"
            value={phone}
            onChange={setPhone}
          />
          <InputField
            id="new-book-input-field"
            title="Preço"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Tomara que não seja muito caro!"
            value={price}
            onChange={setPrice}
          />
          <button type="submit" id="enviar">Enviar</button>
        </form>
      </div>
  );
}
