import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. box 두 개 생성.
// 2. 각 box 에 user 와 computer 적용
// 3. 가위바위보 버튼 3개
// 4. 가위바위보 버튼을 클릭하면 클릭한 값(이미지, 결과창)이 박스에 보임
// 5. 컴퓨터는 랜덤으로 선택.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.

const choice = {
  cut: {
    name: "Cut",
    img: "https://cdn-icons-png.flaticon.com/512/2928/2928823.png",
  },
  rock: {
    name: "Rock",
    img: "https://us.123rf.com/450wm/topvectors/topvectors1807/topvectors180700229/104023307-%EB%B9%9B%EA%B3%BC-%EA%B7%B8%EB%A6%BC%EC%9E%90%EA%B0%80%EC%9E%88%EB%8A%94-%EA%B1%B0%EB%8C%80%ED%95%9C-%EB%8F%8C%EC%9D%98-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%82%B0-%EB%B0%94%EC%9C%84%EC%9D%98-%ED%81%B0-%ED%9A%8C%EC%83%89-%EC%A1%B0%EA%B0%81-%EC%A7%80%EB%8F%84-%EB%98%90%EB%8A%94-%EB%B9%84%EB%94%94%EC%98%A4-%EA%B2%8C%EC%9E%84%EC%9D%98-%ED%92%8D%EA%B2%BD-%EB%B0%B0%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%A5%BC%EC%9C%84%ED%95%9C-%EC%9E%90%EC%97%B0-%EC%9A%94%EC%86%8C-%EB%A7%8C%ED%99%94-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%99%94%EC%9D%B4%ED%8A%B8%EC%97%90-%EA%B2%A9%EB%A6%AC%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg?ver=6",
  },
  paper: {
    name: "Paper",
    img: "https://us.123rf.com/450wm/floralset/floralset1905/floralset190500100/128182903-%ED%98%84%EC%8B%A4%EC%A0%81%EC%9D%B8-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EB%A9%94%EB%AA%A8%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%B0%B1%EC%A7%80-%EB%A9%94%EB%AA%A8%EC%A7%80%EC%97%90-%EB%A9%94%EC%8B%9C%EC%A7%80%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%8C%EB%A6%BC-eps10-%EB%B2%A1%ED%84%B0.jpg?ver=6",
  },
};

function App() {
  const [useSelect, setUserSelect] = useState("null");
  const [comSelect, setComSelect] = useState("null");
  const [resultSelect, setResultSelect] = useState("");

  const play = (userChoice) => {
    let ComChoice = createRandom();
    setUserSelect(choice[userChoice]);
    setComSelect(choice[ComChoice]);
    setResultSelect(comPare(choice[userChoice], choice[ComChoice]));
  };

  const comPare = (user, com) => {
    if (user.name === com.name) {
      return "TIE";
    } else if (user.name === "Cut") return com.name === "Rock" ? "LOSE" : "WIN";
    else if (user.name === "Paper") return com.name === "Cut" ? "LOSE" : "WIN";
    else if (user.name === "Rock") return com.name === "Paper" ? "LOSE" : "WIN";
  };

  const createRandom = () => {
    let choiceArr = Object.keys(choice);
    let random = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[random];
  };

  return (
    <div className="main">
      <section className="box-area">
        <Box title="소희" item={useSelect} result={resultSelect} />
        <Box title="상대방" item={comSelect} result={resultSelect} />
      </section>
      <section className="button-area">
        <button onClick={() => play("cut")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </section>
    </div>
  );
}

export default App;
