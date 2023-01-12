import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { original_title, overview, poster_path, title, id } = props;

  const IMG = 'https://image.tmdb.org/t/p';
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex justify-center" key={id} id={id}>
        <div className="rounded-xl shadow-lg max-w-sm relative">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-xl saturate-50" src={`${IMG}/w500${poster_path}`} alt={title} />
          </a>
          <div className="absolute bottom-0 px-5">
            <h5 className="text-white text-xl font-medium mb-2">{original_title}</h5>
            {/* <p className="text-white text-base mb-4">{overview}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
