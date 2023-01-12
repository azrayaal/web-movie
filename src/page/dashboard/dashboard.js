import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Card from '../../components/cards/card';
import Pagee from '../../components/pagination/pagination';
import thumbnail1 from '../../img/thumbnail1.jpg';

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=e7d0e414a1796f4d06152e01bc2c7c3b&page=${page}`)
      .then((response) => {
        console.log('data =>', response.data.results);
        setMovies(response.data.results);
        setNumOfPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8861682de098ff4d4464beac670c09cd&query=${searchValue}`);
    setMovies(data.results);
  };

  useEffect(() => {
    if (searchValue === '') {
      getMovieRequest();
    } else {
      fetchSearch();
    }
  }, [searchValue, page]);

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
          <div className="flex mb-6">
            <h1 className="">New Release</h1>
            {/* search */}
            <div class=" xl:w-96  ml-auto">
              <div class="input-group relative flex flex-wrap items-stretch w-full ">
                <input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  type="text"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-500 bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
            </div>
            {/* search */}
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4">
            {movies.map((item) => {
              return <Card original_title={item.original_title} overview={item.overview} poster_path={item.poster_path} title={item.title} key={item.id} id={item.id} />;
            })}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex my-12 place-content-center">
          <Pagee setPage={setPage} numOfPages={numOfPages} page={page} />
        </div>
        {/* Pagination */}
      </div>
    </>
  );
}

export default Dashboard;
