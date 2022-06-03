import logo from './logo.svg';
import Navbar_component from './components/Navbar_component';
import Resume_page_component from './components/Resume_page_component';
import Languages_component from './components/Languages_component';
import './App.css';

function App() {
  
  return (
    <div>
      {/* <script src="https://kit.fontawesome.com/16139588c8.js" ></script> */}
      <Navbar_component></Navbar_component>
      <Resume_page_component></Resume_page_component>
    </div>
  );
}

export default App;
