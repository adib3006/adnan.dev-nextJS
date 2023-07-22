// type Post = {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }

type Category= {
    id: number;
    title: string;
    desc: string;
    image: string;
}

type Items = {
	[key: string]: Category[];
};

type Post = {
	_id: string;
	title: string;
	desc: string;
	img: string;
	content: string;
	username: string;
};