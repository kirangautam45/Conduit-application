import { Provider } from "react-redux";
import Counter from "./page/counter";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
