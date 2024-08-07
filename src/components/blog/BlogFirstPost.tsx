import React from "react";
import { Link } from "react-router-dom";

interface IPost {
	postImage: string;
	category: string;
	title: string;
	description: string;
	author: {
		authorImage: string;
		authorName: string;
	};
	day: string;
	slug: string;
}

const BlogFirstPost = ({ postImage, category, title, description, author, day, slug }: IPost) => {
	const truncate = (word: string, n: number) => {
		return word?.length > n ? word.substr(0, n - 1) + "..." : word;
	};

	return (
		<div className="col-lg-12">
			<div className="post-card">
				<div className="post-card-image">
					<Link to="/post">
						<img src={postImage} alt="" />
					</Link>
				</div>
				<div className="post-card-content">
					<Link to="/blog" className="categorie">
						{category}
					</Link>
					<h5>
						<Link to="/post?slug={slug}">{title}</Link>
					</h5>
					<p>{truncate(description, 80)}</p>
					<div className="post-card-info">
						<ul className="list-inline">
							<li>
								<Link to="/author?slug={slug}">
									<img src={author.authorImage} alt="" />
								</Link>
							</li>
							<li>
								<span className="author">{author.authorName}</span>
							</li>
							<li className="dot"></li>
							<li>{day}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogFirstPost;
