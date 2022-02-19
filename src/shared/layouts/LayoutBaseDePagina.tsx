import React from 'react';
import { IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { FaBars } from 'react-icons/fa';
import { useDrawerContext } from '../contexts';

// import { Container } from './styles';

interface ILayoutBaseDePaginaProps {
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <FaBars />
          </IconButton>
        )}

        <Typography variant="h5">{titulo}</Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
