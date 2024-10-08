import './App.css'
import Navbar from './componets/navbar/Navbar';
import { Recorridos } from './recorridos/Recorridos';

function App() {
  return (
    <div className = "containerApp">
      <Navbar/>
      <Recorridos/>
    </div>
  );
}

export default App;
