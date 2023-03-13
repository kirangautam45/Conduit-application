import { Provider } from "react-redux";
import { Button } from "./components/common/Button/Button";
import Input from "./components/common/Input/Input";
import Counter from "./page/counter";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Input />
      <Button />
    </Provider>
  );
};

export default App;
