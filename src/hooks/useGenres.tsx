import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

// function useGenres() {
//   return useData<Genre>("/genres");
// } this can be written as below also

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
