import React from "react";
import ReactDOM from "react-dom/client";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import { theme } from "./Theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // 2. Wrap ChakraProvider at the root of your app
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
