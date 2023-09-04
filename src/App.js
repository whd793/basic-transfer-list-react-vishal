import "./styles.css";
import { useState } from "react";

export default function App() {
  const [leftlist, setLeftlist] = useState({
    HTML: false,
    CSS: false,
    React: false
  });

  const [rightlist, setRightlist] = useState({
    Vue: false,
    TypeScript: false
  });

  const isdisabled = (list) => {
    for (let key in list) {
      if (list[key] === true) {
        console.log(key + " " + list[key]);
        return false;
      }
    }
    return true;
  };

  const transferList = (fromlist, tolist, setfrom, setto) => {
    let lista = { ...fromlist };
    let listb = { ...tolist };

    //loop through listA,
    //if lista[key] === true,

    for (let key in lista) {
      if (lista[key] === true) {
        listb = { ...listb, [key]: lista[key] };
        delete lista[key];
      }
    }
    //then move to listb?
    setfrom(lista);
    setto(listb);
  };

  return (
    <div className="lists">
      <List list={leftlist} setList={setLeftlist} />

      <div className="lists__btns">
        <button> {"<<"} </button>
        <button
          disabled={isdisabled(rightlist)}
          onClick={() => {
            transferList(rightlist, leftlist, setRightlist, setLeftlist);
          }}
        >
          {" "}
          {"<"}{" "}
        </button>
        <button
          disabled={isdisabled(leftlist)}
          onClick={() => {
            transferList(leftlist, rightlist, setLeftlist, setRightlist);
          }}
        >
          {" "}
          {">"}{" "}
        </button>
        <button> {">>"} </button>
      </div>

      <List list={rightlist} setList={setRightlist} />
    </div>
  );
}

const List = ({ list, setList }) => {
  return (
    <div className="lists__list">
      {Object.keys(list).map((key, i) => {
        return (
          <div className="" key={i}>
            <input
              type="checkbox"
              id={key}
              checked={list[key]}
              onChange={() => {
                setList({ ...list, [key]: !list[key] });
              }}
            />
            <label htmlFor={key}> {key} </label>
          </div>
        );
      })}
    </div>
  );
};
