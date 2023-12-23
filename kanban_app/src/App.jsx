import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";

function App() {
  const [data,setData] = useState({});
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL);
        const result = await response.json();
        setData(result);
      }catch(error){
        console.log("Error fetching data : ",error);
      }
    };
    fetchData();
  },[]);

  const {tickets,users} = data;

  return (
    <>
      <Navbar />
      
    </>
  )
}

export default App
