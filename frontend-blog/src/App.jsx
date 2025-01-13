import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import Contacts from './components/Contacts'
import AppLayout from './components/AppLayout'
import ShowPost from './components/ShowPost'
import GlobalContext from './contexts/GlobalContext'

function App() {

  const globalProviderValue = {

  }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <BrowserRouter>
        <Routes>
          <Route Component={AppLayout}>
            <Route index Component={HomePage} />
            <Route path='/contacts' Component={Contacts} />
            <Route path='/postpage'>
              <Route index Component={PostPage} />
              <Route path=':id' Component={ShowPost} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;