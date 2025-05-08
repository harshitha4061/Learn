import React, { useContext } from 'react';
import Counter from './component/counter'
import { MyContext} from './context/context';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slice/counterSlice';

const App = () => {
  const { value, setValue } = useContext(MyContext);
  // const count = useSelector((state) => state.count);
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch(); 

  return (
    <div>
      <h1>Context API</h1>
      <button onClick={()=>{setValue(value+1)}}>Increment</button>
      {/* <Counter/> */}
      <h1>{value}</h1>
      <button onClick={()=>{setValue(value-1)}}>Decrement</button>
      <br />
      <br />
      <h1>React Redux</h1>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button> */}
      <h1>React Toolkit</h1>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      </div>
    </div>

  )
}

export default App
