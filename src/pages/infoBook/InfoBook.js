import React, { useEffect, useState } from "react";
import styles from "./InfoBook.module.css";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import Navbar from "../../components/navbar/Navbar";
import nopicture from "../../pages/infoBook/bruxosebruxas.jpg";
import ReactStars from "react-stars";
import { Star, Heart, Fun, Sad, Shocking } from "./AllEmojis";

const url = "http://localhost:5000";

const InfoBook = () => {
  const { id } = useParams();

  const items = [...Array(5).keys()];
  const [activeStar, setActiveStar] = useState();
  const [activeHeart, setActiveHeart] = useState();
  const [activeFun, setActiveFun] = useState();
  const [activeSad, setActiveSad] = useState();
  const [activeShocking, setActiveShocking] = useState();

  const { user, setUser } = useUserContext();

  const [book, setBook] = useState();
  const [protocol, setProtocol] = useState();

  // useEffect(() => {
  //   function getBook() {
  //     const corpo = {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       mode: "cors",
  //     };

  //     fetch(url + `/books/${id}`, corpo)
  //       .then((resposta) => resposta.json())
  //       .then((dados) => {
  //         setBook(dados[0]);
  //       });
  //   }

  //   function getProtocol() {
  //     const corpo = {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       mode: "cors",
  //     };

  //     fetch(url + `/protocols/id-book/${id}`, corpo)
  //       .then((resposta) => resposta.json())
  //       .then((dados) => {
  //         setProtocol(dados[0]);
  //       });
  //   }
  //   getBook();
  //   getProtocol();
  // }, [id]);

  console.log(protocol);

  function formatDate(dateNotFormat) {
    const date = new Date(dateNotFormat);
    const dateNew =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return dateNew;
  }

  function handleClickPOST() {
    const data = {
      user_possession: user.username,
      id_book: book.id,
    };

    const body = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url + "/protocols", body)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function handleClickPUT() {
    const body = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(protocol),
    };

    fetch(url + `/protocols/${protocol.id}`, body)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProtocol(data[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const onClickStar = (index) => {
    setActiveStar((oldState) => (oldState === index ? undefined : index));
  };
  const onClickHeart = (index) => {
    setActiveHeart((oldState) => (oldState === index ? undefined : index));
  };
  const onClickFun = (index) => {
    setActiveFun((oldState) => (oldState === index ? undefined : index));
  };
  const onClickSad = (index) => {
    setActiveSad((oldState) => (oldState === index ? undefined : index));
  };
  const onClickShocking = (index) => {
    setActiveShocking((oldState) => (oldState === index ? undefined : index));
  };

  return (
    <div>
      <Navbar />

      <div className={styles.card}>
        {/* { {book && (
          <>
            <h1>
              Titulo: <span>{book.title}</span>
            </h1>
            <h2>
              Paginas:<span>{book.pages}</span>
            </h2>
            <h2>
              Autor:<span>{book.author}</span>
            </h2>
            <h3>
              Doado em:<span>{formatDate(book.date)}</span>
            </h3>
            <button onClick={handleClickPOST}>Retirar</button>
            <button onClick={handleClickPUT}>Devolver</button>
          </>
        )} } */}
        <img src={nopicture} />

        <span>
        <hr/>
         <h2>Bruxos e Bruxas</h2>
        </span>
        <span>
          Páginas: <span>288</span>
        </span>
        <span>
          Autor: <span>James Patterson & Gabrielle Charbonnet.</span>
        </span>
        <span>
          Doado em: <span>05/01/2024</span>
          <hr/>
        </span>
        <div className={styles.avaliation}>
        <h2>Avaliação:</h2>
        <div className={styles.star}> 
          {items.map((index) => (
            <Star
              onClick={() => onClickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeStar}
            />
          ))}
        </div>
          
          <div className={styles.twoFirst}><hr/>
          <div className={styles.heart}>
          <span>Romântico :</span><br></br>
          {items.map((index) => (
            <Heart
            onClick={() => onClickHeart(index)}
            key={`star_${index}`}
            isActive={index <= activeHeart}
            
            />
          ))}</div>
          <div >
          <span>Divertido :</span><br></br>

          {items.map((index) => (
            <Fun
            onClick={() => onClickFun(index)}
            key={`star_${index}`}
            isActive={index <= activeFun}
            
            />
          ))}
          </div></div>
          <div className={styles.twoEnd}>
          <div className={styles.sad}>
          <span>Triste :</span><br></br>

          {items.map((index) => (
            <Sad
            onClick={() => onClickSad(index)}
            key={`star_${index}`}
            isActive={index <= activeSad}
            
            />
            
          ))}</div>
          
          <div className={styles.shocking}>
          <span>Chocante : </span><br></br>

          {items.map((index) => (
            <Shocking
            onClick={() => onClickShocking(index)}
            key={`star_${index}`}
            isActive={index <= activeShocking}
            
            />
          ))}
          </div></div>
          <p> <hr/>Comentários:</p>
          <textarea className={styles.coments} type="text" name="coments" />
        </div>
        
        
        <div className={styles.return}>
          {/* <button onClick={handleClickPOST}>Retirar</button> */}
          <button onClick={handleClickPUT}>Devolver</button>
        </div>
      </div>
    </div>
  );
};

export default InfoBook;
