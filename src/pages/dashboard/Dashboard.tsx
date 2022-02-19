import React from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';

// import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina titulo='Página inicial' barraDeFerramentas={<>Barra de ferramentas</>}>
      Testando
    </LayoutBaseDePagina>
  );
};