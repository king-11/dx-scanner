import { PullRequest } from '../../model';

export const getPullRequestResponse: PullRequest = {
  user: {
    id: '{9d65d517-4898-47ac-9d2f-fd902d25d9f6}',
    login: 'landtuna',
    url: 'https://bitbucket.org/%7B9d65d517-4898-47ac-9d2f-fd902d25d9f6%7D/',
  },
  url: 'https://bitbucket.org/pypy/pypy/pull-requests/1',
  body: 'Added a floor() ufunc to micronumpy',
  createdAt: '2011-06-22T19:44:39.555192+00:00',
  updatedAt: '2011-06-23T13:52:30.230741+00:00',
  closedAt: 'undefined',
  mergedAt: null,
  state: 'DECLINED',
  id: 1,
  base: {
    repo: {
      url: 'https://bitbucket.org/pypy/pypy',
      name: 'pypy',
      id: '{54220cd1-b139-4188-9455-1e13e663f1ac}',
      owner: {
        login: 'landtuna',
        id: '{9d65d517-4898-47ac-9d2f-fd902d25d9f6}',
        url: 'https://bitbucket.org/%7B9d65d517-4898-47ac-9d2f-fd902d25d9f6%7D/',
      },
    },
  },
};