import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <div style={{backgroundColor:'#191830',height:'100vh'}}>
    <Navbar title="TextUtils" />
    <div className="container my-3" >
    <TextForm heading="Enter the text below" />
    </div>
    </div>
    </>
  );
}

export default App;
