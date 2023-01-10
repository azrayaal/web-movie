import React from 'react';
import Card from '../../components/cards/card';
import thumbnail1 from '../../img/thumbnail1.jpg';

export default function Detail() {
  return (
    <>
      <div className="App-body">
        <div className="header ">
          <h1 className="">Nama Film</h1>
          <div className="text-sm text-gray-500">What are you gonna watch today?</div>
          <div className="rounded-xl max-h-96 overflow-hidden shadow-lg my-3">
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
            <img className="w-full" src={thumbnail1} alt="gambar" />
          </div>
        </div>
        <div className="body my-5">
          <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div class="detail-card">
              <div className="flex justify-center ">
                <div className="rounded-xl  shadow-lg max-w-sm relative">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-xl saturate-50 h-[25rem]" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="detail">
              <div>
                <h5>Type:</h5>
                <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</span>
              </div>
              <div>
                <h5>Status:</h5>
                <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</span>
              </div>
              <div>
                <h5>Studio:</h5>
                <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</span>
              </div>
              <div>
                <h5>Duration:</h5>
                <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</span>
              </div>
              <div>
                <h5>Genre:</h5>
                <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
            <div class="sm:col-span-2 col-span-0  synopsis">
              {' '}
              <div className="synopsis">
                <div>Synopsis</div>
                <div className="text-sm text-gray-200 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, voluptatibus corrupti doloremque eligendi quis quibusdam consectetur, sit esse eius cum perferendis. Incidunt, sunt. Praesentium excepturi recusandae modi
                  ipsum earum. Vel nostrum rerum quidem reprehenderit veniam earum aliquam eos, est quo necessitatibus odit ratione libero harum unde odio illum, porro voluptates dicta fuga pariatur. Sunt ratione alias enim culpa recusandae
                  molestiae atque doloremque praesentium! Aspernatur quasi repellendus aperiam? Molestias, quos inventore! Eum facilis eos obcaecati voluptates quisquam? Natus, impedit, ipsum a ad animi, porro vitae dignissimos corrupti
                  quisquam qui blanditiis sapiente voluptate id reprehenderit ratione! Enim excepturi ad quas quasi alias?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
