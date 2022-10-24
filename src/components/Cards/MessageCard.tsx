import React from "react";

interface MessageCard {
  message: string;
  name: string;
  date: string;
}


const CommentCard = (props: MessageCard) => {
  const { message, name, date } = props;

  return (
    <div className="py-4 leading-8 px-4 rounded-lg cursor-pointer hover:shadow-md hover:bg-[#1D1D1F]">
      <p className="text-zinc-200 text-lg tracking-wide">{message}</p>
      <p className="text-zinc-400 text-sm mt-1">by <span className="capitalize">{name}</span> <span
        className="px-2">·</span> on <span>{date}</span></p>
    </div>
  );
};

export default CommentCard;