import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import Contacts from './components/Contacts'
import AppLayout from './components/AppLayout'
import ShowPost from './components/ShowPost'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AppLayout}>
          <Route index Component={HomePage} />
          <Route path='/contacts' Component={Contacts} />
          <Route path='/postpage'>
            <Route index Component={PostPage} />
            <Route path=':id' Component={ShowPost}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;