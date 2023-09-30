import {create} from 'zustand'
initialStarship
import axios, { AxiosResponse } from 'axios'
import { ApiResponse,StoreProps, } from '../interfaces/interfaces'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth'
import { initialStarship } from '../initialData'

export const useStarsStore = create<StoreProps>((set,get) => ({
  page: 1,
  starshipList:[],
  apiData: null,
  starshipItem: initialStarship,
  next:null,
  end:false,
  id:0,
  URL: 'https://swapi.dev/api/starships/?page=',
  user:null,
  loading:true,
  email:'',
  password:'',
  error:null,
  films: [],
  pilots:[],
  
  
  
  
  

  setUser: (value) => set({user:value}),
  setEmail: (value) => set({email:value}),
  setPassword: (value) => set({password:value}),
  setError:(value) => set({error:value}),
  setFilms:(value:string[]) => set({films:value}),
  setPilots:(value:string[]) => set({pilots:value}),
  setStarshipItem:(value) => set({starshipItem:value}),
  setStarshipList: (value) => set({starshipList:value}),
  setPage: (value) => set({page:value}),
  setNext:(value) => set({next:value}),


  loadApiData: async() => {
    const URL = get().URL + get().page
    try{
      const response: AxiosResponse<ApiResponse> = await axios.get(URL)
      const data = response.data
      return data
    }catch (error) {
      console.error("Error al cargar los datos desde la API:", error);
    }
  },

  refreshNext: async() => {
    const URL = get().URL + get().page
    try{
      const response: AxiosResponse<ApiResponse> = await axios.get(URL)
      const next = response.data.next
      return next
    }catch (error) {
      console.error('Error: ', error)
    }
  },

  findIndexStarship: (url) => {
    const starshipList = get().starshipList
    const indexStarship = starshipList.findIndex((item) => item.url === url);
    return indexStarship;
  },

  changeImage: (item) => {
    if (item) {
      const findIndexStarship = get().findIndexStarship
      const indexStarship = findIndexStarship(item.url);
      const newStarship = { ...item };
      if (indexStarship !== -1) {
        newStarship.url = `https://starwars-visualguide.com/assets/img/starships/${
          indexStarship + 2
        }.jpg`;
      } else {
        newStarship.url = "../../public/star-wars.png";
      }
      set({starshipItem:newStarship})
    }
  },

  loadMoreData: async () => {
    const URL = get().URL + get().page
    const refreshNext = get().refreshNext
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(URL);
      const data = response.data;
      const next = await refreshNext();
      const starshipList = get().starshipList
      if (data.results.length > 0) {
        set({starshipList:[...starshipList, ...data.results]})
      }

      if (next === null) {
       set({end:true})
      }

    } catch (error) {
      console.error("Error al cargar los datos desde la API:", error);
    }
  },

  getNumItem: (url: string) => {
    const num = url.replace(/\D/g, "");
    return num;
  },

  changeUrlPilots: () => {
    const starshipItem = get().starshipItem
    const getNumItem = get().getNumItem
    const newPilots = starshipItem.pilots.map((pilot) => {
      const numPilot = getNumItem(pilot);
      return `https://starwars-visualguide.com/assets/img/characters/${numPilot}.jpg`;
    });
    return newPilots
  },

  changeUrlFilms: () => {
    const starshipItem = get().starshipItem
    const getNumItem = get().getNumItem
    const newFilms = starshipItem.films.map((film) => {
      const numFilm = getNumItem(film)
      return `https://starwars-visualguide.com/assets/img/films/${numFilm}.jpg`
    })
    return newFilms
  },

  createUserWithPassword: async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log(userCredential.user)
      })
      .catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
          set({error: 'Este email ya está registrado'})
        }
      });
  },

  login: async (email:string, password: string) => {
    await signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      set({user:userCredential.user})
    })
    .catch((error) => {
      if(error.code === 'auth/invalid-login-credentials'){
        set({error: 'El correo o la contraseña no son validos'})
      }

    })
  },

  logout: async () => {
    await signOut(auth)
    set({loading: false})
  },

  unSuscribe: onAuthStateChanged(auth, currentUser => {
    set({user:currentUser})
    set({loading:false})
  })




}))