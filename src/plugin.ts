import {Plugin} from 'vite';
import {getGitCommitHash} from './get-git-commit-hash';

export interface GitCommitHashPluginParams {
  isLongHash: boolean;
}

export function gitCommitHashPlugin(params: GitCommitHashPluginParams | null = null): Plugin {
  const {
    isLongHash = false
  } = params || {};

  return {
    name: 'vite-plugin-git-commit-hash',
    config() {
      return {
        define: {
          GIT_COMMIT_HASH: JSON.stringify(`hehehe-${getGitCommitHash(isLongHash)}`)
        }
      };
    }
  }
}
