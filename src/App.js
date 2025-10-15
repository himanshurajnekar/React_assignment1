import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Counter from './Counter';
import Counterfunction from './Counterfunctional';
// function App() {
//   return (
//     <div>
//   <Counterfunction/>
//   </div>
//   );
// }
 
class App extends Component{
render(){
  
  return(
    <div className="App">
      <Counter/>
    <Counterfunction/>
  </div>

  );
}
}

export default App;
