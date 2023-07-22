// IMPORTS
import 'styles/main.scss';

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
	return (
		<html lang="de">
			<body>
				{children}
			</body>
		</html>
	);

};

// EXPORTS
export default RootLayout;
