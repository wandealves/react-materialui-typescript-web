import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home,LocationCity } from '@mui/icons-material';

import { useDrawerContext } from '../shared/contexts';

import { Dashboard,ListagemDeCidade } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: <Home />,
        path: '/pagina-inicial'
      },
      {
        label: 'Cidades',
        icon: <LocationCity />,
        path: '/cidades'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cidades" element={<ListagemDeCidade />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
