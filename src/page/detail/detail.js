import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/cards/card';
import thumbnail1 from '../../img/thumbnail1.jpg';

export default function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [moviesampingan, setMoviesampingan] = useState({});
  const [genre, setGenres] = useState([]);
  const [productCompanies, setProductCompanies] = useState([]);

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
  }, []);

  const IMG = 'https://image.tmdb.org/t/p';
  return (
    <>
      <div className="App-body">
        <div class="grid grid-cols-1 gap-4">
          <div class="">
            <div className="header ">
              <h1 className="">{movies.title}</h1>
              <div className="text-sm text-gray-500">What are you gonna watch today?</div>
              <div className="rounded-xl max-h-96 overflow-hidden shadow-lg my-3">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
                <img className="w-full" src={thumbnail1} alt="gambar" />
                {/* <img className="rounded-xl saturate-50"/> */}
              </div>
            </div>
            <div className="body my-5"></div>
            <div class="grid sm:grid-cols-4 grid-cols-1 gap-4">
              <div class="detail-card ">
                <div className=" flex justify-center">
                  <div className="rounded-xl shadow-lg max-w-sm relative">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-xl saturate-50 h-[25rem]" src={`${IMG}/w500${movies.poster_path}`} alt={movies.title} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="detail col-span-2">
                <div>
                  <div className="text-3xl font-bold text-gray-200">{movies.original_title}</div>
                </div>
                <div>
                  <div className="text-base text-gray-200 my-3">
                    Release Date:
                    <br />
                    <span className="text-base text-gray-400"> {movies.release_date}</span>
                  </div>
                </div>
                <div>
                  <div className="text-base text-gray-200 mb-3">
                    Language:
                    <br />
                    <span className="text-base text-gray-400"> {movies.original_language}</span>
                  </div>
                </div>
                <div>
                  <div className="text-base text-gray-200 mb-3">
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
                  <div className="text-base text-gray-200 mb-3">
                    Duration:
                    <br />
                    <span className="text-base text-gray-400"> {movies.runtime}</span>
                  </div>
                </div>
                <div>
                  <div className="text-base text-gray-200 mb-3">
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
            {/* <div class="sm:col-span-3 col-span-0  synopsis"> */}{' '}
            <div className="synopsis my-5 text-2xl text-gray-200">
              <div className="font-semibold">Synopsis</div>
              <div className="text-base text-gray-400 text-justify my-5">{movies.overview}</div>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
