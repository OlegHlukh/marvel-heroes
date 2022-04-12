import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import HeroInfo from './pages/hero-info';
import Home from './pages/home';
import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hero/:name" element={<HeroInfo />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
