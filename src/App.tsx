import "./App.css";
import { GroupInputSearch } from "./components/molecules/GroupInputSearch";
import { Page } from "./components/pages/PageSimple/Page";

function App() {
  return (
    <div className="App">
      <Page />
      <GroupInputSearch />
    </div>
  );
}

export default App;
