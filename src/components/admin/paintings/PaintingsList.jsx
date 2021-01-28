import React, { useContext, useEffect, useState } from "react";
import PaintingItem from "./PaintingItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePainting from "./CreatePainting";
import UpdateItem from "./UpdateItem";
import Pagination from "../../Pagination";
import { paginate } from "../../../utils/paginate";
import PaintingsContext from "../../paintingsContext.js";

function PaintingsList(props) {
  const [isAdding, setIsAdding] = useState(false);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const { paintings, setPaintings } = useContext(PaintingsContext);

  const currentPaintings = paginate(paintings, currentPage, pageSize);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function updateItem(key) {
    let index = paintings.findIndex((e) => e._id === key);
    let tmp = [...paintings];
    tmp[index] = { ...tmp[index], isUpdating: !tmp[index].isUpdating };
    setPaintings(tmp);
  }

  useEffect(() => {
    let tmp = [...paintings];
    tmp.forEach((a) => (a.isUpdating = false));
    setPaintings(tmp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (paintings.length === 0)
    return <CreatePainting setIsAdding={setIsAdding} />;

  return (
    <React.Fragment>
      {!isAdding && (
        <div className="text-center">
          <button
            type="button"
            className="btn btn-info m-5 shadow"
            onClick={() => setIsAdding(true)}
          >
            <FontAwesomeIcon icon={["far", "plus-square"]} className="mx-3" />
            Add a painting
          </button>
        </div>
      )}
      {isAdding && <CreatePainting setIsAdding={setIsAdding} />}
      <div className="list-group w-100">
        {currentPaintings.map((p) =>
          p.isUpdating ? (
            <UpdateItem key={p._id} painting={p} />
          ) : (
            <PaintingItem key={p._id} painting={p} updateItem={updateItem} />
          )
        )}
      </div>
      <Pagination
        itemsCount={paintings.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default PaintingsList;
