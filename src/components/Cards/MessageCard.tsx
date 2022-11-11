import React from "react";

interface MessageCard {
  message: string;
  name: string;
  date: string;
}

const CommentCard = (props: MessageCard) => {
  const { message, name, date } = props;

  return (
    <div className="p-4 leading-7">
      <p className="h5">{message}</p>
      <p className="h6 text-sm">
        by <span className="capitalize">{name}</span>{" "}
        <span className="px-2">·</span> on <span>{date}</span>
      </p>
    </div>
  );
};

export default CommentCard;
