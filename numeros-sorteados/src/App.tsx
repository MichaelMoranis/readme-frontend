import "./App.css";
import SortContainer from "./components/sortContainer/sortContainer";
import { SortNumber } from "./components/SortNumber /SortNumber";

function App() {
  return (
    <div className="overflow-hidden bg-zinc-200">
      <div className="flex flex-col items-center justify-center">
        <SortContainer />
      </div>
        <SortNumber />
    </div>
  );
}

export default App;
