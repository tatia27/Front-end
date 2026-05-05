import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Internships } from "../../../pages/InternshipsPage/ui/InternshipsPage/InternshipsPage";

interface IFavorites {
  favorites: Internships[];
  setFavorites: Dispatch<SetStateAction<Internships[]>>;
}

export const FavoritesContext = createContext<IFavorites>({
  favorites: [],
  setFavorites: () => {},
});
