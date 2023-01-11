import '../../App.css';
import thumbnail1 from '../../img/thumbnail1.jpg';
import Card from '../../components/cards/card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=e7d0e414a1796f4d06152e01bc2c7c3b&page=1`)
      .then((response) => {
        console.log('data =>', response.data.results);
        setMovies(response.data.results);
        // setNumOfPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <div className="App-body">
        <div className="header ">
          <h1 className="">Explore</h1>
          <div className="text-sm text-gray-500">What are you gonna watch today?</div>
          <div className="rounded-xl max-h-96 overflow-hidden shadow-lg my-3">
            <img className="w-full" src={thumbnail1} alt="gambar" />
          </div>
        </div>
        <div className="body">
          <h1 className="my-5">New Release</h1>
          <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4">
            {movies.map((item) => {
              return <Card original_title={item.original_title} overview={item.overview} poster_path={item.poster_path} title={item.title} key={item.id} id={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
