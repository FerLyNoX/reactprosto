import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { dialogs } from './Redux/dialogs';
import {addPost, posts} from './Redux/posts';
import { messages } from "./Redux/messages";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs dialogs={dialogs} />} />
            <Route path="/dialogs/:dialogId" element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route path="/profile" element={<Profile
                posts={posts}
                addPost={addPost} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
