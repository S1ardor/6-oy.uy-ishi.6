import './App.css';
import { Messages } from './Messages';
import { More } from './More';
import { Bookmark } from './components/Bookmark';
import { Explore } from './components/Explore';
import { Header } from './components/Header/Header';
import { Lists } from './components/Lists';
import { Notifications } from './components/Notifications';
import { Profile } from './components/Profile';
import { Section } from './components/main/Section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Section/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/notification' element={<Notifications/>} />
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/bookmark' element={<Bookmark/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/more' element={<More/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
