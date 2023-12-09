/* import { useEffect, useState } from "react";
import { UserList } from "./components/UserList";

function App() {
  const [endPoint, setEndPoint] = useState('users')

  const handleFetch = () => {
    setEndPoint('comments');
  };

  return (
    <>
      <h1>Users List</h1>
      <UserList endPoint={endPoint}></UserList>

      <button onClick={handleFetch}>
        Load more
      </button>
    </>
  );
}

export default App; */

import React, { useState } from "react";
import { UserList } from "./components/UserList";

const App = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleClick = () => {
    //setEndPoint("posts");
    endPoint === "posts"
      ? setEndPoint("users")
      : setEndPoint("posts");
  };

  return (
    <>
      <h1>Api list</h1>
      <button onClick={handleClick}>
        Change data
      </button>
      <UserList endPoint={endPoint} />
    </>
  );
};

export default App;
