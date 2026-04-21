import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter.jsx";
import { ContextProvider } from "./MyContext.jsx";
import { Provider } from "react-redux";
import { store } from "../app/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  </Provider>,
);
