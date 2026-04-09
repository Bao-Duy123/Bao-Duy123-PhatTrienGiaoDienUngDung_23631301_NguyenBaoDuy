import { useRecoilValue } from 'recoil';
import CounterAtom from '../atoms/CounterAtom';

function ComponentA() {
  const count = useRecoilValue(CounterAtom);

  return (
    <div>
      <h3>Component A </h3>
      <p >Count hiện tại là: {count}</p>
    </div>
  );
}

export default ComponentA;