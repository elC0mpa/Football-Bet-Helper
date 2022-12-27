import {Provider} from "react-redux";
import AppLayout from "./components/layout";
import {MainContentContainer} from "./components/layout/styled";
import {store} from "./store";

function App() {

  return (
    <Provider store={store}>
      <AppLayout>
        <MainContentContainer>
          Esta es la prueba
        </MainContentContainer>
      </AppLayout>
    </Provider>
  );
}

export default App;
