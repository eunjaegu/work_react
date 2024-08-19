/* import React, { useState } from "react";

import MyComponent from "./0612/MyComponent";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };

  return (
    <div>
      <MyComponent />
      <p>
        Counter: {count} {count2}
      </p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App; */

/* import React, { Component } from "react";
import AuthContext from "./0612/AuthContext";
import MyComponent from "./0612/MyComponent";

function App() {
  // 사용자를 인증하고 사용자명을 가져온다.
  const userName = 'John';

  return (
    <AuthContext.Provider value={userName}>
      <MyComponent />
    </AuthContext.Provider>
  );
}

export default App; */

import React, { Component } from 'react';
import MyList from './0612/MyList';
import MyTable from './0612/MyTable';
import MyComponent from './0612/MyComponent';
import MyForm from './0612/MyForm';

function App() {
  
    return (
      <div>
        {/* <MyList />
        <MyTable />
        <MyComponent /> */}
        <MyForm />
      </div>
    ); 
}

export default App;
