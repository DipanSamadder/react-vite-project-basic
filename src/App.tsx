import { useState } from 'react';
import Clock from './components/useEffect/Clock';

function App() {
  const [show, setShow] = useState(false);
  
    return (
      <div>
          {show && <Clock/>}
          <button onClick={() => setShow((preShow) => !preShow) }>Clock</button>
      </div>
    )
}

export default App;
