import { useState } from "react";
import ReactPaginate from "react-paginate";
import PublicationCard from "../components/Card/PublicationCard";
import PodcastCard from "../components/Card/PodcastCard";
import { Link } from "react-router-dom";

function Items({ currentItems, category }) {
  return (
    <div className=" w-full space-y-4 flex flex-col justify-center items-center">
      {currentItems &&
        currentItems.map((item, index) => (
          <>
            {category == "Podcasts" ? (
              <PodcastCard />
            ) : (
              <Link to={`/publication/${category}/${item.id}`}>
                <PublicationCard
                  key={index}
                  header={item.header}
                  date={item.date}
                  description={item.description}
                  image={item.image}
                  author={item.author}
                />
              </Link>
            )}
          </>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, currentItems, category }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItem = currentItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(currentItems.length / itemsPerPage);
  if(currentItem.length <= 0){
    setItemOffset(0)
    console.log(pageCount)
  }
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentItems.length;
    console.log(pageCount)
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col items-center lg:px-[50px] px-2 py-[50px] h-[500px] overflow-auto no-scrollbar divide-y divide-yellow-950 ">
        <Items currentItems={currentItem} category={category} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName="flex items-center px-15 gap-4 py-5 font-grotesk text-[14px]"
        pageClassName="flex items-center justify-center h-[25px] w-[25px] rounded-full"
        pageLinkClassName="w-full h-full flex items-center border rounded-full justify-center cursor-pointer bg-[whitesmoke]"
        activeClassName="text-[#0C1657]"
        previousClassName="flex items-center justify-center rounded-md cursor-pointer"
        nextClassName="flex items-center justify-center rounded-md cursor-pointer"
        disabledClassName="opacity-50 cursor-not-allowed"
        activeLinkClassName="font-bold"
      />
    </>
  );
}

export { Items };
export default PaginatedItems;

{
  /* <PaginatedItems itemsPerPage={4} /> */
}
