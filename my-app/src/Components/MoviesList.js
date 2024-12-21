import React, { useState } from "react";
import { moviesData } from "./Data";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";

const MoviesList = () => {
  const [ratingFilter, setRatingFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [movies, setMovies] = useState(moviesData); // Liste complète des films

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: 0,
  });

  // Nouvel état pour contrôler la visibilité du formulaire
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  // Fonction pour ajouter un film
  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterUrl &&
      newMovie.rate
    ) {
      setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
      setFilteredMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
      setNewMovie({ title: "", description: "", posterUrl: "", rate: 0 }); // Réinitialise les champs
      setShowAddMovieForm(false); // Ferme le formulaire après ajout
    } else {
      alert("Please fill in all the fields before adding a movie.");
    }
  };

  // Fonction pour filtrer les films
  const handleSearch = () => {
    let filtered = movies;

    if (ratingFilter > 0) {
      filtered = filtered.filter((movie) => movie.rate >= ratingFilter);
    }

    if (nameFilter !== "") {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  return (
    <div>
      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by movie name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={ratingFilter}
          isHalf={false}
          onChange={(newRating) => setRatingFilter(newRating)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Bouton pour afficher le formulaire d'ajout */}
      <button onClick={() => setShowAddMovieForm(!showAddMovieForm)}>
        {showAddMovieForm ? "Close Form" : "Add Movie"}
      </button>

      {/* Formulaire pour ajouter un nouveau film */}
      {showAddMovieForm && (
        <div className="add-movie-form">
          <h3>Add a New Movie</h3>
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          ></textarea>
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterUrl}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterUrl: e.target.value })
            }
          />
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={newMovie.rate}
            isHalf={false}
            onChange={(newRating) =>
              setNewMovie({ ...newMovie, rate: newRating })
            }
          />
          <button onClick={handleAddMovie}>Submit</button>
        </div>
      )}

      {/* Liste des films filtrés */}
      <div className="movies-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
        {filteredMovies.length === 0 && (
          <p>No movies found with the current filters.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
