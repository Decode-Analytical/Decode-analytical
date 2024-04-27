const ProgressBar = ({ progress, completion }) => {
  return (
    <div className="relative pt-1">
      <div className="flex flex-col">
        <div className="bg-gray-200 rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="text-center py-1 text-xs rounded-full bg-blue1"
          ></div>
        </div>
        {completion && (
          <p className="font-medium mt-1">
            {`${progress === 50 ? "Not completed" : "100% completed"}`}
          </p>
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
