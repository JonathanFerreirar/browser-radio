## Commit History

### July 18

- **Create repository**
  - Using a template with basic configs made by me.
  - `commithash: 0626e6541ef1e649a2103bd1c956fe3bfb003597`

- **Basic configurations**
  - Adjust logo, favicon, title, description, and CSS variables.
  - `commithash: 91453c2b2b370e39d9e37a6060568d22bcce5705`

- **Add PWA support**
  - Configure the project to support PWA.
  - `commithash: 38f7c1a37b7fe996dc57de0ead96ed9faf61c310`

- **Add react-icons library**
  - Prepare icons for use in the project.
  - `commithash: 6a80d3b5d8ebae42e9c70c0df210b293edb0bd0c`

- **Create basic components**
  - Start creating the left side layout and basic components like search and station.
  - Add two ShadCN components: button and input.
  - `commithash: 4ad84a32e7c252e434309b64e5b2ae4480ae18ca`

- **Create radio stations service and context**
  - Create a service to get radio stations, set up the base API and add an `.env` file.
  - Create radio list on the left side and create favorites context together with radios context to handle this throughout the application.
  - Add new ShadCN component: skeleton.
  - Create radio types.
  - `commithash: d4ba266620708743e91dabf6a7254539326c6c7f`

- **Create AudioPlayer component**
  - `commithash: f2d8f70426b156a9b1877058775e736db8c52209`

- **Create ErrorBoundary component**
  - Improve AudioPlayer to handle errors.
  - `commithash: 8edacd37943f7b2f24648f98a562fa3673b87492`

### July 19

- **Create favorite station layout**
  - Create component to render it.
  - Adjust audio player to allow only one audio at a time.
  - Create `editStation` component to edit a station's display name and tags.
  - Create new context, `isPlaying`, used to allow only one audio with a play icon at a time.
  - Add 3 new ShadCN components: form, label, and sheet.
  - `commithash: 1e3c25b0c314f79fac995a6af101ab0fabd0629a`

- **Adjust code style**
  - Fix build errors caused by ESLint in label, sheet, and skeleton components.
  - `commithash: 5d67cc694af643ffc6e269fe30d92a38101ada38`

### July 20

- **Improve HLS audio handling**
  - Adjust `playAudio` to handle `m3u8` audio type better in production environment.
  - Create `searchRadio` component and its functionality.
  - Implement search that sets the search value in the URL.
  - Add new package `useDebounce` to handle search values better.
  - Adjust readme
  - `commithash: [commit hash]`

---