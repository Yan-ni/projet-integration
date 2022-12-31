import { observer } from 'mobx-react';
import { createContext, useMemo } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import mapStore from './stores/mapStore';
import schoolStore from './stores/schoolStore';

export const StoreContext = createContext();

function App() {
  const stores = useMemo(() => ({ mapStore, schoolStore }), []);
  return (
    <StoreContext.Provider value={stores}>
      <Header />
      <Main StoreContext={StoreContext} />
      <Footer />
    </StoreContext.Provider>
  );
}

export default observer(App);
