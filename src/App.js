import React , {useRef} from "react";
import "./App.css";
import Computer from "./component/computer";
import User from "./component/User";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)


export const App = () => {
 
  let gameCount0 = useRef(0);
  let gameCount = gameCount0.current;

    return (
    <div>
      <div className="main">
        <User gameCount = {gameCount}/>
        <Computer gameCount={gameCount}/>
      </div>
    </div>
  );
}

