import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import SadFace from "../assets/sadface.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container text-center flex flex-col items-center gap-4 place-content-center min-h-[100vh]"
      style={{
        fontFamily: "Segoe UI",
      }}
    >
      <img width={"250px"} className="mx-auto" src={SadFace} alt="Error" />
      <h1 className="text-[120px] leading-[150px]">Oops!</h1>
      <p className="uppercase font-bold">404 - Page not found</p>
      <p className="max-w-[45ch] leading-7 mx-auto">
        Page not found - Please try to refresh the page or return to the
        previous page
      </p>
      <Button onClick={() => navigate(-1)} label={"Go to homepage"} />
    </div>
  );
};

export default NotFound;
