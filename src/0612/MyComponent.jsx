/* import React, { useContext } from "react";
import AuthContext from "./AuthContext";

function MyComponent() {
  const authContext = useContext(AuthContext);
  // useContext()후크를 이용하면 어떤 컴포넌트에서든 제공된값에 접근 할 수 있다.

  return ( 
    <div>
         Welcome {authContext}
    </div>
  );
}

export default MyComponent; */

import React, { useContext } from "react";

function MyComponent() {
    //버튼을 누르면 호출됨
  const buttonPressed = () => {
    alter('Button pressed');
  }
  
  return ( 
    <div>
         <button onClick={buttonPressed}>Press</button>
    </div>
  );
}

export default MyComponent;