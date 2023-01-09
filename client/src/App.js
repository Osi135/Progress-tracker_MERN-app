import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          {/* <Route path='/edit-book/:id' element={<UpdateBookInfo />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
