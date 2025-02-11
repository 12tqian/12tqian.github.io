import Link from "next/link";
import fs from "fs";
import { Project } from "./Project";
import matter from "gray-matter";

export default function Projects() {
  const directory = "src/app/projects/projects";
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const projects = markdownFiles.map((file) => {
    const fileContents = fs.readFileSync(`${directory}/${file}`).toString();
    const { data, content } = matter(fileContents);
    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: data.date,
      repo: data.repo,
      topics: data.topics,
      lead: data.lead,
      image: "./projects/" + data.image,
      image_border: data.image_border,
      subimages: data.subimages,
      content: content,
    };
  });

  // sort projects by date
  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <main className="w-full max-w-6xl mx-auto flex flex-col items-start py-12">
      {projects.map((project) => (
        <Project
          key={project.slug}
          title={project.title}
          date={project.date}
          content={project.content}
          repo={project.repo}
          topics={project.topics}
          lead={project.lead}
          image={project.image}
          image_border={project.image_border}
          subimages={project.subimages || []}
        />
      ))}
    </main>
  );
}
