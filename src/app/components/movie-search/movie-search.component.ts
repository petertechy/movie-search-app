import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  query: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.query.trim()) {
      this.movieService.searchMovies(this.query).subscribe((data) => {
        this.movies = data.Search || [];
      });
    }
  }

  addToFavorites(movie: any) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Movie added to favorites!');
  }
}
