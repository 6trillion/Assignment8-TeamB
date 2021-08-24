import React from 'react';

import Tokens from 'utils/Tokens';
import TodoBody from 'components/body/TodoBody';
import Header from 'components/header/Header';

function App() {
  const task = [
    {
      id: 1,
      taskName: '자소서 쓰기',
      status: 'status.ONGOING',
      createdAt: '21-08-24',
      updatedAt: '21-08-25',
      importance: 'none',
    },
  ];

  const tokens = Tokens.getInstance();
  tokens.save(task);
  const accessToken = tokens.load();
  console.log(accessToken);
  const HandleClear = () => {
    tokens.clear();
  };

  return (
    <>
      <div className="App">
        <Header />
        <TodoBody />
      </div>
      <button onClick={HandleClear}>지우기</button>
    </>
  );
}

export default App;
