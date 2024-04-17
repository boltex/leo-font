# Font for LeoJS and LeoInteg

To add new icons to the GL Icons font follow the steps below:

- Add new SVG icons to the `leo-icons-thin` folder
- Append entries for the new icons to the end of the `leo-icons-thin/template/mapping.json` file
  - Entries should be in the format of `<icon-file-name-without-extension>: <increment-last-number>`
- Optimize and build the icons by running the following scripts from package.json:

  ```
  icons:svgo
  build:icons
  ```

**Resulting woff2 file will be in resources folder.**
