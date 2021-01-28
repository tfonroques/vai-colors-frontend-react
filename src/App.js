import { useEffect, useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import auth from "./services/AuthService";
import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Gallery from "./components/common/Gallery";
import PaintingDetails from "./components/common/PaintingDetails";
import AdminManage from "./components/admin/AdminManage";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import CarouselComponent from "./components/CarouselComponent";
import "react-image-gallery/styles/css/image-gallery.css";
import "./components/paintingsContext.js";
import PaintingsContext from "./components/paintingsContext.js";
import AboutContext from "./components/aboutContext";
import admin from "./services/AdminService";
import About from "./components/About";

function App(props) {
  const [user, setUser] = useState(null);

  const [paintings, setPaintings] = useState([]);
  const [about, setAbout] = useState(null);

  async function getPaintings() {
    try {
      const { paintings } = await admin.getPaintings();
      setPaintings(paintings);
      const { about } = await admin.getAbout();
      setAbout(about);
    } catch (error) {
      error.response && console.log(error.response.data);
    }
  }

  library.add(fab, far, fas);

  useEffect(() => {
    const user = auth.getCurrentUser();
    getPaintings();
    console.log(paintings);
    setUser(user);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar user={user} />
        <div className="content">
          <PaintingsContext.Provider value={{ paintings, setPaintings }}>
            <Switch>
              <AboutContext.Provider value={{ about, setAbout }}>
                <Route path="/about" component={About} />
                <Route path="/admin" component={AdminManage} />
              </AboutContext.Provider>
              <Route path="/signout/:name" component={SignOut} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signout" component={SignOut} />
              <Route path="/signup" component={SignUp} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/paintings/:id" component={PaintingDetails} />
              <Route path="/carousel" component={CarouselComponent} />

              <Route
                path="/admin"
                render={() => {
                  if (!user) return <Redirect to="/signin" />;
                  return <AdminManage {...props} />;
                }}
              />
              <Route path="/" component={Gallery} />
              <Redirect to="/not-found" />
            </Switch>
          </PaintingsContext.Provider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
