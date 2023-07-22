import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from "../../../models/Post";
// import { NextApiRequest } from "next";

export async function GET(request: Request) {
	const url = new URL(request.url);
	const username = url.searchParams.get('username');

	try {
		await connect();
		let query = {};
		if (username) {
			query = { username: username };
		}
		const posts: Post[] = await Post.find(query);
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch {
		return new NextResponse('Database Error', { status: 500 });
	}
}

export const POST = async (request:Request) => {
	const body = await request.json();
  
	const newPost = new Post(body);
  
	try {
	  await connect();
  
	  await newPost.save();
  
	  return new NextResponse("Post has been created", { status: 201 });
	} catch (err) {
	  return new NextResponse("Database Error", { status: 500 });
	}
  };