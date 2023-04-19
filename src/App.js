import React from "react";
import "../src/App.css";

function App() {

  const name = '루루';
  const animal = '고양이';
  
  let num1 = 5;
  let num2 = 3;
  
  let a = 3;
  let b = 2;

  const title = "Hello World";

  return (
    <div className="App">
      이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다.</h3>
      <h2>제 반려 동물의 이름은 {name}입니다. {name}은 {animal}입니다.</h2>
      <h2>{num1 + num2 === 8 ? "정답입니다" : "오답입니다"}</h2>
      <h2>{a > b ? "a가 b보다 큽니다" : "a가 b보다 작습니다"}</h2>
      <div className="test">{title}</div>
      <div className="input">아이디 : <input type="text" placeholder=""></input></div><br></br>
      <div className="input">비밀번호 : <input type="text" placeholder=""></input></div>
    </div>
  );
}

export default App;
