import "./App.css";
import Router from "./Routes/Router.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js"; // Make sure you have imported the appStore from the correct file

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Router />
      </Provider>
    </>
  );
}
export default App;   