import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  CreatePost,
  Dashboard,
  Footer,
  Header,
  Home,
  OnlyAdminPrivateRoute,
  PostPage,
  PrivateRoute,
  Projects,
  Signin,
  Signup,
  ScrollToTop,
  UpdatePost,
  Search,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/post/:postSlug" element={<PostPage />} />

        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          /
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
