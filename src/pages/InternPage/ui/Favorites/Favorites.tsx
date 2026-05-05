import { Carousel } from "primereact/carousel";
import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useToTopPage } from "../../../../shared/hooks/useToTopPage";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { Internship } from "../../../InternshipsPage/ui/Internship/Internship";
import { FavoritesContext } from "../../../../app/context/favoritesContext/favoritesContext";
import { GET_FAVORITES_INTERNSHIPS } from "../../../../app/graphql/queries/internshipApi";
import "./Favorites.css";

interface Props {
  internId: string;
}

export const Favorites = (props: Props) => {
  const { internId } = props;

  useToTopPage();

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const { data } = useQuery(GET_FAVORITES_INTERNSHIPS, {
    variables: {
      internId: internId,
    },
  });

  useEffect(() => {
    if (data?.getFavoritesInternships) {
      setFavorites(data.getFavoritesInternships);
    }
  }, [data, setFavorites]);

  const itemTemplate = (item: Internships) => (
    <Internship key={item.id} {...item} />
  );

  return (
    <div className="favorites">
      <p className="favorites__title"> Избранные стажировки</p>

      <Carousel
        value={favorites}
        numVisible={2}
        numScroll={1}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};
