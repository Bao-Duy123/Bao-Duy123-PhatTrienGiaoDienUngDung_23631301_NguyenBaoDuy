import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*
  useState có thể reader
  useEffect được gọi sau khi reader
  useEffect có 3 option, 1 là không có gì, sẽ thực hiện bất kì khi nào reader
   2 là mảng rỗng, chỉ thực hiện 1 lần sau khi reader
   3 là mảng có giá trị, sẽ thực hiện khi giá trị trong mảng thay đổi
  */
 /*
  
 */
/*
bài tập reader count mỗi khi nhấn button giúp làm quen với useState
*/
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count + 1)
    console.log("rendered");

  }
  useEffect(() => {
    console.log("count:", count);
  }, [count])

  return (
    <div>
        <button onClick={incrementCount}>but</button>
        <span>{count}</span>
    </div>
  )
}

export default App
