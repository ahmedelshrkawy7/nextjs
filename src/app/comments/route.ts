import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");
  console.log(theme);

  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((comm) => comm.text.includes(query))
    : comments;
  return new Response(JSON.stringify(filterComments), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme =dark",
    },
  });
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
