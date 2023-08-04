import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: string) =>
  useData<Game>(selectedGenre ? "/games?genres=" + selectedGenre : "/games", [
    selectedGenre,
  ]);

export default useGames;
