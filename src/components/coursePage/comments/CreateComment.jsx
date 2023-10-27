import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useAddCommentMutation } from "../../../redux/FetchApi/GetCourseData";

const CreateComment = ({ courseId, comment }) => {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const [addComment] = useAddCommentMutation();
  console.log(courseId);
  const handleStarClick = (value) => {
    setRating(value);
  };
  const handleAddComment = async () => {
    const comment = {
      review: newComment,
      rating,
    };
    const postComment = await addComment({ courseId, comment });
    console.log(postComment)
    if (!postComment.error.status) {
      console.log(postComment.error.data.message);
    } else {
        comment({
            message: postComment.data.message
        })
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Comment</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        rows="4"
        placeholder="Write your comment here..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <div className="flex items-center space-x-2 mt-4">
        <p className="text-lg font-semibold">Rating:</p>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`${
              rating >= value
                ? "text-yellow-500"
                : "text-gray-300 hover:text-yellow-500"
            }`}
            onClick={() => handleStarClick(value)}
          >
            {rating >= value ? <BsStarFill /> : <BsStar />}
          </button>
        ))}
      </div>
      <button
        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default CreateComment;
