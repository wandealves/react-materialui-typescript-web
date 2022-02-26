import { Box, Button, Paper, TextField, useTheme } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import React from 'react';

// import { Container } from './styles';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {mostarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={e => aoMudarTextoDeBusca?.(e.target.value)}
        ></TextField>
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<FaPlus />}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
