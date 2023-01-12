import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [genre, setGenres] = useState([]);
  const [productCompanies, setProductCompanies] = useState([]);

  const getSimilarMovies = async () => {
    await axios
      .get(
        `
https://api.themoviedb.org/3/movie/${id}/similar?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`
      )
      .then((response) => {
        console.log('similar', response.data.results);
      });
  };

  const getVideos = async () => {
    await axios
      .get(
        `
https://api.themoviedb.org/3/movie/${id}/videos?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`
      )
      .then((response) => {
        console.log('videos', response);
      });
  };

  const getReviews = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`).then((response) => {
      console.log('reviews', response);
    });
  };

  const getdetailMovies = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`)
      .then((response) => {
        console.log('data =>', response.data);
        setMovies(response.data);
        setGenres(response.data.genres);
        setProductCompanies(response.data.production_companies);
      })
      .catch((error) => {
        console.log('error nih', error);
      });
  };

  useEffect((id) => {
    getdetailMovies(id);
    getSimilarMovies(id);
    getVideos(id);
    getReviews(id);
  }, []);

  const IMG = 'https://image.tmdb.org/t/p';
  return (
    <>
      {/* desing2 */}

      <div className="relative">
        <img className="sm:block hidden my-5 bgimgdetail absolute w-full h-[90%] brightness-50 contrast-75" src={`${IMG}/w500${movies.backdrop_path}`} />
        <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 py-[3rem] mx-5 sm:mx-[5rem] z-20 relative">
          <div class="detail-card ">
            <div className=" flex justify-center">
              <div className="rounded-xl shadow-lg max-w-sm ">
                <img className="rounded-xl saturate-50 h-[25rem]" src={`${IMG}/w500${movies.poster_path}`} alt={movies.title} />
              </div>
            </div>
          </div>
          <div class="detail col-span-2">
            <div>
              <div className="text-3xl font-bold text-white">{movies.original_title}</div>
            </div>
            <div>
              <div className="text-base text-white my-3">
                Release Date:
                <br />
                <span className="text-base text-gray-400"> {movies.release_date}</span>
              </div>
            </div>
            <div>
              <div className="text-base text-white mb-3">
                Language:
                <br />
                <span className="text-base text-gray-400"> {movies.original_language}</span>
              </div>
            </div>
            <div>
              <div className="text-base text-white mb-3">
                Studio:
                <br />
                {productCompanies.map((item) => {
                  return (
                    <span className="text-base text-gray-400" key={id}>
                      {item.name}
                      {', '}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-base text-white mb-3">
                Duration:
                <br />
                <span className="text-base text-gray-400"> {movies.runtime}</span>
              </div>
            </div>
            <div>
              <div className="text-base text-white mb-3">
                Genres:
                <br />
                {genre.map((item) => {
                  return (
                    <span className="text-base text-gray-400" key={id}>
                      {item.name}
                      {', '}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="App-body">
        <div className="synopsis my-5 text-2xl text-gray-200">
          <div className="font-semibold">Synopsis</div>
          <div className="text-base text-gray-400 text-justify my-5">{movies.overview}</div>
        </div>
        <div className="synopsis my-5 text-2xl text-gray-200">
          <div className="font-semibold">Trailer: </div>
          <div className="text-base text-gray-400 text-justify my-5">{movies.overview}</div>
        </div>
      </div>
      {/* end of  desing2 */}
    </>
  );
}
