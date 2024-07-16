import Loader from "../../assets/loader.gif"

const Loading = () => {
  return (
    <div className="grid place-content-center min-h-screen">
      <img src={Loader} alt="Loading..." />
      <h2 className="mt-12 text-center">Loading...</h2>
    </div>
  );
};

export default Loading;
