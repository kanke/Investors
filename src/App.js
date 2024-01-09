import { Route, Routes } from 'react-router-dom';
import Investors from './pages/Investors';
import Investor from "./pages/Investor";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Investors />} />
          <Route path="/investors/:id" element={<Investor />} />
      </Routes>
    </div>
  );
}

export default App;