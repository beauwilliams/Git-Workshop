
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
    namespace: '/Git-Workshop'            // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Git Workshop'                // --> the base title of your doc pages
    }
  },
  misc: {
      github: {
          user: 'beauwilliams',               // --> your github username (where your repo is hosted)
          repo: 'Git-Workshop',               // --> your github repo name
          action: 'Star',             // --> action of the GitHub button
          count: true,               // --> whether to show the `count` on the GitHub button
          large: true,                // --> whether to show a `large` GitHub button
          standardIcon: true,        // --> whether to use the GitHub icon on the GitHub button or use an action specific icon

      }
  },
});
