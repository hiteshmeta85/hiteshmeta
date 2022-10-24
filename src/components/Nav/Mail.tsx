import React from "react";

const Mail = () => {
  return (
    <div className="hidden lg:block fixed right-0 h-full pt-6 px-6">
      <div className="h-full flex flex-col justify-start items-center gap-6 w-4">
        <div className="relative top-24 rotate-90 text-zinc-500 inline tracking-wide hover:text-zinc-400">
          <a className="mailto" href="mailto:meta.hitesh85@gmail.com">meta.hitesh85@gmail.com</a>
        </div>
        <div className="border-r-2 border-zinc-800 h-full mt-2 relative top-44"/>
      </div>
    </div>
  );
};

export default Mail;