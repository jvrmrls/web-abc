import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Mostrar un skeleton mientras se importa el componente
const LayoutPage = React.lazy(() => import('#/pages/LayoutPage.jsx'));
const TemporalPage = React.lazy(() => import('#/pages/TemporalPage.jsx'));

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<TemporalPage />} />
      </Route>
      <Route path="*" element={<NoContent />} />
    </Routes>
  );
}

const NoContent = () => {
  return <div>404</div>;
};
