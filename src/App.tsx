import { useCallback, useMemo, useState } from 'react';
import Button from './components/useCallBack/Button';
import Counter from './components/useCallBack/Counter';
import Title from './components/useCallBack/Title';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increamentOne = useCallback(() => {
    setCount((preCount) => preCount+1);
  }, []);


  const increamentFive = useCallback(() => {
    setCount1((preFive) => preFive+5);
  },[]);

  const isEventOrOdd = useMemo(() => {
    let i = 0; 
    while (i < 1000000000) i+=1;
    return count % 2 ===0;
  },[count]);
    return (
      <div>
        <Title/>
        <Counter counter={count}  title="One"/>
        <span>{isEventOrOdd ? 'Even' : 'Odd'}</span>
        <Button handelClick={increamentOne} >Increment By One</Button>
        <br/>
        <Title/>
        <Counter counter={count1}  title="Five"/>
        <Button handelClick={increamentFive}>Increment By Five</Button>
      </div>
    )
}

export default App;
