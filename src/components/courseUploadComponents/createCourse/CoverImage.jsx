import React from 'react';

function CoverImage({ handleCoverImageChange, isLoading, error }) {
  return (
    <div>
      <label className="font-bold text-sm">Cover Image: </label>
      <div className="border-2 border-zinc-500 border-dashed h-52 items-center flex">
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverImageChange}
          className="center w-1/2"
        />
      </div>
      <div className=' mt-52'>
      <button
        type="submit"
        className="bg-[#040E53] p-2 rounded-md text-xs text-white my-3  px-6 float-right"
      >
        {isLoading ? 'Loading...' : 'Save & Continue'}
      </button>
      {error && <p className='text-red-500 text-xs'>{error}</p>}
      </div>
      

      
    </div>
  );
}

export default CoverImage;
