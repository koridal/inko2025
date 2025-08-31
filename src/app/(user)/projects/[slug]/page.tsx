import { fullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug:string) {
  const query = `
    *[_type == "project" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
        title,
        content, 
        titleImage
    }[0]
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectAticle(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const data: fullProject = await getData(params.slug);

  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <h1>
        <span className="block text-4xl text-center text-primary font-semibold tracking-wide uppercase mb-10">
          Inko Jaya Konstruksi
        </span>
        <span className="mt-4 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border mx-auto"
      />

      <div className="max-w-4xl mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary mx-auto border border-gray-400 rounded-md p-6">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
