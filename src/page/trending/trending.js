import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../App.css';
import Card from '../../components/cards/card';
import Pagee from '../../components/pagination/pagination';

function Trending() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchValue, setSearchValue] = useState('');

  const fetchTrending = async () => {
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8861682de098ff4d4464beac670c09cd&page=${page}`).then((response) => {
      setMovies(response.data.results);
      setNumOfPages(response.data.total_pages);
      // console.log('data =>', response.data.results);
    });
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8861682de098ff4d4464beac670c09cd&query=${searchValue}`);
    setMovies(data.results);
    // setNumOfPages(data.data.total_pages);
  };

  useEffect(() => {
    if (searchValue === '') {
      fetchTrending();
    } else {
      fetchSearch();
    }
  }, [searchValue, page]);

  return (
    <>
      <div className="App-body">
        <div className="body">
          <div className="flex mb-6">
            <h1 className="">Trending!</h1>
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

export default Trending;
