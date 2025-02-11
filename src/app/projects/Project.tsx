import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
interface ProjectProps {
  title: string;
  date: string;
  content: string;
  repo: string;
  topics: string[];
  lead: string;
  image: string;
  image_border: boolean;
  subimages: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  date,
  content,
  repo,
  topics,
  lead,
  image,
  image_border,
  subimages,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
      <div className="col-span-3 md:col-span-2">
        {/* Title */}
        <h3 className="text-black text-xl font-semibold mb-2">
          <span className="mr-2">{title}</span>
          <small className="whitespace-nowrap text-neutral-500 text-base font-normal">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </small>
        </h3>

        {/* Tags (pill bar) */}
        <div className="flex flex-wrap mb-1">
          {topics.map((tag, index) => (
            <div key={index} className="pill">
              {tag}
            </div>
          ))}
        </div>

        {/* Description and image */}
        <div className="space-y-4">
          <p className="text-lg font-light mb-3">{lead}</p>
          <div className="prose prose-a:underline">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="col-span-3 md:col-span-1">
        <a rel="external" href={image}>
          <Image
            src={image}
            alt={`${title} image`}
            width={0}
            height={0}
            className={`rounded-lg max-w-full w-full ${
              image_border ? "border border-gray-300" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export { Project };
