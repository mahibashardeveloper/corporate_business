
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";
import Service from "./components/pages/service";
import Team from "./components/pages/team";
import Faq from "./components/pages/faq";
import ServiceDetails from "./components/pages/ServiceDetails";
import TeamDetails from "./components/pages/team-details";
import PageNotFound from "./components/pages/page-not-found";
import BlogDetails from "./components/pages/blog-details";

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/blog" element={<Blog/>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}
export default App;
