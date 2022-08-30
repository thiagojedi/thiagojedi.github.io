import { Octokit } from 'octokit';

const octokit = new Octokit();

const mockRepos = [
  {
    id: 225034206,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMjUwMzQyMDY=',
    name: '10g',
    full_name: 'thiagojedi/10g',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/10g',
    description: 'Ten Grams is a lite version of Telegram for KaiOS',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/10g',
    forks_url: 'https://api.github.com/repos/thiagojedi/10g/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/10g/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/10g/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/10g/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/10g/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/10g/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/10g/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/10g/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/10g/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/10g/tags',
    blobs_url: 'https://api.github.com/repos/thiagojedi/10g/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/thiagojedi/10g/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/thiagojedi/10g/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/thiagojedi/10g/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/thiagojedi/10g/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/10g/languages',
    stargazers_url: 'https://api.github.com/repos/thiagojedi/10g/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/10g/contributors',
    subscribers_url: 'https://api.github.com/repos/thiagojedi/10g/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/10g/subscription',
    commits_url: 'https://api.github.com/repos/thiagojedi/10g/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/10g/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/10g/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/10g/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/10g/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/10g/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/10g/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/10g/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/10g/downloads',
    issues_url: 'https://api.github.com/repos/thiagojedi/10g/issues{/number}',
    pulls_url: 'https://api.github.com/repos/thiagojedi/10g/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/10g/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/10g/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/thiagojedi/10g/labels{/name}',
    releases_url: 'https://api.github.com/repos/thiagojedi/10g/releases{/id}',
    deployments_url: 'https://api.github.com/repos/thiagojedi/10g/deployments',
    created_at: '2019-11-30T15:46:38Z',
    updated_at: '2021-06-16T03:27:44Z',
    pushed_at: '2022-07-20T18:14:03Z',
    git_url: 'git://github.com/thiagojedi/10g.git',
    ssh_url: 'git@github.com:thiagojedi/10g.git',
    clone_url: 'https://github.com/thiagojedi/10g.git',
    svn_url: 'https://github.com/thiagojedi/10g',
    homepage: null,
    size: 1125,
    stargazers_count: 8,
    watchers_count: 8,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 19,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['kaios', 'tdlib', 'telegram'],
    visibility: 'public',
    forks: 0,
    open_issues: 19,
    watchers: 8,
    default_branch: 'master',
  },
  {
    id: 495463005,
    node_id: 'R_kgDOHYgqXQ',
    name: 'albion-refining-calc',
    full_name: 'thiagojedi/albion-refining-calc',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/albion-refining-calc',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/albion-refining-calc',
    forks_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/albion-refining-calc/deployments',
    created_at: '2022-05-23T15:14:03Z',
    updated_at: '2022-05-23T15:14:18Z',
    pushed_at: '2022-05-23T15:14:14Z',
    git_url: 'git://github.com/thiagojedi/albion-refining-calc.git',
    ssh_url: 'git@github.com:thiagojedi/albion-refining-calc.git',
    clone_url: 'https://github.com/thiagojedi/albion-refining-calc.git',
    svn_url: 'https://github.com/thiagojedi/albion-refining-calc',
    homepage: null,
    size: 75,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 26176579,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNjE3NjU3OQ==',
    name: 'AprendendoUnity3D',
    full_name: 'thiagojedi/AprendendoUnity3D',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/AprendendoUnity3D',
    description: 'Repo aberto com estudos pessoais',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/AprendendoUnity3D',
    forks_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/AprendendoUnity3D/deployments',
    created_at: '2014-11-04T16:04:13Z',
    updated_at: '2014-12-16T03:50:47Z',
    pushed_at: '2014-12-16T03:50:47Z',
    git_url: 'git://github.com/thiagojedi/AprendendoUnity3D.git',
    ssh_url: 'git@github.com:thiagojedi/AprendendoUnity3D.git',
    clone_url: 'https://github.com/thiagojedi/AprendendoUnity3D.git',
    svn_url: 'https://github.com/thiagojedi/AprendendoUnity3D',
    homepage: null,
    size: 5424,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'ASP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 79503952,
    node_id: 'MDEwOlJlcG9zaXRvcnk3OTUwMzk1Mg==',
    name: 'botkit',
    full_name: 'thiagojedi/botkit',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/botkit',
    description: 'Botkit is a toolkit for making bot applications',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/botkit',
    forks_url: 'https://api.github.com/repos/thiagojedi/botkit/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/botkit/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/botkit/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/botkit/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/botkit/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/botkit/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/botkit/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/botkit/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/botkit/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/botkit/tags',
    blobs_url: 'https://api.github.com/repos/thiagojedi/botkit/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/botkit/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/botkit/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/thiagojedi/botkit/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/botkit/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/botkit/languages',
    stargazers_url: 'https://api.github.com/repos/thiagojedi/botkit/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/botkit/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/botkit/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/botkit/subscription',
    commits_url: 'https://api.github.com/repos/thiagojedi/botkit/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/botkit/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/botkit/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/botkit/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/botkit/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/botkit/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/botkit/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/botkit/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/botkit/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/botkit/issues{/number}',
    pulls_url: 'https://api.github.com/repos/thiagojedi/botkit/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/botkit/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/botkit/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/thiagojedi/botkit/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/botkit/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/botkit/deployments',
    created_at: '2017-01-19T23:01:57Z',
    updated_at: '2019-06-03T01:21:18Z',
    pushed_at: '2016-11-29T19:27:30Z',
    git_url: 'git://github.com/thiagojedi/botkit.git',
    ssh_url: 'git@github.com:thiagojedi/botkit.git',
    clone_url: 'https://github.com/thiagojedi/botkit.git',
    svn_url: 'https://github.com/thiagojedi/botkit',
    homepage: null,
    size: 1031,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 323989291,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMjM5ODkyOTE=',
    name: 'clean-project-template',
    full_name: 'thiagojedi/clean-project-template',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/clean-project-template',
    description: 'Just a minimal template for my projects',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/clean-project-template',
    forks_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/clean-project-template/deployments',
    created_at: '2020-12-23T19:50:04Z',
    updated_at: '2021-02-03T12:52:24Z',
    pushed_at: '2021-01-06T18:03:59Z',
    git_url: 'git://github.com/thiagojedi/clean-project-template.git',
    ssh_url: 'git@github.com:thiagojedi/clean-project-template.git',
    clone_url: 'https://github.com/thiagojedi/clean-project-template.git',
    svn_url: 'https://github.com/thiagojedi/clean-project-template',
    homepage: null,
    size: 146,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'unlicense',
      name: 'The Unlicense',
      spdx_id: 'Unlicense',
      url: 'https://api.github.com/licenses/unlicense',
      node_id: 'MDc6TGljZW5zZTE1',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 50840434,
    node_id: 'MDEwOlJlcG9zaXRvcnk1MDg0MDQzNA==',
    name: 'code-debug',
    full_name: 'thiagojedi/code-debug',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/code-debug',
    description: 'Native debugging for VSCode',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/code-debug',
    forks_url: 'https://api.github.com/repos/thiagojedi/code-debug/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/code-debug/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/code-debug/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/code-debug/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/code-debug/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/code-debug/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/code-debug/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/code-debug/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/code-debug/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/code-debug/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/code-debug/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/code-debug/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/code-debug/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/code-debug/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/code-debug/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/code-debug/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/code-debug/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/code-debug/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/code-debug/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/code-debug/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/code-debug/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/code-debug/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/code-debug/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/code-debug/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/code-debug/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/code-debug/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/code-debug/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/code-debug/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/code-debug/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/code-debug/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/code-debug/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/code-debug/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/code-debug/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/code-debug/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/code-debug/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/code-debug/deployments',
    created_at: '2016-02-01T13:16:13Z',
    updated_at: '2016-02-01T13:16:14Z',
    pushed_at: '2016-02-01T14:17:52Z',
    git_url: 'git://github.com/thiagojedi/code-debug.git',
    ssh_url: 'git@github.com:thiagojedi/code-debug.git',
    clone_url: 'https://github.com/thiagojedi/code-debug.git',
    svn_url: 'https://github.com/thiagojedi/code-debug',
    homepage: null,
    size: 46,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 39729367,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTcyOTM2Nw==',
    name: 'core-docs',
    full_name: 'thiagojedi/core-docs',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/core-docs',
    description: '.NET Core documentation (work in progress).',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/core-docs',
    forks_url: 'https://api.github.com/repos/thiagojedi/core-docs/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/core-docs/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/core-docs/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/core-docs/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/core-docs/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/core-docs/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/core-docs/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/core-docs/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/core-docs/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/core-docs/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/core-docs/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/core-docs/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/core-docs/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/core-docs/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/core-docs/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/core-docs/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/core-docs/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/core-docs/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/core-docs/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/core-docs/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/core-docs/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/core-docs/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/core-docs/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/core-docs/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/core-docs/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/core-docs/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/core-docs/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/core-docs/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/core-docs/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/core-docs/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/core-docs/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/core-docs/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/core-docs/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/core-docs/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/core-docs/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/core-docs/deployments',
    created_at: '2015-07-26T15:00:49Z',
    updated_at: '2015-07-08T08:52:43Z',
    pushed_at: '2015-07-29T02:18:26Z',
    git_url: 'git://github.com/thiagojedi/core-docs.git',
    ssh_url: 'git@github.com:thiagojedi/core-docs.git',
    clone_url: 'https://github.com/thiagojedi/core-docs.git',
    svn_url: 'https://github.com/thiagojedi/core-docs',
    homepage: 'http://dotnet.readthedocs.org',
    size: 896,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 213696522,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTM2OTY1MjI=',
    name: 'crystal-gobject',
    full_name: 'thiagojedi/crystal-gobject',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/crystal-gobject',
    description: 'gobject-introspection for Crystal',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/crystal-gobject',
    forks_url: 'https://api.github.com/repos/thiagojedi/crystal-gobject/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/crystal-gobject/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/crystal-gobject/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/crystal-gobject/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/crystal-gobject/deployments',
    created_at: '2019-10-08T16:33:42Z',
    updated_at: '2019-10-08T16:33:43Z',
    pushed_at: '2019-10-08T17:16:26Z',
    git_url: 'git://github.com/thiagojedi/crystal-gobject.git',
    ssh_url: 'git@github.com:thiagojedi/crystal-gobject.git',
    clone_url: 'https://github.com/thiagojedi/crystal-gobject.git',
    svn_url: 'https://github.com/thiagojedi/crystal-gobject',
    homepage: '',
    size: 3805,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 6474140,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NDc0MTQw',
    name: 'Customizer',
    full_name: 'thiagojedi/Customizer',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/Customizer',
    description: 'Ubuntu Live CD remastering tool',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/Customizer',
    forks_url: 'https://api.github.com/repos/thiagojedi/Customizer/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/Customizer/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/Customizer/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/Customizer/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/Customizer/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/Customizer/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/Customizer/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/Customizer/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/Customizer/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/Customizer/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/Customizer/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/Customizer/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/Customizer/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/Customizer/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/Customizer/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/Customizer/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/Customizer/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/Customizer/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/Customizer/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/Customizer/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/Customizer/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/Customizer/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/Customizer/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/Customizer/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/Customizer/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/Customizer/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/Customizer/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/Customizer/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/Customizer/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/Customizer/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/Customizer/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/Customizer/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/Customizer/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/Customizer/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/Customizer/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/Customizer/deployments',
    created_at: '2012-10-31T13:18:01Z',
    updated_at: '2017-01-31T08:03:04Z',
    pushed_at: '2012-11-08T23:27:29Z',
    git_url: 'git://github.com/thiagojedi/Customizer.git',
    ssh_url: 'git@github.com:thiagojedi/Customizer.git',
    clone_url: 'https://github.com/thiagojedi/Customizer.git',
    svn_url: 'https://github.com/thiagojedi/Customizer',
    homepage: '',
    size: 1541,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 12962865,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2Mjg2NQ==',
    name: 'DCMST',
    full_name: 'thiagojedi/DCMST',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/DCMST',
    description: 'Trabalho de Algoritmos Avançados, turma 2013.2',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/DCMST',
    forks_url: 'https://api.github.com/repos/thiagojedi/DCMST/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/DCMST/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/DCMST/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/DCMST/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/DCMST/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/DCMST/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/DCMST/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/DCMST/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/DCMST/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/DCMST/tags',
    blobs_url: 'https://api.github.com/repos/thiagojedi/DCMST/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/DCMST/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/DCMST/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/thiagojedi/DCMST/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/DCMST/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/DCMST/languages',
    stargazers_url: 'https://api.github.com/repos/thiagojedi/DCMST/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/DCMST/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/DCMST/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/DCMST/subscription',
    commits_url: 'https://api.github.com/repos/thiagojedi/DCMST/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/DCMST/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/DCMST/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/DCMST/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/DCMST/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/DCMST/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/DCMST/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/DCMST/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/DCMST/downloads',
    issues_url: 'https://api.github.com/repos/thiagojedi/DCMST/issues{/number}',
    pulls_url: 'https://api.github.com/repos/thiagojedi/DCMST/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/DCMST/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/DCMST/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/thiagojedi/DCMST/labels{/name}',
    releases_url: 'https://api.github.com/repos/thiagojedi/DCMST/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/DCMST/deployments',
    created_at: '2013-09-20T00:48:33Z',
    updated_at: '2013-11-25T05:58:34Z',
    pushed_at: '2013-11-25T05:58:33Z',
    git_url: 'git://github.com/thiagojedi/DCMST.git',
    ssh_url: 'git@github.com:thiagojedi/DCMST.git',
    clone_url: 'https://github.com/thiagojedi/DCMST.git',
    svn_url: 'https://github.com/thiagojedi/DCMST',
    homepage: '',
    size: 384,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'C#',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      spdx_id: 'GPL-3.0',
      url: 'https://api.github.com/licenses/gpl-3.0',
      node_id: 'MDc6TGljZW5zZTk=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 6530448,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NTMwNDQ4',
    name: 'Delivery',
    full_name: 'thiagojedi/Delivery',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/Delivery',
    description:
      'Trabalho de Projeto de Interfaces de Usuário. Sistema de Entregas Online em GTK+',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/Delivery',
    forks_url: 'https://api.github.com/repos/thiagojedi/Delivery/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/Delivery/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/Delivery/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/Delivery/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/Delivery/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/Delivery/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/Delivery/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/Delivery/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/Delivery/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/Delivery/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/Delivery/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/Delivery/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/Delivery/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/Delivery/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/Delivery/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/Delivery/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/Delivery/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/Delivery/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/Delivery/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/Delivery/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/Delivery/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/Delivery/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/Delivery/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/Delivery/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/Delivery/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/Delivery/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/Delivery/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/Delivery/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/Delivery/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/Delivery/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/Delivery/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/Delivery/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/Delivery/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/Delivery/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/Delivery/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/Delivery/deployments',
    created_at: '2012-11-04T12:29:19Z',
    updated_at: '2019-05-22T13:11:26Z',
    pushed_at: '2012-12-11T19:44:31Z',
    git_url: 'git://github.com/thiagojedi/Delivery.git',
    ssh_url: 'git@github.com:thiagojedi/Delivery.git',
    clone_url: 'https://github.com/thiagojedi/Delivery.git',
    svn_url: 'https://github.com/thiagojedi/Delivery',
    homepage: null,
    size: 160,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'C',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 19953195,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTk1MzE5NQ==',
    name: 'drifts',
    full_name: 'thiagojedi/drifts',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/drifts',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/drifts',
    forks_url: 'https://api.github.com/repos/thiagojedi/drifts/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/drifts/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/drifts/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/drifts/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/drifts/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/drifts/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/drifts/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/drifts/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/drifts/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/drifts/tags',
    blobs_url: 'https://api.github.com/repos/thiagojedi/drifts/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/drifts/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/drifts/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/thiagojedi/drifts/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/drifts/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/drifts/languages',
    stargazers_url: 'https://api.github.com/repos/thiagojedi/drifts/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/drifts/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/drifts/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/drifts/subscription',
    commits_url: 'https://api.github.com/repos/thiagojedi/drifts/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/drifts/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/drifts/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/drifts/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/drifts/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/drifts/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/drifts/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/drifts/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/drifts/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/drifts/issues{/number}',
    pulls_url: 'https://api.github.com/repos/thiagojedi/drifts/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/drifts/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/drifts/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/thiagojedi/drifts/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/drifts/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/drifts/deployments',
    created_at: '2014-05-19T18:38:54Z',
    updated_at: '2014-05-19T18:38:55Z',
    pushed_at: '2014-05-19T18:33:43Z',
    git_url: 'git://github.com/thiagojedi/drifts.git',
    ssh_url: 'git@github.com:thiagojedi/drifts.git',
    clone_url: 'https://github.com/thiagojedi/drifts.git',
    svn_url: 'https://github.com/thiagojedi/drifts',
    homepage: null,
    size: 8543,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C++',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 492555510,
    node_id: 'R_kgDOHVvM9g',
    name: 'empresas-que-usam-react-no-brasil',
    full_name: 'thiagojedi/empresas-que-usam-react-no-brasil',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/empresas-que-usam-react-no-brasil',
    description:
      'Repositório que mostra empresas e projetos que utilizam React no Brasil',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil',
    forks_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/empresas-que-usam-react-no-brasil/deployments',
    created_at: '2022-05-15T17:24:40Z',
    updated_at: '2022-05-15T17:09:07Z',
    pushed_at: '2022-05-15T17:36:41Z',
    git_url:
      'git://github.com/thiagojedi/empresas-que-usam-react-no-brasil.git',
    ssh_url: 'git@github.com:thiagojedi/empresas-que-usam-react-no-brasil.git',
    clone_url:
      'https://github.com/thiagojedi/empresas-que-usam-react-no-brasil.git',
    svn_url: 'https://github.com/thiagojedi/empresas-que-usam-react-no-brasil',
    homepage: '',
    size: 939,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 86593456,
    node_id: 'MDEwOlJlcG9zaXRvcnk4NjU5MzQ1Ng==',
    name: 'framework7-react',
    full_name: 'thiagojedi/framework7-react',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/framework7-react',
    description:
      'Build full featured iOS & Android apps using Framework7 & React',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/framework7-react',
    forks_url: 'https://api.github.com/repos/thiagojedi/framework7-react/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/framework7-react/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/framework7-react/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/framework7-react/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/framework7-react/deployments',
    created_at: '2017-03-29T14:39:13Z',
    updated_at: '2017-03-29T14:39:15Z',
    pushed_at: '2017-03-29T14:43:35Z',
    git_url: 'git://github.com/thiagojedi/framework7-react.git',
    ssh_url: 'git@github.com:thiagojedi/framework7-react.git',
    clone_url: 'https://github.com/thiagojedi/framework7-react.git',
    svn_url: 'https://github.com/thiagojedi/framework7-react',
    homepage: 'http://framework7.io',
    size: 5799,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 85708377,
    node_id: 'MDEwOlJlcG9zaXRvcnk4NTcwODM3Nw==',
    name: 'Framework7-Vue',
    full_name: 'thiagojedi/Framework7-Vue',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/Framework7-Vue',
    description:
      'Build full featured iOS & Android apps using Framework7 & Vue',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue',
    forks_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/Framework7-Vue/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/Framework7-Vue/deployments',
    created_at: '2017-03-21T13:57:03Z',
    updated_at: '2017-03-21T13:57:05Z',
    pushed_at: '2017-03-21T10:42:29Z',
    git_url: 'git://github.com/thiagojedi/Framework7-Vue.git',
    ssh_url: 'git@github.com:thiagojedi/Framework7-Vue.git',
    clone_url: 'https://github.com/thiagojedi/Framework7-Vue.git',
    svn_url: 'https://github.com/thiagojedi/Framework7-Vue',
    homepage: 'http://framework7.io/vue/',
    size: 2080,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 173660532,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNzM2NjA1MzI=',
    name: 'GraniteSharp',
    full_name: 'thiagojedi/GraniteSharp',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/GraniteSharp',
    description: 'Library that extends GtkSharp',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/GraniteSharp',
    forks_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/GraniteSharp/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/GraniteSharp/deployments',
    created_at: '2019-03-04T02:35:14Z',
    updated_at: '2022-01-11T01:28:26Z',
    pushed_at: '2019-09-28T16:04:13Z',
    git_url: 'git://github.com/thiagojedi/GraniteSharp.git',
    ssh_url: 'git@github.com:thiagojedi/GraniteSharp.git',
    clone_url: 'https://github.com/thiagojedi/GraniteSharp.git',
    svn_url: 'https://github.com/thiagojedi/GraniteSharp',
    homepage: '',
    size: 30,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'C#',
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['dotnet-standard', 'gtk'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master',
  },
  {
    id: 205601676,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDU2MDE2NzY=',
    name: 'hyper-gtk',
    full_name: 'thiagojedi/hyper-gtk',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/hyper-gtk',
    description: 'HyperScript/Jsx syntax for Gjs',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/hyper-gtk',
    forks_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/hyper-gtk/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/hyper-gtk/deployments',
    created_at: '2019-08-31T22:15:31Z',
    updated_at: '2022-01-28T23:03:37Z',
    pushed_at: '2019-11-09T02:16:11Z',
    git_url: 'git://github.com/thiagojedi/hyper-gtk.git',
    ssh_url: 'git@github.com:thiagojedi/hyper-gtk.git',
    clone_url: 'https://github.com/thiagojedi/hyper-gtk.git',
    svn_url: 'https://github.com/thiagojedi/hyper-gtk',
    homepage: '',
    size: 10,
    stargazers_count: 13,
    watchers_count: 13,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['gjs', 'gtk', 'hyperscript', 'jsx'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 13,
    default_branch: 'master',
  },
  {
    id: 429823848,
    node_id: 'R_kgDOGZ6XaA',
    name: 'jedi-nextjs-project-template',
    full_name: 'thiagojedi/jedi-nextjs-project-template',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/jedi-nextjs-project-template',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template',
    forks_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/jedi-nextjs-project-template/deployments',
    created_at: '2021-11-19T14:20:26Z',
    updated_at: '2021-11-19T15:22:53Z',
    pushed_at: '2021-11-19T15:22:50Z',
    git_url: 'git://github.com/thiagojedi/jedi-nextjs-project-template.git',
    ssh_url: 'git@github.com:thiagojedi/jedi-nextjs-project-template.git',
    clone_url: 'https://github.com/thiagojedi/jedi-nextjs-project-template.git',
    svn_url: 'https://github.com/thiagojedi/jedi-nextjs-project-template',
    homepage: null,
    size: 6,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 19842386,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTg0MjM4Ng==',
    name: 'jekyll-category-archive-plugin',
    full_name: 'thiagojedi/jekyll-category-archive-plugin',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/jekyll-category-archive-plugin',
    description: 'Jekyll plugin for category archive',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin',
    forks_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/jekyll-category-archive-plugin/deployments',
    created_at: '2014-05-16T02:35:35Z',
    updated_at: '2014-05-16T02:48:17Z',
    pushed_at: '2014-05-16T02:48:18Z',
    git_url: 'git://github.com/thiagojedi/jekyll-category-archive-plugin.git',
    ssh_url: 'git@github.com:thiagojedi/jekyll-category-archive-plugin.git',
    clone_url:
      'https://github.com/thiagojedi/jekyll-category-archive-plugin.git',
    svn_url: 'https://github.com/thiagojedi/jekyll-category-archive-plugin',
    homepage: null,
    size: 105,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 181346237,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODEzNDYyMzc=',
    name: 'learning-preact-hooks',
    full_name: 'thiagojedi/learning-preact-hooks',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/learning-preact-hooks',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/learning-preact-hooks',
    forks_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/learning-preact-hooks/deployments',
    created_at: '2019-04-14T17:41:44Z',
    updated_at: '2019-07-27T15:36:35Z',
    pushed_at: '2022-03-23T06:32:25Z',
    git_url: 'git://github.com/thiagojedi/learning-preact-hooks.git',
    ssh_url: 'git@github.com:thiagojedi/learning-preact-hooks.git',
    clone_url: 'https://github.com/thiagojedi/learning-preact-hooks.git',
    svn_url: 'https://github.com/thiagojedi/learning-preact-hooks',
    homepage: null,
    size: 157,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['pikapkg-web', 'preact-x', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 5,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 26812983,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNjgxMjk4Mw==',
    name: 'md-website',
    full_name: 'thiagojedi/md-website',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/md-website',
    description: 'MonoDevelop WebSite',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/md-website',
    forks_url: 'https://api.github.com/repos/thiagojedi/md-website/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/md-website/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/md-website/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/md-website/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/md-website/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/md-website/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/md-website/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/md-website/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/md-website/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/md-website/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/md-website/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/md-website/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/md-website/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/md-website/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/md-website/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/md-website/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/md-website/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/md-website/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/md-website/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/md-website/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/md-website/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/md-website/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/md-website/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/md-website/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/md-website/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/md-website/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/md-website/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/md-website/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/md-website/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/md-website/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/md-website/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/md-website/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/md-website/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/md-website/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/md-website/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/md-website/deployments',
    created_at: '2014-11-18T14:31:06Z',
    updated_at: '2014-11-18T18:19:44Z',
    pushed_at: '2014-11-27T02:03:33Z',
    git_url: 'git://github.com/thiagojedi/md-website.git',
    ssh_url: 'git@github.com:thiagojedi/md-website.git',
    clone_url: 'https://github.com/thiagojedi/md-website.git',
    svn_url: 'https://github.com/thiagojedi/md-website',
    homepage: null,
    size: 10529,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'gh-pages',
  },
  {
    id: 50436398,
    node_id: 'MDEwOlJlcG9zaXRvcnk1MDQzNjM5OA==',
    name: 'moka-icon-theme',
    full_name: 'thiagojedi/moka-icon-theme',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/moka-icon-theme',
    description: 'Official Moka Icon Theme source repository',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/moka-icon-theme',
    forks_url: 'https://api.github.com/repos/thiagojedi/moka-icon-theme/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/moka-icon-theme/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/moka-icon-theme/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/moka-icon-theme/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/moka-icon-theme/deployments',
    created_at: '2016-01-26T15:06:03Z',
    updated_at: '2016-01-26T15:06:13Z',
    pushed_at: '2015-11-23T16:43:41Z',
    git_url: 'git://github.com/thiagojedi/moka-icon-theme.git',
    ssh_url: 'git@github.com:thiagojedi/moka-icon-theme.git',
    clone_url: 'https://github.com/thiagojedi/moka-icon-theme.git',
    svn_url: 'https://github.com/thiagojedi/moka-icon-theme',
    homepage: '',
    size: 420843,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 21471987,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTQ3MTk4Nw==',
    name: 'MonoGame',
    full_name: 'thiagojedi/MonoGame',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/MonoGame',
    description: 'One framework for creating powerful cross-platform games.',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/MonoGame',
    forks_url: 'https://api.github.com/repos/thiagojedi/MonoGame/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/MonoGame/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/MonoGame/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/MonoGame/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/MonoGame/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/MonoGame/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/MonoGame/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/MonoGame/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/MonoGame/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/MonoGame/deployments',
    created_at: '2014-07-03T17:59:02Z',
    updated_at: '2016-08-04T07:53:37Z',
    pushed_at: '2014-11-04T15:17:04Z',
    git_url: 'git://github.com/thiagojedi/MonoGame.git',
    ssh_url: 'git@github.com:thiagojedi/MonoGame.git',
    clone_url: 'https://github.com/thiagojedi/MonoGame.git',
    svn_url: 'https://github.com/thiagojedi/MonoGame',
    homepage: 'http://www.monogame.net',
    size: 46196,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'pipeline-gui',
  },
  {
    id: 21573118,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTU3MzExOA==',
    name: 'MonoGame.Dependencies',
    full_name: 'thiagojedi/MonoGame.Dependencies',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/MonoGame.Dependencies',
    description: 'The MonoGame binary dependencies submodule.',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies',
    forks_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/MonoGame.Dependencies/deployments',
    created_at: '2014-07-07T14:16:30Z',
    updated_at: '2014-07-07T16:48:51Z',
    pushed_at: '2014-07-07T16:52:41Z',
    git_url: 'git://github.com/thiagojedi/MonoGame.Dependencies.git',
    ssh_url: 'git@github.com:thiagojedi/MonoGame.Dependencies.git',
    clone_url: 'https://github.com/thiagojedi/MonoGame.Dependencies.git',
    svn_url: 'https://github.com/thiagojedi/MonoGame.Dependencies',
    homepage: null,
    size: 102900,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 5829634,
    node_id: 'MDEwOlJlcG9zaXRvcnk1ODI5NjM0',
    name: 'ParkingLot',
    full_name: 'thiagojedi/ParkingLot',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/ParkingLot',
    description: 'Trabalho de disciplina Sistema Distribuido',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/ParkingLot',
    forks_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/ParkingLot/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/ParkingLot/deployments',
    created_at: '2012-09-16T13:47:29Z',
    updated_at: '2014-01-04T23:50:01Z',
    pushed_at: '2012-09-20T13:38:19Z',
    git_url: 'git://github.com/thiagojedi/ParkingLot.git',
    ssh_url: 'git@github.com:thiagojedi/ParkingLot.git',
    clone_url: 'https://github.com/thiagojedi/ParkingLot.git',
    svn_url: 'https://github.com/thiagojedi/ParkingLot',
    homepage: null,
    size: 180,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 222281938,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMjIyODE5Mzg=',
    name: 'preact-htm-deno',
    full_name: 'thiagojedi/preact-htm-deno',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/preact-htm-deno',
    description: 'Just a experiment on how one can use preact with deno',
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/preact-htm-deno',
    forks_url: 'https://api.github.com/repos/thiagojedi/preact-htm-deno/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/preact-htm-deno/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/preact-htm-deno/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/preact-htm-deno/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/preact-htm-deno/deployments',
    created_at: '2019-11-17T17:01:05Z',
    updated_at: '2020-11-16T20:32:49Z',
    pushed_at: '2020-05-22T21:02:56Z',
    git_url: 'git://github.com/thiagojedi/preact-htm-deno.git',
    ssh_url: 'git@github.com:thiagojedi/preact-htm-deno.git',
    clone_url: 'https://github.com/thiagojedi/preact-htm-deno.git',
    svn_url: 'https://github.com/thiagojedi/preact-htm-deno',
    homepage: '',
    size: 6,
    stargazers_count: 13,
    watchers_count: 13,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 13,
    default_branch: 'master',
  },
  {
    id: 39333245,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTMzMzI0NQ==',
    name: 'pretzel',
    full_name: 'thiagojedi/pretzel',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/pretzel',
    description: 'A site generation tool (and then some) for .NET platforms ',
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/pretzel',
    forks_url: 'https://api.github.com/repos/thiagojedi/pretzel/forks',
    keys_url: 'https://api.github.com/repos/thiagojedi/pretzel/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/pretzel/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/pretzel/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/pretzel/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/pretzel/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/pretzel/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/pretzel/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/pretzel/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/pretzel/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/pretzel/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/pretzel/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/pretzel/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/pretzel/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/pretzel/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/thiagojedi/pretzel/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/pretzel/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/pretzel/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/pretzel/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/pretzel/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/pretzel/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/pretzel/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/pretzel/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/pretzel/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/pretzel/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/pretzel/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/pretzel/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/pretzel/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/thiagojedi/pretzel/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/pretzel/issues{/number}',
    pulls_url: 'https://api.github.com/repos/thiagojedi/pretzel/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/pretzel/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/pretzel/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/thiagojedi/pretzel/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/pretzel/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/pretzel/deployments',
    created_at: '2015-07-19T12:36:39Z',
    updated_at: '2015-07-19T12:36:40Z',
    pushed_at: '2015-08-10T14:24:06Z',
    git_url: 'git://github.com/thiagojedi/pretzel.git',
    ssh_url: 'git@github.com:thiagojedi/pretzel.git',
    clone_url: 'https://github.com/thiagojedi/pretzel.git',
    svn_url: 'https://github.com/thiagojedi/pretzel',
    homepage: '',
    size: 4669,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'ms-pl',
      name: 'Microsoft Public License',
      spdx_id: 'MS-PL',
      url: 'https://api.github.com/licenses/ms-pl',
      node_id: 'MDc6TGljZW5zZTE5',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 189752999,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODk3NTI5OTk=',
    name: 'react-key-navigation',
    full_name: 'thiagojedi/react-key-navigation',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/react-key-navigation',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/thiagojedi/react-key-navigation',
    forks_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/teams',
    hooks_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/react-key-navigation/deployments',
    created_at: '2019-06-01T16:11:35Z',
    updated_at: '2019-06-01T16:11:37Z',
    pushed_at: '2019-05-09T21:51:23Z',
    git_url: 'git://github.com/thiagojedi/react-key-navigation.git',
    ssh_url: 'git@github.com:thiagojedi/react-key-navigation.git',
    clone_url: 'https://github.com/thiagojedi/react-key-navigation.git',
    svn_url: 'https://github.com/thiagojedi/react-key-navigation',
    homepage: null,
    size: 407,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 13271394,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzI3MTM5NA==',
    name: 'SeriesShelf',
    full_name: 'thiagojedi/SeriesShelf',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/SeriesShelf',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/SeriesShelf',
    forks_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/SeriesShelf/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/SeriesShelf/deployments',
    created_at: '2013-10-02T13:14:30Z',
    updated_at: '2013-10-31T11:16:16Z',
    pushed_at: '2013-10-31T11:16:14Z',
    git_url: 'git://github.com/thiagojedi/SeriesShelf.git',
    ssh_url: 'git@github.com:thiagojedi/SeriesShelf.git',
    clone_url: 'https://github.com/thiagojedi/SeriesShelf.git',
    svn_url: 'https://github.com/thiagojedi/SeriesShelf',
    homepage: 'https://github.com/thiagoabreu/SocialSeries/wiki',
    size: 15064,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      spdx_id: 'GPL-3.0',
      url: 'https://api.github.com/licenses/gpl-3.0',
      node_id: 'MDc6TGljZW5zZTk=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 316539292,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMTY1MzkyOTI=',
    name: 'simple-gtk-app',
    full_name: 'thiagojedi/simple-gtk-app',
    private: false,
    owner: {
      login: 'thiagojedi',
      id: 126386,
      node_id: 'MDQ6VXNlcjEyNjM4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/126386?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/thiagojedi',
      html_url: 'https://github.com/thiagojedi',
      followers_url: 'https://api.github.com/users/thiagojedi/followers',
      following_url:
        'https://api.github.com/users/thiagojedi/following{/other_user}',
      gists_url: 'https://api.github.com/users/thiagojedi/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/thiagojedi/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/thiagojedi/subscriptions',
      organizations_url: 'https://api.github.com/users/thiagojedi/orgs',
      repos_url: 'https://api.github.com/users/thiagojedi/repos',
      events_url: 'https://api.github.com/users/thiagojedi/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/thiagojedi/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/thiagojedi/simple-gtk-app',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app',
    forks_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/forks',
    keys_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/teams',
    hooks_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/hooks',
    issue_events_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/events',
    assignees_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/tags',
    blobs_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/languages',
    stargazers_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/stargazers',
    contributors_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/contributors',
    subscribers_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/subscribers',
    subscription_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/subscription',
    commits_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/thiagojedi/simple-gtk-app/merges',
    archive_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/downloads',
    issues_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/labels{/name}',
    releases_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/thiagojedi/simple-gtk-app/deployments',
    created_at: '2020-11-27T15:37:48Z',
    updated_at: '2020-12-12T20:48:05Z',
    pushed_at: '2020-12-12T20:48:03Z',
    git_url: 'git://github.com/thiagojedi/simple-gtk-app.git',
    ssh_url: 'git@github.com:thiagojedi/simple-gtk-app.git',
    clone_url: 'https://github.com/thiagojedi/simple-gtk-app.git',
    svn_url: 'https://github.com/thiagojedi/simple-gtk-app',
    homepage: null,
    size: 7,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
];

export type GithubRepos = typeof mockRepos;

export const getPublicRepositories = async () => {
  if (import.meta.env.DEV) {
    return mockRepos;
  }
  const repos = await octokit.rest.repos.listForUser({
    username: 'thiagojedi',
  });

  return repos.data as typeof mockRepos;
};
