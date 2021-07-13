import './App.css';
import Home from './components/Home';
import {CelebrationContextProvoider} from './contexts/Celebration'
import { ScoreContextProvoider } from './contexts/ScoreContext';
function App() {
  return (
    <ScoreContextProvoider>
    <CelebrationContextProvoider>
    <div className="App">
      <Home />
    </div>
    </CelebrationContextProvoider>
    </ScoreContextProvoider>
  );
}

export default App;
