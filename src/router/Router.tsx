import { memo, VFC } from 'react';
import { Login } from '../components/pages/Login';
import { Routes, Route } from 'react-router-dom';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

const HomeRoutes: VFC = memo(() => {
  return (
    <Routes>
      {homeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
    </Routes>
  );
});
