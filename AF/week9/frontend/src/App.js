import logo from './logo.svg';
import './App.css';
import ContainerComponent from './component/containerComponent/containerComponent';
import Appp from './ThemeContext';
function App() {
  // return (
  //   <div className="App">
  //    <ContainerComponent/>
     
  //   </div>
  // );

  return (
    <Appp>
      <ContainerComponent/>
    </Appp>
  );
}

export default App;
