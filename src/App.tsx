import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;