import Thumbsdown from "@/components/svg/thumbsdown";
import ThumbsUp from "@/components/svg/thumbsup";
import { getLearningPost } from "@/utils/database.utility";
import Markdown from "react-markdown";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getLearningPost(params.id);
  const matches = post.description.match(/\*\*(.*?)\*\*/g) || [];
  const title = matches.map((match: string) => match.slice(2, -2)).join(" ");
  return {
    title: `${title} | quickcourse.xyz`,
  };
}
export default async function LearningPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getLearningPost(params.id);
  const matches = post.description.match(/\*\*(.*?)\*\*/g) || [];
  const title = matches.map((match: string) => match.slice(2, -2)).join(" ");
  return (
    <div className="text-white p-5">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[70%] w-[100%] p-3">
          {/* Render the description and code using react-markdown */}
          <div className="text-xl font-semibold">
            <h1>{title || "No Title Available"}</h1>
          </div>
          <div className="w-full flex flex-row justify-end px-4 space-x-3">
            <div className="text-white">
              <ThumbsUp />
            </div>
            <div>
              <Thumbsdown />
            </div>
          </div>
          <Markdown>
            {post.description || "No description available"}
          </Markdown>
          <Markdown>{post?.code || "No code available"}</Markdown>
        </div>
        <div className="md:w-[30%] w-full p-3 h-32">
          <div>
            <p className="text">Useful Links</p>
          </div>
          <div>
            {post.links.map((link: string, index: number) => (
              <p key={index} className="text-wrap">
                <a
                  target="_blank"
                  key={index}
                  href={link}
                  className="text-blue-500"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;
