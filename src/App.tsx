import {Provider} from "react-redux";
import AppLayout from "./components/layout";
import {store} from "./store";

function App() {

  return (
    <Provider store={store}>
      <AppLayout>
        Este es el content que definí
      </AppLayout>
    </Provider>
  );
}

export default App;
