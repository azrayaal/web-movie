import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/cards/card';
import YouTube from 'react-youtube';

export default function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [similar, setSimilar] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [reviews, setReviews] = useState([]);
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

        {/* video */}
        {playing ? (
          <>
            <YouTube
              videoId={trailer.key}
              className={'youtube amru'}
              containerClassName={'youtube-container amru'}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 0,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
            <button onClick={() => setPlaying(false)} className={'button close-video'}>
              Close
            </button>
          </>
        ) : (
          <div className="center-max-size">
            <div className="poster-content">
              {trailer ? (
                <button className={'button play-video'} onClick={() => setPlaying(true)} type="button">
                  Play Trailer
                </button>
              ) : (
                'Sorry, no trailer available'
              )}
            </div>
          </div>
        )}
        {/* video */}

        {/* reviews */}
        <div className="reviews mb-5 text-2xl text-gray-200">
          <div className="font-semibold">Reviews: </div>
          {reviews.map((item) => {
            return (
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
            );
          })}
        </div>
        {/* reviews */}

        {/* similar */}
        <div className="text-2xl text-gray-200">
          <div className="font-semibold mb-5">Similar: </div>
          <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4">
            {similar.map((item) => {
              return (
                <div onClick={refreshLink}>
                  <Card original_title={item.original_title} overview={item.overview} poster_path={item.poster_path} title={item.title} key={item.id} id={item.id} />
                </div>
              );
            })}
          </div>
        </div>
        {/* similar */}
      </div>
      {/* end of  desing2 */}
    </>
  );
}
