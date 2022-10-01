import React, { Component, useState, useEffect } from 'react';
import './style.css';


function withData(urlFn, dataSaverFn) {
  if (typeof urlFn !== 'function') {
    throw new Error('urlFn is not a function');
  }
  if (typeof dataSaverFn !== 'function') {
    throw new Error('urlFn is not a function');
  }

  return function (Component) {
    const Func = function (props) {
      const [data, setData] = useState(null);
      const url = urlFn(props);

      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(dataSaverFn(json)));
      }, [props]);

      return <Component {...props} {...data} />;
    };

    const componentName =
      Component.displayName || Component.name || 'Component';
    Func.displayName = `WithData${componentName}`;

    return Func;
  };
}

function UserDetail({ id, name }) {
  if (!id) {
    return;
  }

  return (
    <>
      <h1>User detail</h1>
      <p>
        {name} ({id})
      </p>
    </>
  );
}

function SidebarComponent({ id, name }) {
  if (!id) {
    return;
  }

  return (
    <>
      <h1>SideBar</h1>
      <p>
        {name} ({id})
      </p>
    </>
  );
}

const userDataDecorator = withData(
  ({ id }) => `https://jsonplaceholder.typicode.com/users/${id}`,
  (user) => ({ ...user })
);

const SidebarWithData = userDataDecorator(SidebarComponent);
const UserDetailWithData = userDataDecorator(UserDetail);

export default function Analog() {
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setUserId((prevId) => prevId + 1);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <SidebarWithData id={userId} />
      <UserDetailWithData id={userId} />
    </>
  );
}
