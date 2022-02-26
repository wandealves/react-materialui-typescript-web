import React from 'react';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

// import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDaListagem mostarInputBusca />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
