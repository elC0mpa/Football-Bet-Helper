import {Provider} from "react-redux";
import Fixtures from "./components/fixtures/Fixtures";
import AppLayout from "./components/layout";
import {MainContentContainer} from "./components/layout/styled";
import {store} from "./store";
import {StyledTabs} from "./styles";

function App() {
  const tabItems = 
    [
      {
        key: '0',
        label: 'Fixtures',
        children: <Fixtures/>
      },
      {
        key: '1',
        label: 'Standings'
      }
    ]

  return (
    <Provider store={store}>
      <AppLayout>
        <MainContentContainer>
          <StyledTabs items={tabItems} size="large"/>
        </MainContentContainer>
      </AppLayout>
    </Provider>
  );
}

export default App;
