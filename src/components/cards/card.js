import React from 'react';

export default function Card() {
  return (
    <div className="flex justify-center ">
      <div className="rounded-xl shadow-lg max-w-sm relative">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-xl saturate-50" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
        </a>
        <div className="absolute bottom-0 px-5">
          <h5 className="text-white text-xl font-medium mb-2">Card title</h5>
          <p className="text-white text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}
