import '../../App.css';
import thumbnail1 from '../../img/thumbnail1.jpg';
// import Navbarr from '../../components/navbar/navbar';
import Card from '../../components/cards/card';

function Dashboard() {
  return (
    <>
      {/* <Navbarr /> */}
      <div className="App-body">
        <div className="header ">
          <h1 className="">Explore</h1>
          <div className="text-sm text-gray-500">What are you gonna watch today?</div>
          <div className="rounded-xl max-h-96 overflow-hidden shadow-lg my-3">
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
            <img className="w-full" src={thumbnail1} alt="gambar" />
          </div>
        </div>
        <div className="body">
          <h1 className="my-5">New Release</h1>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
