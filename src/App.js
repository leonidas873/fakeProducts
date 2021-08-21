import "./App.css";
import Header from "./components/header/Header";
import DrawerSidebar from "./components/sidebar/DrawerSidebar";
import Sidebar from "./components/sidebar/Sidebar";
import MainNav from "./components/mainNav/MainNav";
import DrawerMainNav from "./components/mainNav/DrawerMainNav";
import Catalog from "./components/catalog/Catalog";
import { Switch, Route } from "react-router-dom";


function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <Sidebar />
          <DrawerSidebar />
          <MainNav />
          <DrawerMainNav />
          <Catalog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
