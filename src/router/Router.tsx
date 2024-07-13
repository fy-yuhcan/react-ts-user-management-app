import { memo, VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoginUserProvider } from '../providers/LoginUserProvider';

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/home/*" 
          element={<HomeRoutes />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});

const HomeRoutes: VFC = memo(() => {
  return (
    <Routes>
      {homeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<HeaderLayout>{route.children}</HeaderLayout>} />
      ))}
    </Routes>
  );
});



