const BannerSkeleton = () => (
  <div className="bg-gray-200 rounded-md mt-[45px] pb-[18px] px-[18px] pt-[13px] relative animate-pulse">
    <div className="">
      <div className="flex flex-col sm:flex-row items-center gap-[22px] my-5 sm:my-0">
        <div>
          {/* Placeholder for course image */}
          <div className="w-[150px] h-[90px] rounded-lg bg-gray-400"></div>
        </div>
        <div className="flex flex-1 flex-col gap-4 w-full px-0">
          <div className="flex justify-between">
            {/* Placeholder for course title */}
            <div className="w-[200px] h-[24px] bg-gray-400"></div>
            <div className="flex justify-end absolute right-[15px] top-[7px]">
              {/* Placeholder for level indicator */}
              <div className="w-[80px] h-[24px] bg-gray-400"></div>
            </div>
          </div>
          {/* Placeholder for progress bar */}
          <div className="w-full h-[8px] bg-gray-400"></div>
          <div className="flex gap-3">
            {/* Placeholder for buttons */}
            <div className="w-[80px] h-[22px] bg-gray-400"></div>
            <div className="w-[80px] h-[22px] bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BannerSkeleton;
