import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Dashboard,
  Footer,
  Home,
  Projects,
  Signin,
  Signup,
} from "./pages";
import { Header } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
