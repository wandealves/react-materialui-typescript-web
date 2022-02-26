import { Box, Button, Divider, Paper,useTheme } from '@mui/material';
import { FaPlus,FaSave,FaTrash,FaArrowLeft } from 'react-icons/fa';

export const FerramentasDeDetalhe:React.FC = () =>{
  const theme = useTheme();
  return (<Box
    height={theme.spacing(5)}
    marginX={1}
    padding={1}
    paddingX={2}
    display="flex"
    gap={1}
    alignItems="center"
    component={Paper}
  >
    <Button
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<FaSave />}
    >
           Salvar
    </Button>
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<FaSave />}
    >
           Salvar e voltar
    </Button>
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<FaTrash />}
    >
           Apagar
    </Button>
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<FaPlus />}
    >
           Novo
    </Button>
    <Divider variant='middle' orientation='vertical'/>
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<FaArrowLeft />}
    >
           Voltar
    </Button>
  </Box>);
};