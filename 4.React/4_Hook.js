// React hook
/*
클래스형 
유지보수하기 어려움
컴포넌트가 복잡해짐
함수형
*/

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {count}
    </>
  );
}

//
