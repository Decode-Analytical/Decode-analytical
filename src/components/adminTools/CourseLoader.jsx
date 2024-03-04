const Skeleton = () => (
  <div className="flex items-start gap-x-3 my-2 animate-pulse">
    <div className="w-[83px] h-[63px] rounded-lg bg-gray-300"></div>
    <div>
      <h2 className="font-semibold w-40 h-5 bg-gray-300 rounded mb-2"></h2>
      <p className="w-20 h-3 bg-gray-300 rounded"></p>
    </div>
  </div>
);

const CourseLoader = () => (
  <>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </>
);
export default CourseLoader;
