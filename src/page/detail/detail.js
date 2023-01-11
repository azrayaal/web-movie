import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/cards/card';
import thumbnail1 from '../../img/thumbnail1.jpg';

export default function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
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
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-3 ...">
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
            <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
              <div class="detail-card">
                <div className="flex justify-center ">
                  <div className="rounded-xl  shadow-lg max-w-sm relative">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-xl saturate-50 h-[25rem]" src={`${IMG}/w500${movies.poster_path}`} alt={movies.title} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="detail">
                <div>
                  <h5>Release Date:</h5>
                  <span className="text-sm text-gray-400">{movies.release_date}</span>
                </div>
                <div>
                  <h5>Language:</h5>
                  <span className="text-sm text-gray-400">{movies.original_language}</span>
                </div>
                <div>
                  <h5>Studio:</h5>
                  {productCompanies.map((item) => {
                    return (
                      <span className="text-sm text-gray-400" key={id}>
                        {item.name}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <h5>Duration:</h5>
                  <span className="text-sm text-gray-400">{movies.runtime} hr</span>
                </div>
                <div>
                  <h5>Genres:</h5>
                  {genre.map((item) => {
                    return (
                      <span className="text-sm text-gray-400" key={id}>
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div class="sm:col-span-3 col-span-0  synopsis">
                {' '}
                <div className="synopsis">
                  <div>Synopsis</div>
                  <div className="text-sm text-gray-200 text-justify">{movies.overview}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebarfitur">
            <h5 className="mb-8">Popular</h5>
            <div class="grid grid-cols-1 gap-4">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
