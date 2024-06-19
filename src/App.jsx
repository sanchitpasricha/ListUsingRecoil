import { RecoilRoot } from "recoil";
import "./App.css";
import Form from "./components/Form";
import { Todos } from "./components/Todos";
import { FilterInput } from "./components/FilterInput";

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <div className="header">
          <h1>To Do App using Recoil</h1>
        </div>
        <div className="box">
          <Form />
        </div>
        <FilterInput />
        <div className="box">
          <Todos />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;

// filter (gym) => atom
// selector (the current set of (todos)
