import { useState } from "react";
import petStore from "../petStore";
import PetUpdateModal from "./PetUpdateModal";

export default function PetItem(props) {
  const pet = props.pet;

  const [isOpen, setIsOpen] = useState(false);
  const handleShow = () => setIsOpen(!isOpen);

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <PetUpdateModal
            isOpen={isOpen}
            handleShow={handleShow}
            pet={pet}
          />
        </div>
      </div>
    </div>
  );
}
