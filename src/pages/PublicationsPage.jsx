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
  console.log(category);

  //   useState(()=>{
  const publications = publication.map((item) => item.publications)[0];
  //   }, [category])

  return (
    <>
      <NavBar />

      {/* TopNav */}
      <div className="px-[90px] h-[37lvh] py-[25px] bg-[#0C1657] flex items-start justify-end flex-col text-white">
        <h2 className="font-rubik font-bold text-[40px]">Publications</h2>
        <p className="font-grotesk tracking-[0.9px]">News & Articles || Everything from articles to letters. All that you <br /> need to know happening around the ACU Space.</p>
      </div>
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
            <PaginatedItems itemsPerPage={3} currentItems={publications} category={category} />
        </div>
      </div>
      {/* Second Section */}


    </>
  );
};

export default PublicationPage;
