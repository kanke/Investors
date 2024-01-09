import { Route, Routes } from 'react-router-dom';
import Investors from './pages/Investors';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Investors />} />
      </Routes>
    </div>
  );
}

export default App;