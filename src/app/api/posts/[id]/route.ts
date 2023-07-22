import Post from "@/models/Post";
import connect from "@/utils/db"
import { NextResponse } from "next/server"
// import { NextApiRequest } from "next";

export async function GET(request: Request,{params:{id}}:{params: {id: string}}) {
	// const url = new URL(request.url);
	// const username = url.searchParams.get('username');

	try {
		await connect();
		const post: Post | null = await Post.findById(id);
		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch {
		return new NextResponse('Database Error', { status: 500 });
	}
}

export const DELETE = async (request: Request,{params:{id}}:{params: {id: string}}) => {
	try {
	  await connect();
  
	  await Post.findByIdAndDelete(id);
  
	  return new NextResponse("Post has been deleted", { status: 200 });
	} catch (err) {
	  return new NextResponse("Database Error", { status: 500 });
	}
  };