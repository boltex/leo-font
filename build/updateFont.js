const webfont = require('webfont');
const fs = require('fs');
const path = require('path');

const svgs = [
  "arrow-down.svg",
  "arrow-left.svg",
  "arrow-right.svg",
  "arrow-small-down.svg",
  "arrow-small-left.svg",
  "arrow-small-right.svg",
  "arrow-small-up.svg",
  "arrow-up.svg",
  "chapter-back.svg",
  "chapter-main.svg",
  "chapter-next.svg",
  "chapter-select.svg",
  "clear-files.svg",
  "clipboard.svg",
  "close.svg",
  "close-server.svg",
  "collapse.svg",
  "connect.svg",
  "cut.svg",
  "dehoist.svg",
  "delete.svg",
  "demote.svg",
  "edit.svg",
  "extract.svg",
  "extract-name.svg",
  "find-next.svg",
  "find-previous.svg",
  "find-quick.svg",
  "find-quick-changed.svg",
  "find-quick-history.svg",
  "find-quick-marked.svg",
  "find-quick-selected.svg",
  "find-quick-timeline.svg",
  "folder.svg",
  "gear.svg",
  "hoist.svg",
  "import.svg",
  "insert.svg",
  "insert-child.svg",
  "link.svg",
  "mark.svg",
  "new-file.svg",
  "next.svg",
  "node.svg",
  "open-recent.svg",
  "parent.svg",
  "paste.svg",
  "paste-clone.svg",
  "plus.svg",
  "plus-small.svg",
  "prev.svg",
  "promote.svg",
  "redo.svg",
  "refresh.svg",
  "save.svg",
  "save-as.svg",
  "save-as-leojs.svg",
  "show-log.svg",
  "sort-children.svg",
  "sort-siblings.svg",
  "start-server.svg",
  "switch.svg",
  "tag.svg",
  "undo.svg",
  "unmark.svg",
  "write-at-file-nodes.svg",
  "write-dirty-at-file-nodes.svg",
].map(name => path.join(__dirname, '..', 'leo-icons', name));

async function generateFont() {

  try {
    const result = await webfont.webfont({
      files: svgs,
      formats: ['woff'],
      startUnicode: 0xE000,
      verbose: true,
      normalize: true,
      sort: false
    });
    const dest = path.join(__dirname, '..', 'theme', 'vscode-10.woff')
    fs.writeFileSync(dest, result.woff, 'binary');
    console.log(`Font created at ${dest}`);
  } catch (e) {
    console.error('Font creation failed.', e);
  }
}

generateFont();


