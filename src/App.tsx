
import Emoji from './components/composition/Emoji';
import Braket from './components/composition/Braket';
import Text from './components/composition/Text';

function App() {
  return (
    <div>
      <Emoji>
        {({addEmoji}) =>  
          <Braket>
            {({addBraket}) => <Text addBraket={addBraket}/>}
          </Braket>
        }

      </Emoji>
    </div>
  )
}

export default App;
