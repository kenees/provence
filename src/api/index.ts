import * as site from './site';
import * as user from './user';
import * as tag from './tag';
import * as music from './music';
import * as article from './article';

export default {
  ...tag,
  ...site,
  ...user,
  ...music,
  ...article,
}
