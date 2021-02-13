import './App.css';
import {Book} from './Book';


const App = () =>{
        
  return (
      <div>
          <Book name ="React" year="2019" price="1000"/>
          <Book name ="JS2" year="2021" price="2000"/>
          <Book  year="20221" price="2000">Text here</Book>
      </div>
  );
}


export default App;
