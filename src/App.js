import { Route, Routes } from 'react-router-dom';
import Investors from './pages/Investors';
import Investor from "./pages/Investor";

const NoMatch = () => <div>No match</div>
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Investors />} />
          <Route path="/investors/:id" element={<Investor />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;