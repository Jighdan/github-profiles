import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { ReactComponent as IssueIcon } from "../../assets/icons/issue.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

const ProfileRepositories = ({ repositories }) => {
	const formatDate = (date) => {
		const newDate = new Date(date);
		const options = {
			day: "numeric",
			month: "long",
			year: "numeric"
		};

		return newDate.toLocaleString("en-US", options);
	};

	return (
		<section className="grid grid-flow-row grid-cols-1 gap-5 lg:gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{ repositories.map(repository => (
				<article key={ repository.id } className="max-w-md p-4 bg-white flex flex-row gap-5 rounded">
					<main className="flex flex-col flex-grow justify-between">
						<header>
							<h1 className="text-lg font-medium">{ repository.name }</h1>
							<h3 className="font-light">{ repository.language }</h3>
							<h3 className="font-light italic">{ formatDate(repository.createdAt) }</h3>
						</header>

						<p className="text-sm">{ repository.description }</p>

						<a href="{ repository.url }" target="_blank">Visit</a>
					</main>

					<aside className="flex flex-col justify-between">
						<section className="flex flex-col items-center">
							<StarIcon />
							<p>{ repository.stars }</p>
						</section>

						<section className="flex flex-col items-center">
							<ForkIcon />
							<p>{ repository.forks }</p>
						</section>

						<section className="flex flex-col items-center">
							<IssueIcon />
							<p>{ repository.openIssues }</p>
						</section>
					</aside>
				</article>
			)) }
		</section>
	)
};

export default ProfileRepositories;