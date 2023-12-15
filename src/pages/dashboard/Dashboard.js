import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const url = "http://localhost:5000";

const Dashboard = () => {
  const navigate = useNavigate("");

  const [books, setBooks] = useState()

  useEffect(() => {
    function getBooks() {
      const corpo = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      };

      fetch(url + `/books`, corpo)
        .then((resposta) => resposta.json())
        .then((dados) => {
          console.log(dados)
          setBooks(dados);
        });
    }
    getBooks();
  },[]);

  return (
    <>
      <Navbar />
      <div className={styles.containerTable}>
        <table>
          <th>ID</th>
          <th>Título</th>
          <th>Páginas</th>
          <th>Autor</th>
          <tbody>
          <tr><td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
          </tr>
          <tr><td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
          </tr>
          <tr><td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
          </tr>
          <tr><td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
              <td>fsdafsf</td>
          </tr>
            {/* {books && books.map((book) => (
               <tr>
              <td>{book.id}</td>
                <td>{ book.title}</td>
                <td>{ book.pages}</td>
              <td>{book.author}</td>
              
            </tr>
            ))
            } */}
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
