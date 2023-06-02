import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { dialogs } from './Data/dialogs';
import { posts } from './Data/posts';
import { messages } from "./Data/messages";

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
            <Route path="/profile" element={<Profile posts={posts} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
