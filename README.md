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
  - `commithash: ec48059321ef9a8b99ba4af846f6dc4a97c58255`


  - **Create getRadioByName function**
    - `commithash: 81de25965dcd0eeb8ff3adf1943b577d201a426d`

  - **Improving Search radio function**
    - Adjust eslint rule to permite use '_' as unused variable
    - Adjust params on getRadioByName action
    - Fix layout shift on leftSide
    - Fix layout shift on radiosList
    - Create useRadioSearch hook to handle search on search component
    - Create new state to handle result of the search values
    - `commithash: 946c4f713cec1ae4080f2b4f505a0a255d38d3f0`

  - **Improving useRadioSearch hook**
    - Adjust useRadioSearch by creating a new hook to split the responsibility and make the code more reusable
    - `commithash: 1ab518358a873041b88079bddc4cdb091de9bb08`

  - **Add pagination**
    - Add pagination to the `radiosList` component, improving the code by adding a custom hook to handle the logic of the radiosList component. Create a function to handle pagination in the context called `addRadioByOffset`, adjust the radio action to accept pagination, and add a new library called `react-infinite-scroll-component`.

    - `commithash: [commit_hash]`

  - **Add sonner toast feedback**
    - Add Sonner when a user favorites a station and when they unfavorite a station. Change the favorite station icons to improve UX. Add the new ShadCN component  `sonner`.

    - `commithash: [commit_hash]`


