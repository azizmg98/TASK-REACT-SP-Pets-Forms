import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };

  // in constructor methods dont need a const
  addPet = (pet) => {
    pet.id = this.pets[this.pets.length - 1].id;
    this.pets.push(pet);
  };

  updatePet = (newPet) => {
    this.pets = this.pets.map((pet) => (pet.id === newPet.id ? newPet : pet));
  };
}

const petStore = new PetStore();
export default petStore;
