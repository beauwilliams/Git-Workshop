import { getRenderer } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/admin/Git_Downloads/Git-Workshop/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  '+pG+EpekgkZ1fMrDfncz3g==': ToCPrevNext,
  'lq3rDjl42C/wX4yhviI5SQ==': GithubSearch,
  'pjvM/e+RhaWwgYzkJMeV1w==': ToCToggle,
  'oKcsqWczBMnpm1Uy8zftkw==': DarkModeSwitch,
  'dopOzT4gSaadfBy38OJBPA==': ConfigTransport,
  'fhcrAAG9UtZDN2Hv7ty+UQ==': TabSelector,
  'Bj3TGtGOyNdr4cQeBOU5ZQ==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
