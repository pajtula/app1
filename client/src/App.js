import { useEffect, useState } from "react";
import Axios from 'axios';
function App() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    
    Axios.get('api/x').then((response) => {
      setData(response.data)
    });                 
               
  },[]) 


  return (
    <div className="App">
      <p>My React application</p>
      <p>Data from NodeJS server: {data}</p>
    </div>
  );
}
export default App;