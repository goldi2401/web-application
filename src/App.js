import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./screens/landingPage/LandingPage";
import MyNotes from "./screens/myNotes/MyNotes";
import SingleNote from "./screens/singleNote/SingleNote";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import CreateNote from "./screens/singleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/profileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />;
        <Route path="/profile" component={ProfileScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;