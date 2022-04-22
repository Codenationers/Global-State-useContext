import { useContext } from 'react';
import AppContext from './AppContext';

const Component = () => {
	const appContext = useContext(AppContext);
	return (
		<div className="container">
			<h2>{appContext.theme.toLocaleUpperCase()} Mode</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
				cumque dolorum omnis, maiores voluptatem dolore facere quaerat,
				cupiditate velit optio eaque soluta sint modi reprehenderit magni
				aliquid quidem laboriosam nulla.
			</p>
			<p>Made by {appContext.username}</p>
		</div>
	);
};

export default Component;
