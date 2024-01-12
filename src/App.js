import  { ThreeDots } from 'react-loader-spinner';
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
    {isLoading?
    <div className='flex justify-center items-center min-h-screen'>
    <ThreeDots
    type="Puff" 
    color="#00BFFF" 
    height={100} 
    width={100}
    /></div>:<MainContent />}
  
  </>
  );
}

export default App;
