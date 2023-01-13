import YouTube from 'react-youtube';
export default function Modall(props) {
  const { showModal, setShowModal, trailer } = props;
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg mx-auto rounded-md shadow-lg">
                <div className="w-[100%] h-[100%]">
                  <YouTube
                    videoId={trailer}
                    opts={{
                      // height: '100%',
                      width: '100%',
                      height: '390',
                      // width: '640',
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
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
