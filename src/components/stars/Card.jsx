
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="text-center text-white border  rounded-5 p-2 position-relative" style={{ width: "18rem",  height: "10rem"}}>
      <h3 className="nav-link fs-3">{item?.name.toUpperCase()}</h3>
      <button className=" btn btn-warning position-absolute bottom-0 translate-middle" onClick={() =>  navigate(`/${item.height?"characters":"planets"}/${item.url.split("/")[5]}`)}>
        Go Detail
      </button>
    </div>
  );
};

export default Card;