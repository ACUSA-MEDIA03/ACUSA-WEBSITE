import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { BiChevronRight } from "react-icons/bi";
import OfficalLetter from "../components/PublicationSection/OfficalLetter";
import Footer from "../components/Footer/Footer";
import Details from "../components/PublicationSection/Details";

const DetailPage = () => {
  const { title, id } = useParams();
  console.log(title, id);

  return (
    <>
      <NavBar />
      {/* TopNav */}
      <div className="px-[90px] h-[34lvh] py-[16px] bg-[#0C1657] flex items-start justify-end flex-col text-white">
        <h2 className="font-rubik font-bold text-[40px]">Publications</h2>
        <p className="font-grotesk tracking-[0.9px] flex items-center gap-2">
          <Link to={`/publication`}>Publications</Link> <BiChevronRight />
          {title}
        </p>
      </div>
      {/* TopNav */}

      {/* Body */}
      {title == "Official Letters" ? (
        <>
          <OfficalLetter />
        </>
      ) : (
        <>
          <Details />
        </>
      )}
      {/* Body */}

      <Footer />
    </>
  );
};

export default DetailPage;
