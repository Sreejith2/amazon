import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import Panel from "./components/Panel";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <Panel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
