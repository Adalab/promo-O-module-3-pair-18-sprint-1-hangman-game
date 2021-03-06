import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("katakroker");

  const [arrayInclude, setArrayInclude] = useState([]);

  const [arrayNotInclude, setArrayNotInclude] = useState([]);

  const keyWordArray = word.split("");

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    console.log("estoy dentro");
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleKeyUp = (ev) => {
    const inputLetter = ev.currentTarget.value;
    if(inputLetter.match("^[a-z]?$")){
    setLastLetter(inputLetter);
    if (keyWordArray.includes(inputLetter)) {
      //arrayInclude.push(inputLetter); //no se usa en react
      setArrayInclude([...arrayInclude, inputLetter]); //"push" en react

      //console.log(arrayInclude);
      //console.log("la letra está");
    } else {
      setArrayNotInclude([...arrayNotInclude, inputLetter]);
      console.log(arrayNotInclude);
      console.log("la letra no está");
    }
  }
  };

  // const renderSolutionLetters = () => {
  //   escribir las letras
  //   keyWordArray.map((eachLetter, index) => {
  //     return (
  //       <li key={index} className="letter">
  //         {eachLetter}
  //       </li>
  //     );
  //   });
  // };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{arrayInclude.map((eachLetter, index) => {
                return (
                  <li key={index} className="letter">
                    {eachLetter}
                  </li>
                );
              })}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {arrayNotInclude.map((eachLetter, index) => {
                return (
                  <li key={index} className="letter">
                    {eachLetter}
                  </li>
                );
              })}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleKeyUp}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
      <button className="incrementarBtn" onClick={handleClickBtn}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
