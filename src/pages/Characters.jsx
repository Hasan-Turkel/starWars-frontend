import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/stars/Card";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaForward,
  FaFastForward,
  FaBackward,
  FaFastBackward,
} from "react-icons/fa";
import Loading from "../components/Loading";

const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const [page, setPage] = useState(+search.split("=")[1] || 1);

  const handlePage = (num) => {
    navigate(`/characters/?page=${num}`);
    setPage(num);
    getPeople(num);
  };

  const getPeople = async (number) => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/people/?page=${number}`
      );
      setPeople(data);
      //   console.log(data);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPeople(page);
  }, []);
  return (
    <main className=" p-1 d-flex gap-3 flex-wrap justify-content-center people">
      {loading ? (
        <Loading />
      ) : (
        <>
          {people?.data?.results.map((item, i) => (
            <Card key={i} item={item} />
          ))}

          {people?.data?.next && (
            <div className="position-fixed next d-flex gap-2 p-2 justify-content-end">
              <FaForward
                role="button"
                className="fs-1 bg-warning p-1 rounded-5"
                onClick={() => {
                  handlePage(page + 1);
                }}
              />
              <FaFastForward
                role="button"
                className="fs-1 bg-warning p-1 rounded-5"
                onClick={() => {
                  handlePage(Math.ceil(people?.data.count / 10));
                }}
              />
            </div>
          )}
          {people?.data?.previous && (
            <div className="position-fixed prev d-flex gap-2 p-2">
              <FaFastBackward
                role="button"
                className="fs-1 bg-warning p-1 rounded-5"
                onClick={() => {
                  handlePage(1);
                }}
              />
              <FaBackward
                role="button"
                className="fs-1 bg-warning p-1 rounded-5"
                onClick={() => {
                  handlePage(page - 1);
                }}
              />
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Characters;
