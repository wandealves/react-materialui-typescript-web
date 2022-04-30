import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, People } from '@mui/icons-material';

import { useDrawerContext } from '../shared/contexts';

import { Dashboard, ListagemDePessoas } from '../pages';

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
        label: 'Pessoas',
        icon: <People />,
        path: '/pessoas'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<p>Detalhe</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
