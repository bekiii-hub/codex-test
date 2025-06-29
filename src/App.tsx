import { useState } from 'react';
import { Button } from './components/ui/button';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center space-y-4">
      <h1 className="text-2xl font-bold text-primary">ChipChip Super Group Leader Tracker</h1>
      <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>
      <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
    </div>
  );
}

export default App;
