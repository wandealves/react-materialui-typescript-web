import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';

import { useDebounce } from '../../shared/hooks';

import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import {
  IListagemPessoa,
  PessoasService
} from '../../shared/services/api/pessoas/PessoasService';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PessoasService.getAll(1, busca).then(result => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          return;
        }

        console.log('result', result);
        setRows(result.data);
        setTotalCount(result.totalCount);
      });
    });
  }, [busca]);

  return (
    <LayoutBaseDePagina
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova"
          mostarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>Ações</TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};
