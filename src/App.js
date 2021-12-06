import "./App.css";
import CounterProp from "./components/CounterProps/CounterProp";
// import CounterList from './components/Counter/CounterList';

// import MyBtn from './components/MyBtn';
import Person from "./components/People/Person";

function App() {
  // state - to kompnento busenos duomenys
  // const myArr = ['green', 'blue', 'red'];
  console.log("App.js componentas");
  return (
    <div className="App">
      <h2>App</h2>
      <Person>James Bond</Person>
      <CounterProp
        // name="London"
        initVal={3}
        specialVal={"secial"}
        selectVal={"blue"}
        favNumbers={[7, 12, 5, "9"]}
        arrayOfNumbersOrStrings={[7, 12, 5, "9"]}
      />
    </div>
  );
}

export default App;
