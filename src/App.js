// import logo from "./logo.svg";
// import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "75°F";
  // const [activeModal, setActiveModal] = useState("");
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment">
        <label>
          Name
          <input
            type="text"
            name="name"
            minlenth="1"
            maxLength="30"
            placeholder="Name"
          />
        </label>
        <label>
          Image
          <input type="url" name="link" minlenth="1" placeholder="Image URL" />
        </label>
        <p>Select the weather type:</p>
        <div>
          <div>
            <input type="radio" id="hot" value="hot" />
            <label>Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" value="warm" />
            <label>Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" value="cold" />
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default App;
