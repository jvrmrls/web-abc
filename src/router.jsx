import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DynamicImport from '#/utils/DynamicImport.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

const LayoutPage = () => (
  <DynamicImport load={() => import('#/pages/LayoutPage.jsx')}>
    {Component => (Component === null ? <></> : <Component />)}
  </DynamicImport>
);

const HomePage = () => (
  <DynamicImport load={() => import('#/pages/HomePage.jsx')}>
    {Component => (Component === null ? <></> : <Component />)}
  </DynamicImport>
);

const ContactPage = () => (
  <DynamicImport load={() => import('#/pages/ContactPage.jsx')}>
    {Component => (Component === null ? <></> : <Component />)}
  </DynamicImport>
);

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
