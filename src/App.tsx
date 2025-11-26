import {  Routes, Route } from 'react-router-dom';
import Layout from './layout/main-layout';
import NotFound from './pages/not-found';
import { LoginForm } from './pages/auth/login';
import adminRoustes from './router/admin-roustes';
import { Statistic } from './pages/statistic/statistic';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/app" element={<Layout />}>
        <Route path="admin">
          <Route index element={<Statistic />} />
          {adminRoustes.map(({ page: Page, path }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>

        <Route path="teacher"></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
