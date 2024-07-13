import {Listing} from './components/Listing'
import './App.css';
import etsy from "./data/etsy.json";
//фильтруем только активные
const newArrey = etsy.filter(item => item.state === "active");
//console.log(newArrey);

function App() {
  //const [count, setCount] = useState(0)

  return (
      <Listing items={newArrey}  />
  )
}

export default App
