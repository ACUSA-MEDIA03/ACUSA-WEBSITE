import { useState } from "react";
import { X, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

function ProfileCard(e) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Profile Card */}
      <div onClick={openModal}
        className="rounded-tr-[20px] rounded-bl-[20px] flex relative lg:h-[450px] h-[420px] items-end justify-center p-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${e.image})` }}
      >
        <div className="top-0 left-0 absolute h-full w-full p-2 flex items-end"
          style={{ background: `rgba(0,0,0,0.3)` }}>
          <div className="border flex items-center flex-col border-white w-full  py-[15px] px-[16px] glassmorphism_white rounded-bl-[13px] rounded-tr-[13px] bottom-0 ">
            <b className="font-rubik text-main text-[20px]">{e.name}</b>
            <p className="font-grotesk text-[yellow] text-[15px]">{e.position}</p>
            <p>{ e.level}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors ">
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col ">
              <div className="relative h-80 bg-cover bg-center bg-no-repeat">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-main text-3xl font-bold">{e.name}</h2>
                  <p className="text-[yellow] text-xl font-medium">{e.position}</p>
                  {e.tag && (
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                      {e.tag}
                    </span>
                  )}
                </div>
              </div>


              {/* Details Section */}
              <div className="p-6 space-y-6">
                {/* Bio */}
                {e.bio && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {e.bio}
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              {(e.email || e.phone) && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Contact
                  </h3>
                  <div className="space-y-2">
                    {e.email && (
                      <a href={`mailto:${e.email}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>{e.email}</span>
                      </a>
                    )}
                    {e.phone && (
                      <a href={`tel:${e.phone}`}
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
              {(e.facebook || e.x || e.instagram || e.linkedln) && (
                <div>
                  {e.facebook && (
                    <a
                      href={e.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}

                  {e.x && (
                    <a
                      href={e.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black p-3 text-white hover:bg-black/5">
                    </a>
                  )}

                  {e.instagram && (
                    <a
                      href={e.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  (e.linkedin && (
                  <a href={e.linkedln}
                    target="_blank"
                    rel="noopener noreffer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 ">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  ))
                </div>
              )}

              {/* Department && Faculty */}
              {(e.department || e.faculty) && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Info </h3>
                  <div className="space-y-2">
                    {e.faculty && (
                      <p>
                        <span className="font-medium">Faculty: {e.faculty}</span>
                      </p>
                    )}
                    {e.department && (
                      <p>
                        <span className="font-semibold">Department: {e.department}</span>
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
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
