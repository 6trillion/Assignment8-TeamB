import Tokens from 'utils/Tokens';

function App() {
  const task = [
    {
      id: 1,
      taskName: '자소서 쓰기',
      status: 'status.ONGOING',
      createdAt: new Date(),
      updatedAt: new Date(),
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
      <div className="App"></div>
      <button onClick={HandleClear}>지우기</button>
    </>
  );
}

export default App;
