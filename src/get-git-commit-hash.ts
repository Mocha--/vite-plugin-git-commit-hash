import {execSync} from 'child_process';

export function getGitCommitHash(isLongHash: boolean = false): string {
  const cmd = isLongHash ? 'git rev-parse HEAD' : 'git rev-parse --short HEAD';
  const hash = execSync(cmd, {encoding: 'utf-8'});
  return hash.replace(/\r?\n|\r/g, '');
}
