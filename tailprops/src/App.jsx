import "./App.css";
import Card from "./components/Card";


function App() {
// object
  let obj = {
    name:"ajay",
    age: 21
  }

  // Array
  let arr = [1,2,3];

  return (
    <>
      <h1 className="bg-amber-500 text-black p-4 rounded-xl">Props with Tailwind</h1>
      <Card name="Harshit"  title = " Hello My name is Harshit Barnwal" btntxt = "Click Me!" someobj= {obj} somearr = {arr}/>

      <Card name="Himanshu"  title = " Hello My name is Himanshu Prakash"  btntxt = "Visit Me!" />
       

    </>
  );
}

export default App;
