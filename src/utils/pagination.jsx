import { useState } from "react";
import ReactPaginate from "react-paginate";
import PublicationCard from "../components/Card/PublicationCard";
import {  } from "react-icons/bs";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <>
            <PublicationCard
              key={index}
              header={item.header}
              date={item.date}
              description={item.description}
              image={item.image}
            />
          </>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, currentItems }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItem = currentItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(currentItems.length / itemsPerPage);
  console.log(currentItems, currentItem, pageCount);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentItems.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col items-center px-[50px] py-[50px] h-[500px] overflow-auto no-scrollbar divide-y ">
        <Items currentItems={currentItem} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={'Previous'}
        renderOnZeroPageCount={null}
        className="flex gap-4 cursor-pointer px-13 py-4"
        activeClassName="border"
        previousClassName="border border-red-500"
      />
    </>
  );
}

export { Items };
export default PaginatedItems;

{
  /* <PaginatedItems itemsPerPage={4} /> */
}
