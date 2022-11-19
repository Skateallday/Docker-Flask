import './App.css';
import {useState, useEffect} from 'react';
import { Channel } from './Components/Channel/Channel'

function App() {

  const [initialState, setState] = useState([])
  const url = '/api'

  useEffect(()=> {

    fetch(url).then(Response =>{
      if(Response.status === 200){
        return Response.json()
      }
    }).then(data => setState(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Channel data={initialState}/>
        
      </header>
    </div>
  );
}

export default App;
