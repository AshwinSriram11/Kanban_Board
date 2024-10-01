import Navbar from "./components/Navbar";
import Data from "./Data";

function App() {
  const url = 'https://api.quicksell.co/v1/internal/frontend-assignment' ;
  return (
    <>
      <Data url={url}/>
      <Navbar />
    </>
  );
}

export default App;
