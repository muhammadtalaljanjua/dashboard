import "./App.css";
import Header from "./components/header/header.component";
import MainContent from "./components/main-content/main-content.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
