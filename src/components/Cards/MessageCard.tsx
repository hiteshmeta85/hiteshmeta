import React from "react";

interface MessageCard {
  message: string;
  name: string;
  date: string;
}

const CommentCard = (props: MessageCard) => {
  const { message, name, date } = props;

  return (
    <div className="cursor-pointer rounded-lg py-4 px-4 leading-8 hover:bg-[#1D1D1F] hover:shadow-md">
      <p className="text-lg tracking-wide text-zinc-200">{message}</p>
      <p className="mt-1 text-sm text-zinc-400">
        by <span className="capitalize">{name}</span>{" "}
        <span className="px-2">·</span> on <span>{date}</span>
      </p>
    </div>
  );
};

export default CommentCard;
