import './App.css';
import Canvas from './components/Canvas';
import Sidebar from './components/SidebarComponent';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="canvas">
        <Canvas>
          
        </Canvas>
      </div>
    </div>
  );
}

export default App;
