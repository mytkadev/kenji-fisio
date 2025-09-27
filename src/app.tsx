import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPagePTBR } from './pages/landingPage-br';
import { LandingPageEN } from './pages/landingPage-en';
import { LinksPage } from './pages/linksPage-br';

const App: React.FC = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<LandingPagePTBR />} />
            <Route path="/en" element={<LandingPageEN />} />
            <Route path="/links" element={<LinksPage />} />
          </Routes>
    </Router>
  );
};

export default App;


