const PodcastCard = (e) => {
  return (
    <div className="lg:w-[70%] w-full p-4 border border-red-500 rounded-[20px] flex space-x-5">
      <div className="rounded-full border w-[70px] h-[70px] bg-red-500 grid place-content-center items-center">
          
      </div>
      <div className="basis-[90%] flex items-center">
        <audio src={e.audioSource} controls className="w-full border"></audio>
      </div>
    </div>
  );
};

export default PodcastCard;
