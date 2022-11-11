import React, { useState } from "react";
import Layout from "../components/Layout";
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import { RiGoogleFill, RiSendPlaneFill } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import CustomButton from "../components/Button/CustomButton";
import { z } from "zod";
import { toast } from "react-hot-toast";
import MessageCard from "../components/Cards/MessageCard";
import { NextPage } from "next";

const inputSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message is empty!" })
    .max(280, { message: "Message should not be more than 280 characters!" }),
});

const Guestbook: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session, status } = useSession();
  const { data: messages } = trpc.message.getAllMessages.useQuery();
  const ctx = trpc.useContext();

  const guestbook = trpc.message.createMessage.useMutation({
    onMutate: () => {
      ctx.message.getAllMessages.cancel();
      const prevMessages = ctx.message.getAllMessages.getData();
      if (prevMessages) {
        ctx.message.getAllMessages.setData(prevMessages);
        return { messages };
      }
    },
    onError: (err, variables, context) => {
      ctx.message.getAllMessages.setData(context?.messages);
    },
    onSettled: () => {
      ctx.message.getAllMessages.invalidate();
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const id = toast.loading("Sending message...");
    const input = inputSchema.safeParse({ message: message.trim() });
    if (!input.success) {
      toast.error(input.error.issues[0]?.message as string, {
        id,
      });
      setLoading(false);
      return;
    }
    guestbook.mutate(input.data);
    toast.success("Message sent!", {
      id,
    });
    setMessage("");
    setLoading(false);
  };

  if (status === "loading") {
    return null;
  }

  return (
    <Layout>
      <div>
        <div className="leading-none">
          <h2 className="heading mb-2">Guestbook</h2>
          <p className="h5 mb-4 leading-5">
            Leave a message for me and other visitors here! It can be anything -
            appreciation, criticism, or just a random message. Just be nice!
          </p>
        </div>

        {/* Auth & Message Form */}
        <div
          className={`container-gradient mt-6 rounded-lg px-4 py-4 shadow-xl`}
        >
          {!session ? (
            <>
              <p className="h5 text-xl font-bold">Leave a Message👇</p>
              <p className="text">
                You need to be signed in to post a message.
              </p>
              <CustomButton
                title={"Sign In"}
                onClick={() => signIn("google")}
                icon={RiGoogleFill}
              />
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required={true}
                  className="input-gradient h5 w-full rounded-md p-4 focus:outline-none"
                  rows={4}
                />
                <div className="flex justify-between gap-3">
                  <CustomButton
                    title={loading ? "Loading..." : "Send"}
                    type={"submit"}
                    icon={RiSendPlaneFill}
                    styles={"grow"}
                    disabled={loading}
                  />
                  <CustomButton
                    title={"Sign Out"}
                    onClick={() => signOut()}
                    icon={GoSignOut}
                  />
                </div>
              </form>
            </>
          )}
        </div>

        {/* Messages */}
        <div className="my-4">
          {!loading ? (
            messages?.map((item, index) => {
              return (
                <MessageCard
                  key={index}
                  message={item.message}
                  name={item.author || "Anonymous"}
                  date={item.updatedAt.toDateString()}
                />
              );
            })
          ) : (
            <p className="text">fetching the messages ...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Guestbook;
