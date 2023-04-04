import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Home/Courses/Courses';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Courses></Courses>
    </div>
  );
}

export default App;
