import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {useDebounce} from '../../shared/hooks';

import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {debounce} = useDebounce(3000);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(()=>{
    debounce(()=>{
      PessoasService.getAll(1,busca).then((result)=>{
        if(result instanceof Error){
          alert(result.message);
          return;
        }
  
        console.log('result',result);
      });
    });

  },[busca]);

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
    ></LayoutBaseDePagina>
  );
};
