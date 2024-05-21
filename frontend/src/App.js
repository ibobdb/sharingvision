import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './pages/Posts';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import Preview from './pages/Preview';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/article' element={<Post />} />
          <Route exact path='/article/newpost' element={<NewPost />} />
          <Route exact path='/article/edit/:Id' element={<EditPost />} />
          <Route exact path='/article/:Id' element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
