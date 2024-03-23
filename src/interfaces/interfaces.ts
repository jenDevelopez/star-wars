import { Unsubscribe } from "firebase/auth";


export interface StarshipDataType {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
}

export interface ApiResponse {
  results: StarshipDataType[];
  next: string | null;
}

export type ApiDataType = {
  results: StarshipDataType[];
  count: number;
  next?: string;
  previous?: string;
};

export type ProviderPropsType = {
  children: JSX.Element | JSX.Element[];
};

export interface UserType {
  id: number;
  name: string;
  password: string;
}

export interface UsersType {
  email: string;
  password: string;
}


export interface User {
  uid:string
  displayName:string | null
  phoneNumber:string | null
  email:string | null
}


export interface StoreProps {
  page: number
  starshipList:StarshipDataType[]
  apiData: ApiDataType | null
  starshipItem: StarshipDataType
  next:string | null
  end:boolean
  id:number
  URL:string
  user: User | UsersType | null
  loading:boolean
  email:string
  password:string
  error: string | null
  films:string[]
  pilots: string[]
  darkMode:boolean

  
  setUser: (value: User | UsersType) => void
  setEmail: (value:string) => void
  setPassword: (value:string) => void
  setError: (value:string) => void
  setFilms: (value: string[]) => void
  setPilots: (value: string[]) => void
  setStarshipItem: (value: StarshipDataType) => void
  setStarshipList:(value:StarshipDataType[]) => void
  setPage: (value: number) => void
  setNext: (value: string | null) => void
  setDarkMode:(value:boolean) => void



  loadApiData: () => Promise<ApiResponse | undefined>
  refreshNext: () => Promise<string | null | undefined>
  findIndexStarship: (url: string) => number
  changeImage: (item: StarshipDataType) => void
  loadMoreData: () => Promise<void>
  getNumItem: (url: string) => string
  changeUrlPilots: () => string[]
  changeUrlFilms: () => string[]
  createUserWithPassword: (email: string, password: string) => Promise<void> //antigua funcion singup
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  unSuscribe: Unsubscribe
}