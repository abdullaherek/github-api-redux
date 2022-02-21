import './App.css';
import {GitFetchViewContainer} from "../src/containers/GitFetchViewContainer"
import {GitUserInfoViewContainer} from "../src/containers/GitUserInfoViewContainer"

function App() {
  return (
    <div className="App">
      <GitFetchViewContainer />
      <GitUserInfoViewContainer />
    </div>
  );
}

export default App;
