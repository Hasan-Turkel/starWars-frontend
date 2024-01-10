import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Planet = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [planet, setPlanet] = useState([]);
  const getPlanet = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/planets/${id}`
      );
      setPlanet(data?.data);
      // console.log(data.id);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlanet();
  }, []);
  return (
    <main className="planets p-2 text-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center text-white rounded-5 p-2 m-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            alt="img"
            width={"200px"}
            height={"200px"}
            loading="lazy"
          />
          <h4 className="nav-link fs-4">
            Name : {planet?.name?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">
            Climate : {planet?.climate?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">
            Terrain : {planet?.terrain?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">Population : {planet?.population}</h4>
          <button className=" btn btn-warning" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}
    </main>
  );
};

export default Planet;