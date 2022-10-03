import "./App.css";
import "./components/Sidebar";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Browse from "./components/Browse";
import Player from "./components/Player";

function App() {
  return (
    <div className="w-full bg-black ">
      <Topbar  />
      <div className="h-screen ">
        <div className="flex w-full h-full py-16">
          <Sidebar />
          <Browse />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App;
