import { useSetRecoilState } from 'recoil';
import CounterAtom from '../atoms/CounterAtom';

function ComponentB() {
  const setCount = useSetRecoilState(CounterAtom);

  return (
    <div >
      <h3>Component B </h3>
      <button onClick={() => setCount((val) => val + 1)}>Tăng</button>
      <button onClick={() => setCount((val) => val - 1)}>Giảm</button>
    </div>
  );
}

export default ComponentB;