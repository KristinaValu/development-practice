type Movie = {
  title: string;
  releaseYear: number;
  rating: number;
};
const movies: Movie[] = [
  { title: "The Whale", releaseYear: 2023, rating: 4.7 },
  { title: "The Shawshank Redemptio", releaseYear: 1994, rating: 4.9 },
  { title: "Me time3", releaseYear: 2022, rating: 2.6 },
  { title: "The Green Mile", releaseYear: 1999, rating: 4.8 },
  { title: "Me time2", releaseYear: 2022, rating: 2.7 },
  { title: "Me time4", releaseYear: 2022, rating: 1.9 },
  { title: "Me time1", releaseYear: 2022, rating: 3.1 },
];
function filmSort(movies: Movie[]): Movie[] {
  const moviesList = movies.sort(
    (a, b) => a.releaseYear - b.releaseYear || b.rating - a.rating
  );
  return moviesList;
}
console.log(filmSort(movies));
