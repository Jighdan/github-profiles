import { ReactComponent as IconWarning } from "../assets/icons/warning.svg";

const alertTexts = {
	profileNotFound: "The profile you tried searching for wasn't found. Check your writing or try with another profile",
	queryIsEmpty: "Do not leave the search bar empty"
}

const Alert = ({ alertType }) => {
	return (
		<section className="bg-red-100 p-5 w-full sm:w-1/2" role="alert">
			<section className="flex space-x-3">
				<IconWarning className="flex-none fill-current text-red-500" />
				<section className="leading-tight flex flex-col space-y-2">
					<h1 className="text-sm font-semibold text-red-700">{ alertTexts[alertType] }</h1>
				</section>
			</section>
		</section>
	)
};

export default Alert;
