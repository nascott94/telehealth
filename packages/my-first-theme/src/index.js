// File: /packages/my-first-theme/src/index.js

import Root from "./components";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    teleheathTheme: Root,
  },
  state: {
    teleheathTheme: { isUrlVisible: false },
  },
  actions: {
    teleheathTheme: {
      toggleUrl: ({ state }) => {
        state.teleheathTheme.isUrlVisible = !state.teleheathTheme.isUrlVisible;
      },
    },
  },
};

export default myFirstTheme;
