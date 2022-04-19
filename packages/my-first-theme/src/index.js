// File: /packages/my-first-theme/src/index.js

import Root from "./components";
import link from "@frontity/html2react/processors/link";

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
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};

export default myFirstTheme;
