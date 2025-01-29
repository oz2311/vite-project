import { useState,ChangeEvent } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState<string>("")
  const [memos, setMemos] = useState<string[]>([]);

  const [count, setCount] = useState(0)

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };


  return (
    <>
      <div>
        <h1>簡易メモアプリ</h1>
        <input type="text" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>追加</button>
        <div>
          <p>メモ一覧</p>
          <ul>
            {memos.map((memo,index) =>(
              <li key={memo}>
                <div>
                <p>{memo}</p>
                <button onClick={()=>onClickDelete(index)}>削除</button>
                </div>
              </li>
            ))}
          </ul>

        </div>


        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
