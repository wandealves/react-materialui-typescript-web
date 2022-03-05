import React from 'react';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

// import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDeDetalhe mostrarBotaoNovo />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
