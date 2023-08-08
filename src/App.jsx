import { Routes, Route } from "react-router-dom";
import Header from "./components/common/navbar";
import Footer from "./components/common/footer/";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
