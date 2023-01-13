import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/cards/card';
import YouTube from 'react-youtube';
import Modall from '../../components/modal/modal';

export default function Detail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const [movies, setMovies] = useState({});
  const [trailer, setTrailer] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [similar, setSimilar] = useState([]);
  const [showSimilar, setShowSimilar] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [genre, setGenres] = useState([]);
  const [productCompanies, setProductCompanies] = useState([]);

  const getSimilarMovies = async () => {
    await axios
      .get(
        `
https://api.themoviedb.org/3/movie/${id}/similar?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`
      )
      .then((response) => {
        // console.log('similar', response.data.results);
        setSimilar(response.data.results.slice(0, 5));
      });
  };

  const getVideos = async () => {
    await axios
      .get(
        `
https://api.themoviedb.org/3/movie/${id}/videos?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`
      )
      .then((response) => {
        console.log('videos', response.data.results);

        if (response.data && response.data.results) {
          const trailer = response.data.results.find((vid) => vid.name === 'Official Trailer');
          setTrailer(trailer ? trailer : response.data.results[0]);
          console.log('trailer', trailer);
        }
      });
  };

  const getReviews = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`).then((response) => {
      // console.log('reviews', response.data.results);
      setReviews(response.data.results);
    });
  };

  const getdetailMovies = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=e7d0e414a1796f4d06152e01bc2c7c3b`)
      .then((response) => {
        // console.log('data =>', response.data);
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
    setPlaying(false);
    getReviews(id);
  }, []);

  const refreshLink = () => {
    window.location.reload();
  };

  function openmodalandyt() {
    setPlaying(true);
    setShowModal(true);
  }

  const IMG = 'https://image.tmdb.org/t/p';
  return (
    <>
      {/* desing2 */}

      <div className="relative">
        <img className="sm:block hidden my-5 bgimgdetail absolute w-full h-[90%] brightness-50 contrast-75" src={`${IMG}/w500${movies.backdrop_path}`} />
        <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 py-[3rem] mx-5 sm:mx-[5rem] relative">
          <div class="detail-card ">
            <div className=" flex justify-center">
              {/*  */}
              <div class="image-container rounded-xl shadow-lg max-w-sm relative" onClick={openmodalandyt}>
                <img className="imgmodalkeluar rounded-xl saturate-50 h-[25rem]" src={`${IMG}/w500${movies.poster_path}`} alt="your-image-description" />
                <div class="image-text text-2xl font-bold text-white ">CLICK TO SEE TRAILER</div>
              </div>
              {/*  */}
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
                <span className="text-base text-gray-400"> {movies.runtime} hr</span>
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
        {/* synposis */}
        <div className="synopsis my-5 text-2xl text-gray-200">
          <div className="font-semibold">Synopsis</div>
          <div className="text-base text-gray-400 text-justify my-5">{movies.overview}</div>
        </div>
        {/* synposis */}

        {/* reviews */}
        {showReviews ? (
          <div className="reviews mb-5 text-2xl text-gray-200">
            <a className="font-semibold" onClick={() => setShowReviews(false)}>
              Reviews:{' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWtJREFUSEu9ldFRg0AQhv/tArjMqCM8GyuwhViB6cCkErECtQKxA0sgz94DmQnQhevAcMwBB3eQibxy+397e7v/Ei780YX1YQWcSrkl4AFEazCv64SIUjCnIE6EF31NJTkKKAq5YcILgGvLLTNi7IMgTEznjIBTIWMiPM8pHxPHKy/a92MGgCXiSpQZr6sg3OmQDqApy+eczAcZMx71cnUAeSkzAFdjAAI+foFvAt4mksiEH96o/y2g6ZbRwEo88MNtFWg9q92iBRSlfGfgaaQTWnH1fwqiJ9MC8uInBdGdoQsG4lYIUSq82/t6ZNThvJQ8R9wGEX5Ya08C+kAVZEpm7Ky1RHqgM4D5IIKothWnR1YQV4DxkV2GzBlgatMqS9ugOQKOwg9bg/xfq6indIGTOptd29sLICYn7XRRv4+bR4+nzK+JORJjN2vh6LAKBMKGq3WprIT5QPXaRDImPHDTc3bAVKx16Z8L/gPT67UZbsj/kQAAAABJRU5ErkJggg==" />
            </a>
            {reviews.map((item) => {
              return (
                <>
                  <div className="py-2 px-2 bg-slate-500 rounded-md my-5">
                    <div className="text-gray-200 ">
                      Author: <span className="font-bold">{item.author}</span>
                    </div>
                    <div className="text-sm text-slate-200 text-justify my-5">
                      <div> {item.content}</div>
                    </div>
                    <div className="text-gray-300 text-sm">
                      Published at: <span className="">{item.created_at}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <a className="reviews mb-5 text-2xl text-gray-200" onClick={() => setShowReviews(true)}>
            <div className="font-semibold inline-block">
              Reviews:
              <img
                className=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWpJREFUSEu9ld9Rg0AQxr/tArjMqOPxbKzAFmIFxgpMKhErMFYglmAH5Nl7IDMByliHG0AIdwfkj7xyt7/dvW+/JVz4owvHxyBgX6glAQ8gmoN5rhMiSsCcgDgWXvjlStIKyHO1YMIrgOuBKlNirINAxqZzRsA+VxERXqa0j4mjmReuD+/0AMcEr4My420WyFUb0gFUbfmcknkvY8Zju10dQFaoFMCVDSB8qc9nhWJHEqnw5U39vwFUanl3ZT8SAGpV0QDyQm0YeDoLAPgIfLnUiq4DZvlPAqK7cwDKORHe7X0X4O6r5o5tUfvsXwVmwEb48tlVle3t6mTGtMgKsQqDeSuCUNvK2EfuQVyqI9MjjxiyBjIkaaNMqwFyDhqAUsrfBLjmZSd82Rjk/1pFWcVFza6W4zEQk5N2VHSo9erRI5f5VXd2xFhNWjhtWAkCYcHluqythHlLem0itgXuuekpO8B1d3Dpnwr+BSyltRkO7UW/AAAAAElFTkSuQmCC"
              />
            </div>
          </a>
        )}
        {/* reviews */}

        {/* similar */}
        {showSimilar ? (
          <div className="text-2xl text-gray-200">
            <a className="font-semibold " onClick={() => setShowSimilar(false)}>
              Similar:{' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWtJREFUSEu9ldFRg0AQhv/tArjMqCM8GyuwhViB6cCkErECtQKxA0sgz94DmQnQhevAcMwBB3eQibxy+397e7v/Ei780YX1YQWcSrkl4AFEazCv64SIUjCnIE6EF31NJTkKKAq5YcILgGvLLTNi7IMgTEznjIBTIWMiPM8pHxPHKy/a92MGgCXiSpQZr6sg3OmQDqApy+eczAcZMx71cnUAeSkzAFdjAAI+foFvAt4mksiEH96o/y2g6ZbRwEo88MNtFWg9q92iBRSlfGfgaaQTWnH1fwqiJ9MC8uInBdGdoQsG4lYIUSq82/t6ZNThvJQ8R9wGEX5Ya08C+kAVZEpm7Ky1RHqgM4D5IIKothWnR1YQV4DxkV2GzBlgatMqS9ugOQKOwg9bg/xfq6indIGTOptd29sLICYn7XRRv4+bR4+nzK+JORJjN2vh6LAKBMKGq3WprIT5QPXaRDImPHDTc3bAVKx16Z8L/gPT67UZbsj/kQAAAABJRU5ErkJggg==" />
            </a>

            <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 my-5">
              {similar.map((item) => {
                return (
                  <div onClick={refreshLink}>
                    <Card original_title={item.original_title} overview={item.overview} poster_path={item.poster_path} title={item.title} key={item.id} id={item.id} />
                  </div>
                );
              })}
            </div>
            <button onClick={() => setShowSimilar(false)}>Close Similar</button>
          </div>
        ) : (
          <a className="reviews mb-5 text-2xl text-gray-200" onClick={() => setShowSimilar(true)}>
            <div className="font-semibold inline-block">
              Reviews:
              <img
                className=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWpJREFUSEu9ld9Rg0AQxr/tArjMqOPxbKzAFmIFxgpMKhErMFYglmAH5Nl7IDMByliHG0AIdwfkj7xyt7/dvW+/JVz4owvHxyBgX6glAQ8gmoN5rhMiSsCcgDgWXvjlStIKyHO1YMIrgOuBKlNirINAxqZzRsA+VxERXqa0j4mjmReuD+/0AMcEr4My420WyFUb0gFUbfmcknkvY8Zju10dQFaoFMCVDSB8qc9nhWJHEqnw5U39vwFUanl3ZT8SAGpV0QDyQm0YeDoLAPgIfLnUiq4DZvlPAqK7cwDKORHe7X0X4O6r5o5tUfvsXwVmwEb48tlVle3t6mTGtMgKsQqDeSuCUNvK2EfuQVyqI9MjjxiyBjIkaaNMqwFyDhqAUsrfBLjmZSd82Rjk/1pFWcVFza6W4zEQk5N2VHSo9erRI5f5VXd2xFhNWjhtWAkCYcHluqythHlLem0itgXuuekpO8B1d3Dpnwr+BSyltRkO7UW/AAAAAElFTkSuQmCC"
              />
            </div>
          </a>
        )}
        {/* similar */}
      </div>
      {/* end of  desing2 */}

      <Modall showModal={showModal} setShowModal={setShowModal} trailer={trailer.key} />
    </>
  );
}
