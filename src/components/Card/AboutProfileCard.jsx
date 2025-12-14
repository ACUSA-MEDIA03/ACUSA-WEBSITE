// const ProfileCard = (e) => {
//     return (
//       <>
//         <div
//           className="rounded-[20px] relative lg:h-[400px] h-[270px]  justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
//           style={{ backgroundImage: `url(${e.image})` }}
//         >
//           <div className="top-0 left-0 absolute h-full w-full p-2 flex items-end" style={{ background: `rgba(0,0,0,0.3)` }}>
//             <div className="border flex items-center flex-col border-white w-full py-[10px] px-[11px]   lg:py-[15px] lg:px-[16px] glassmorphism_white rounded-[7px] lg:rounded-bl-[13px] lg:rounded-tr-[13px] bottom-0 ">
//               <b className="font-rubik text-main text-[16px] lg:text-[20px]">{e.name}</b>
//               <p className="font-grotesk text-black text-[8px] lg:text-[15px]">{e.position}</p>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default ProfileCard;
 import { useState } from "react";
import { X, Mail, Phone, Facebook, Instagram, Linkedin, } from "lucide-react";

function ProfileCard(e) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Profile Card */}
      <div
        onClick={openModal}
        className="rounded-tr-[20px] rounded-bl-[20px] flex relative lg:h-[450px] h-[420px] items-end justify-center p-2 bg-cover bg-center bg-no-repeat cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundImage: `url(${e.image})` }}
      >
        <div
          className="top-0 left-0 absolute h-full w-full p-2 flex items-end"
          style={{ background: `rgba(0,0,0,0.3)` }}
        >
          <div className="border flex items-center flex-col border-white w-full py-[15px] px-[16px] glassmorphism_white rounded-bl-[13px] rounded-tr-[13px] bottom-0">
            <b className="font-rubik text-main text-[20px]">{e.name}</b>
            <p className="font-grotesk text-black text-[15px]">{e.position}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Full Image */}
              <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={e.fullImage || e.image}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-6">
                  <h2 className="text-white text-3xl font-bold mb-1">{e.name}</h2>
                  <p className="text-yellow-400 text-xl font-medium">{e.position}</p>
                  
                  {e.tag && (
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                      {e.tag}
                    </span>
                  )}
                 
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 space-y-6">
              
 {/* Department && Faculty */}
                {(e.department || e.faculty || e.level) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Info</h3>
                    <div className="space-y-2 text-gray-700">
                      {e.faculty && (
                        <p>
                          <span className="font-medium">Faculty:</span> {e.faculty}
                        </p>
                      )}
                      {e.department && (
                        <p>
                          <span className="font-medium">Department:</span> {e.department}
                        </p>
                      )}
                      {e.level && (
                        <p>
                          <span className="font-medium">Level:</span> {e.level}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* Contact Information */}
                {(e.email || e.phone) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                    <div className="space-y-2">
                      {e.email && (
                        <a
                          href={`mailto:${e.email}`}
                          className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                          <span>{e.email}</span>
                        </a>
                      )}
                      {e.phone && (
                        <a
                          href={`tel:${e.phone}`}
                          className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          <Phone className="h-5 w-5" />
                          <span>{e.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Social Media Links */}
                {(e.facebook || e.x || e.instagram || e.linkedin) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                    <div className="flex gap-4 flex-wrap">
                      {e.facebook && (
                        <a
                          href={e.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}

                      {e.x && (
                        <a
                          href={e.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                          aria-label="X (Twitter)"
                        >
                          <X className="h-5 w-5" />
                        </a>
                      )}

                      {e.instagram && (
                        <a
                          href={e.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}

                      {e.linkedin && (
                        <a
                          href={e.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

               

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileCard;
  