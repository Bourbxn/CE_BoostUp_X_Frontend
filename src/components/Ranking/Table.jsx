import React, { useEffect, useState } from "react";
import { useGetRankingQuery } from "../../features/api/usersSlice";
import PlanetImageSwitch from "../PlanetImageSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faUserAstronaut,
  faCaretRight,
  faCaretLeft,
  faEarthOceania,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
const Table = () => {
  const { isLoading, isSuccess, data } = useGetRankingQuery();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      setUsers(data);
    }
  }, [isSuccess]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);

  return (
    <div className="overflow-x-auto max-w-5xl mt-14 text-white mx-auto">
      <table className="table table-normal  w-full">
        <thead>
          <tr className="text-center">
            <th>
              <FontAwesomeIcon icon={faRankingStar} className="text-xl" />
              <br />
              Rank
            </th>
            <th>
              <FontAwesomeIcon icon={faUserAstronaut} className="text-xl" />
              <br />
              Name
            </th>
            <th>
              <FontAwesomeIcon icon={faEarthOceania} className="text-xl" />
              <br />
              Group
            </th>
            <th>
              <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
              <br />
              Finished
            </th>
            <th>
              <FontAwesomeIcon icon={faStar} className="text-xl" />
              <br />
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="text-center">
              <th className="text-2xl" colSpan="5">
                Loading
              </th>
            </tr>
          ) : displayUsers.length === 0 ? (
            <tr className="text-center">
              <th className="text-2xl" colSpan="5">
                No Data Contents
              </th>
            </tr>
          ) : (
            isSuccess &&
            displayUsers.map((user, key) => {
              return (
                <tr className="text-center" key={key}>
                  <th>{user.num}</th>
                  <td>
                    <div className="font-bold">{user.name}</div>
                  </td>
                  <td>
                    <img
                      src={PlanetImageSwitch(user.group)}
                      className={`${
                        user.group === 5 ? "w-32" : "w-16"
                      } h-20 mx-auto`}
                    />
                  </td>
                  <td>{user.finished}</td>
                  <td>{user.score}</td>
                </tr>
              );
            })
          )}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="5">
              {isSuccess && (
                <div className="text-2xl">
                  <ReactPaginate
                    className="flex space-x-10 justify-center"
                    pageClassName=""
                    breakLabel="..."
                    previousLabel={<FontAwesomeIcon icon={faCaretLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faCaretRight} />}
                    pageCount={Math.ceil(users.length / usersPerPage)}
                    onPageChange={({ selected }) => {
                      setPageNumber(selected);
                    }}
                    activeClassName={"text-yellow-500"}
                    pageRangeDisplayed={5}
                    renderOnZeroPageCount={null}
                  />
                </div>
              )}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
