import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import store from "./store/store";

export default function App() {
  // console.log('getState:',store.getState());
  const unSubscribe = store.subscribe(() =>
    console.log("getState:", store.getState())
  );
  unSubscribe();
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}
