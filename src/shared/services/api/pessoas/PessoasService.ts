import { Api } from '../axios-config';

import { Environment } from '../../../environment';

interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

interface IDetalhePessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['z-total-count'] || Environment.LIMITE_DE_LINHAS
        )
      };
    }

    return new Error('Erro ao listar os registros');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros'
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await Api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar os registros');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar os registros'
    );
  }
};

const create = async (dados:Omit<IDetalhePessoa,'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalhePessoa>('/pessoas',dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar os registros');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao criar os registros'
    );
  }
};

const updateById = async (id:number,dados:IDetalhePessoa): Promise<void | Error> => {
  try {
    await Api.put(`/pessoas/${id}`,dados);
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar os registros'
    );
  }
};

const deleteById = async (id:number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao deletar os registros'
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};