import { Octokit } from 'octokit';

const octokit = new Octokit();

const mockRepos: Repository[] = [
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
  {
    language: 'typescript',
    name: 'Teste de Repositorio',
    description:
      'Descrição muito grande do tal repositório que eu com certeza escrevi',
    pushed_at: '2017-12-22T03:04:00',
    fork: false,
  },
];

export const getPublicRepositories = async () => {
  if (import.meta.env.DEV) {
    return mockRepos;
  }
  const repos = await octokit.rest.repos.listForUser({
    username: 'thiagojedi',
    per_page: 6,
    sort: 'updated',
    direction: 'desc',
  });

  return repos.data;
};
