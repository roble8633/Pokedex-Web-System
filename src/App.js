import './App.css';
import Ash from './ash.png';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dialog from './components/dialog/Dialog'

function App() {
  return (
    <div>
      <main>
        <Header />
        <img src={Ash} alt="Ash" />
      </main>
      <Navbar />
      <Dialog />
      
    </div>
  );
}

export default App;
