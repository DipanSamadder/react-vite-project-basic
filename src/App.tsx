
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';

function App() {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Dipan Samadder' :'Guset' }/>
    </div>
  )
}

export default App;
