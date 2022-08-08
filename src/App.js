import './App.css';
import './components/Sidebar'
import Sidebar from './components/Sidebar';
import Player from './components/Player'

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-indigo-800 via-[#121212] to-[#121212]">
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
