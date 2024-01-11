import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
const Favorites = () => {
  const { user } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    try {
      const { data } = await axiosWithToken(
        `${import.meta.env.VITE_BASE_URL}/users/${user._id}`
      );
      setCurrentUser(data?.data);
      // console.log(data.id);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <main className="dashboard p-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="nav-link fs-1 text-warning ">My Planets</h1>

          {!currentUser?.planets?.length ? (
            <h1 className="nav-link fs-3 text-center text-warning ">
              You Have No Favorite Planet
            </h1>
          ) : (
            <section className="d-flex flex-wrap p-2 gap-2">
              {currentUser?.planets?.map((item, i) => (
                <div
                  key={i}
                  className="text-center text-white rounded-5 border p-3 m-auto"
                  style={{ width: "20rem", height: "12rem" }}
                >
                  <h4 className="nav-link fs-4">Name : {item.name}</h4>
                  <h4 className="nav-link fs-4">Climate : {item.climate}</h4>
                  <h4 className="nav-link fs-4">Terrain : {item.terrain}</h4>
                  <h4 className="nav-link fs-4">
                    Population : {item.population}
                  </h4>
                </div>
              ))}
            </section>
          )}

          <h1 className="nav-link fs-1 text-warning  mt-2">My Characters</h1>

          {!currentUser?.people?.length ? (
            <h1 className="nav-link fs-3 text-center text-warning ">
              You Have No Favorite Character
            </h1>
          ) : (
            <section className="d-flex flex-wrap p-2 gap-2">
              {currentUser?.people?.map((item, i) => (
                <div
                  key={i}
                  className="text-center text-white rounded-5 border p-3 m-auto"
                  style={{ width: "20rem", height: "12rem" }}
                >
                  <h4 className="nav-link fs-4">Name : {item.name}</h4>
                  <h4 className="nav-link fs-4">Height : {item.height}</h4>
                  <h4 className="nav-link fs-4">Mass : {item.mass}</h4>
                  <h4 className="nav-link fs-4">Gender : {item.gender}</h4>
                </div>
              ))}
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default Favorites;
