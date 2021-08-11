// import logo from './logo.svg';
import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePicture from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Profile</h1>
      </header>
      <section className="mainSec">
        <FullName />
        <ProfilePicture />
        <Address />
      </section>
    </div>
  );
}

export default App;
