import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Character = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const getPlanet = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/people/${id}`
      );
      setCharacter(data?.data);
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
    <main className="people p-2 text-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center text-white rounded-5 p-2 m-auto">
          <img
            src="https://media.timeout.com/images/105863223/750/422/image.webp"
            alt="img"
            width={"200px"}
            height={"200px"}
            loading="lazy"
          />
          <h4 className="nav-link fs-4">
            Name : {character?.name?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">
            Height : {character?.height?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">
            Mass : {character?.mass?.toUpperCase()}
          </h4>
          <h4 className="nav-link fs-4">Gender : {character?.gender}</h4>
          <button className=" btn btn-warning" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}
    </main>
  );
};

export default Character;
