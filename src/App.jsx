/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
 //Carregamento de dados direto via codigo
  // const item1 = {
  //   name: "Rick Sanchez",
  //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  // };
  // const item2 = {
  //   name: "Morty Smith",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };
  // const item3 = {
  //   name: "Summer Smith",
  //   image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  // };

  // const itens = [item1, item2, item3];

  const [itens, setItens] = useState([])

  //Carregamento de dados via API(Backend)
  async function carregarDadosApi(){
    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results;

    console.log(results)

    // setItens(results)
  }

  carregarDadosApi()


  return (
    <>
      <div className="cardsGeral">
        {/* <Card item = {item1}/>
    <Card item = {item2}/>
    <Card item = {item3}/> */}

        {itens.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
