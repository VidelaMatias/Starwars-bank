export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: any[];
    films: any[];
    transactions:any[]
    created: string;
    edited: string;
    id: string;
  }

  export interface User {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: any[];
  species: any[];
  vehicles: any[];
  starships: any[];
  created: string;
  edited: string;
  id: string;
}
export interface Transaction {
  id: string;
  user: number; // Assuming user reference by id
  amount: number;
  currency: string;
  date: string;
  status: string;
}