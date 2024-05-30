
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Main.css";
import { store } from "./Store/Store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
