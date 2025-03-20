import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Categories, Publications } from "../data/Publications";
import PublicationCard from "../components/Card/PublicationCard";
import PaginatedItems from "../utils/pagination";
import { Items } from "../utils/pagination";

const PublicationPage = () => {
  const [category, setCatgory] = useState("Articles");
  const publication = Publications.filter(
    (publications) => category == publications.category
  );
  console.log(typeof publication[0].category, typeof category);

  //   useState(()=>{
  const publications = publication.map((item) => item.publications)[0];
  //   }, [category])

  return (
    <>
      <NavBar />

      {/* TopNav */}
      <div className="h-[30vh] bg-main"></div>
      {/* TopNav */}

      {/* Second Section */}
      <div className="flex bg-white">
        <div className="basis-[20%] flex flex-col  py-[70px] px-[40px] space-y-9 font-rubik divide-y">
          {Categories.map((categories) => (
            <button
              key={categories.id}
              className={`pb-3 text-left pl-2 cursor-pointer ${
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
            {/* <Items currentItems={publications} /> */}
            <PaginatedItems itemsPerPage={3} currentItems={publications} />
        </div>
      </div>
      {/* Second Section */}
    </>
  );
};

export default PublicationPage;
