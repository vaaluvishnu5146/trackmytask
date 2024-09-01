import { useLayoutEffect, useEffect, useState } from 'react';

export default function Square() {
const [count, setCount] = useState(0);  

  useLayoutEffect(() => {
    console.log('Before')
    return () => {
    };
  }, [])

  useEffect(() => {
    if (count == 10) {
        alert('Count is 10')
    }
    return () => {
    }
  }, [count])

  
  function handleCountChange(e) {
    e.preventDefault();
    if (count < 10) {
        setCount(count + 1)
    }
  }

  return (
    <div>
    Hey Square!
    <h1>{count}</h1>
    <button onClick={handleCountChange}>+</button>
    </div>
  )
}
