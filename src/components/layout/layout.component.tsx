import { Outlet } from 'react-router-dom';

import * as S from './layout.styles';

const Layout: React.FC = () => {
  return (
    <>
      <header>Header</header>
      <S.Main>
        <Outlet />
      </S.Main>
      <footer>Footer</footer>
    </>
  );
};

export { Layout };
