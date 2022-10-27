import React from "react";

const Mail = () => {
  return (
    <div className="fixed right-0 hidden h-full px-6 pt-6 lg:block">
      <div className="flex h-full w-4 flex-col items-center justify-start gap-6">
        <div className="relative top-24 inline rotate-90 tracking-wide text-zinc-500 hover:text-zinc-400">
          <a className="mailto" href="mailto:meta.hitesh85@gmail.com">
            meta.hitesh85@gmail.com
          </a>
        </div>
        <div className="relative top-44 mt-2 h-full border-r-2 border-zinc-800" />
      </div>
    </div>
  );
};

export default Mail;
