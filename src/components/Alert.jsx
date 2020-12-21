import Icon from "./Icon";

const alertTexts = {
	profileNotFound: "The profile you tried searching for wasn't found. Check your writing or try with another profile",
	queryIsEmpty: "Do not leave the search bar empty"
}

const Alert = ({ alertType }) => {
	return (
		<section className="max-w-full bg-red-100 p-5 border-l-4 border-red-700" role="alert">
			<section className="flex space-x-3">
				<Icon name="warning" className="flex-none fill-current text-red-700" />
				<section className="leading-tight flex flex-col space-y-2">
					<h1 className="text-sm font-semibold text-red-700">{ alertTexts[alertType] }</h1>
				</section>
			</section>
		</section>
	)
};

export default Alert;
