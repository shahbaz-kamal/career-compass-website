import React, { useState } from "react";
import { MdEdit } from "react-icons/md";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textArea = e.target.textArea.value;
    setComment(textArea);
    setEditing(!editing);
  };

  return (
    <div>
      {!editing ? (
        <div>
          <form onSubmit={handleSubmit} className="flex items-center gap-4 ">
            <textarea
              name="textArea"
              className="textarea textarea-accent flex-1 h-0"
              placeholder="Write your comment"
            ></textarea>
            <button
              type="submit"
              className=" text-base md:text-xl bg-color-secondary py-3 px-4 rounded-lg hover:scale-110 transition duration-200 ease-in-out"
            >
              Comment
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-lg md:text-2xl mb-1">Your Comment:</h1>
          <div className="flex gap-4 justify-between items-center">
            <p className="flex-1 text-base md:text-xl font-semibold opacity-80">
              {comment}
            </p>
            <div onClick={handleEdit} className="text-color-secondary">
              <MdEdit size={25}></MdEdit>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
