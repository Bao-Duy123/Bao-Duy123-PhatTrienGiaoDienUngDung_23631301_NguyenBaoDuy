import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'tang':
        return state+ 1;
    case 'giam':
        return state - 1;
    default:
      throw new Error;
  }
}

export default function ReactHookLab() {
  // 1. useState
  const [count, setCount] = useState(0);

  // 2. useReducer
    const initialState = 0;
  const [redCount, dispatch] = useReducer(reducer, initialState);

  // 3. useRef
  const inputRef = useRef(null);

  // 4. useMemo
  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  // 5. useCallback
  const handleAlert = useCallback(() => {
    alert(`Giá trị hiện tại là: ${count}`);
  }, [count]);

  // 6. useEffect
  useEffect(() => {
    console.log("Count đã thay đổi!");
  }, [count, redCount]);

  return (
    <div>
      <h1>React Hook </h1>

      {/* Test useState */}
      <div>
        <p>useState Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tăng State</button>
      </div>

      <hr />

      {/* Test useReducer */}
      <div>
        <p>useReducer Count: {redCount}</p>
        <button onClick={() => dispatch({ type: 'tang' })}>Tăng</button>
        <button onClick={() => dispatch({ type: 'giam' })}>Giảm</button>

      </div>

      <hr />

      {/* Test useRef */}
      <div>
        <p>useRef: Focus vào Input</p>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>

      <hr />

      {/* Test useMemo */}
      <div>
        <p>useMemo (Count x 2): {memoizedValue}</p>
      </div>

      <hr />

      {/* Test useCallback */}
      <div>
        <p>useCallback: Alert giá trị</p>
        <button onClick={handleAlert}>Bấm để Alert</button>
      </div>

\
    </div>
  );
}