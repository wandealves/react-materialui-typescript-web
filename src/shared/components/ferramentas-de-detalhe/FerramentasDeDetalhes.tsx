import { Box, Button, Divider, Paper,useTheme } from '@mui/material';
import { FaPlus,FaSave,FaTrash,FaArrowLeft } from 'react-icons/fa';

interface IFerramentasDeDetalheProps {
textoBotaoNovo?:string;

mostrarBotaoNovo?:boolean;
mostrarBotaoVoltar?:boolean;
mostrarBotaoApagar?:boolean;
mostrarBotaoSalvar?:boolean;
mostrarBotaoSalvarEFechar?:boolean;

aoClicarEmNovo?: () => void;
aoClicarEmVoltar?: () => void;
aoClicarEmApagar?: () => void;
aoClicarEmSalvar?: () => void;
aoClicarEmSalvarEFechar?: () => void;

}

export const FerramentasDeDetalhe:React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo='Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) =>{
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
    {
      mostrarBotaoSalvar && (    <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoClicarEmSalvar}
        startIcon={<FaSave />}
      >
             Salvar
      </Button>)
    }
    {
      mostrarBotaoSalvarEFechar && (    <Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmSalvarEFechar}
        startIcon={<FaSave />}
      >
         Salvar e voltar
      </Button>)
    }
    {
      mostrarBotaoApagar && (    <Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmApagar}
        startIcon={<FaTrash />}
      >
             Apagar
      </Button>)
    }
    {
      mostrarBotaoNovo && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmNovo}
          startIcon={<FaPlus />}
        >
          {textoBotaoNovo}
        </Button>
      )
    }

    {
      mostrarBotaoVoltar && (<>
        <Divider variant='middle' orientation='vertical'/>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<FaArrowLeft />}
        >
           Voltar
        </Button>
      </>)
    }

  </Box>);
};