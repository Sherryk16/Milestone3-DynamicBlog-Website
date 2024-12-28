import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";
interface BlogCardProps {
  post: {
    id: any;
    title: any;
    description: any
    date: any;
    imageUrl: any;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white " : "text-slate-800"
      }rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105`}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg "
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published On: {new Date(post.date).toLocaleDateString()}
        </p>

        <Link
          href={`/post/${post.id}`}
          className={`w-full px-6 text-white bg-blue-500  rounded hover:scale-105 flex justify-center ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}
