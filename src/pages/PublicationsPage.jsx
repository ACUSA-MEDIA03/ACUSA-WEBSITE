import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Categories, Publications } from "../data/Publications";
import PaginatedItems from "../utils/pagination";
import Banner from "../components/Banner/Banner";


const PublicationPage = () => {
  const [category, setCatgory] = useState("Articles");
  const publication = Publications.filter(
    (publications) => category == publications.category
  );
  const publications = publication.map((item) => item.publications)[0];

  return (
    <>
      <NavBar />

      {/* TopNav */}
      <Banner header="Publications" description="News & Articles || Everything from articles to letters. All that you need to know happening around the ACU Space." image='../Banner/banner.jpg' />
      {/* TopNav */}

      {/* Second Section */}
      <div className="flex lg:flex-row flex-col bg-white">
        <div className="basis-[20%] flex lg:flex-col lg:py-[70px] lg:px-4 lg:justify-start lg:items-stretch items-center justify-center py-[30px] lg:space-y-9 lg:gap-0 gap-4 font-rubik">
          {Categories.map((categories) => (
            <button
              key={categories.id}
              className={`lg:pb-3 lg:border-b  border-r border-l lg:border-r-0 lg:border-l-0 px-1 text-left lg:pl-2 cursor-pointer lg:text-[16px] text-[14px] ${
                categories.category == publication[0].category
                  ? "text-main"
                  : ""
              }`}
              onClick={(e) => setCatgory(e.target.innerText)}
            >
              {categories.category}
            </button>
          ))}
        </div>

        <div className="basis-[80%] bg-[#F0EAEA]">
            <PaginatedItems itemsPerPage={3} currentItems={publications} category={category} />
        </div>
      </div>
      {/* Second Section */}


    </>
  );
};

export default PublicationPage;
