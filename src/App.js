import TextCompoonent from "./components/TextComponent";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>

        <TextCompoonent />

      </Provider>
    </>
  );
}

export default App;
