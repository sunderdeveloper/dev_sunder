import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Shimmer from "./components/Shimmer";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="w-12/12 h-full bg-linear-to-tr from-[#0D1225] to-[#411D30] pb-18">
      <Header />
      <div className="flex lg:flex-row items-start w-11/12 mx-auto gap-8 flex-col">
        <Profile />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
