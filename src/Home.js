import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {

	const [blogs, setBlogs] = useState([
		{ title: 'Blog 1', body: 'lorem ipsum...', author: 'austin', id: 1},
		{ title: 'Blog 2', body: 'lorem ipsum...', author: 'parker', id: 2},
		{ title: 'Blog 3', body: 'lorem ipsum...', author: 'bennett', id: 3}
	])

	const handleDelete = (id) => {

		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
		</div>
	);
}
 
export default Home;