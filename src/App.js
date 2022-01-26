import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap-5.0.0-beta2.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/main.css';
import './assets/css/tiny-slider.css';
import PetsList from './Components/PetsList';
import petStore from './petStore';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import PetCreateModal from './Components/PetCreateModal'
import PetUpdateModal from './Components/PetUpdateModal';

function App() {
  const pets = petStore.pets;

  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  return (
    <div className="App">
      <PetCreateModal isOpen={isOpen} handleClose={handleClose} />
      <PetUpdateModal isOpen={isOpen} handleClose={handleClose} />
      <Button variant="primary" onClick={handleShow}>
          Add a pet
      </Button>
      <PetsList pets={pets} />
    </div>
  );
}

export default App;