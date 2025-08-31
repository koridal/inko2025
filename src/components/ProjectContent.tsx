import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleProjectCard } from "@/app/lib/interface";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'project'] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleProjectCard[] = await getData();
  
  return (
    <div className="flex flex-col w-7xl mx-auto py-10">
      <h1 className="text-center font-bold text-4xl">Our Projects</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {data.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={700}
              height={500}
              className="rounded-t-lg h-[200px] object-cover mx-auto"
            />
            <CardContent className="mt-2">
              <div className="xl:px-8">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-md text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
              </div>
              <Button asChild className="w-full mt-7">
                <Link href={`/projects/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
