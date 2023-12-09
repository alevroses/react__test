/* import React, { useEffect, useState } from "react";

const UserList = ({ endPoint }) => {
  const [data, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`
      );
      const data = await response.json();
      console.log(data);

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return (
    <ul>
      {data.map((item) =>
        endPoint === "users" ? (
          <li key={item.id}>{item.name}</li>
        ) : (
          <li key={item.id}>{item.body}</li>
        )
      )}
    </ul>
  );
};

export { UserList }; */

import React, { useEffect, useState } from "react";

const UserList = ({ endPoint }) => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    );
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    fetchApi();
  }, [endPoint]);

  return (
    <ul>
      {data.map((item) =>
        endPoint === "users" 
          ? (
            <li key={item.id}>{item.name}</li>
        ) : (
            <li key={item.id}>{item.title}</li>
        )
      )}
    </ul>
  );
};

export { UserList };
