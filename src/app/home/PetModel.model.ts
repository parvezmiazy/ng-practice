export class PetModel {
  id: number;
  type: string;
  name: string;
  age: string; // NOTE: This is a String because it is an open-ended form value.
  isPastOn: boolean;
}
