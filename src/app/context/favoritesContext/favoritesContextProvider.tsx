import { useState, type ReactNode } from "react";
import type { Internships } from "../../../pages/InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { FavoritesContext } from "./favoritesContext";

interface IFavoritesContextProviderProps {
  children: ReactNode;
}

export function FavoritesContextProvider({
  children,
}: IFavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<Internships[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
