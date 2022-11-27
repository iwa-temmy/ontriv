import "./App.css";
import Router from "./Router";
import { NotificationContainer } from "react-notifications";
import "./assets/css/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import "react-notifications/lib/notifications.css";
import "./assets/css/tailwind.css";

function App() {
  return (
    <>
      <Router />
      <NotificationContainer />
    </>
  );
}

export default App;
