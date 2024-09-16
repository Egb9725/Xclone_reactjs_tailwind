// src/App.tsx

import './App.css';
import './index.css'
import SideBar from "./components/SideBar";
import Timeline from './components/Timeline';
import RightBar from './components/RigthBar';

function App() {
  return (
    <div className=' bg-black min-h-screen sm:justify-center flex'>
      <SideBar/>
      <Timeline />
      <RightBar />
    </div>
  );
}

export default App;


