import Header from './components/Header';
import Scroller from './components/Scroller';
import Bottom from './components/Bottom';
import { Page } from './global/global';

function App() {
  return (
    <Page>
      <Header />
      <Scroller />
      <Bottom/>
    </Page>
  );
}

export default App;
