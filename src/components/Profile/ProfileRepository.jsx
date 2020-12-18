import { useState } from "react";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { ReactComponent as IssueIcon } from "../../assets/icons/issue.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as OpenIcon } from "../../assets/icons/open.svg";

const ProfileRepository = ({ repository }) => {
	const [onHover, setOnHover] = useState(false);

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
		<article
			onMouseEnter={ () => setOnHover(true) }
			onMouseLeave={ () => setOnHover(false) }
			className="max-w-full md:max-w-md lg:max-w-lg p-4 bg-white flex flex-row gap-5 rounded"
		>
			<main className="flex flex-col flex-grow justify-between">
				<header>
					<h1 className="text-lg font-medium">{ repository.name }</h1>
					<h3 className="text-sm text-gray-800 font-light">{ repository.language }</h3>
					<h3 className="font-light italic">{ formatDate(repository.createdAt) }</h3>
				</header>

				<p className="text-sm">{ repository.description }</p>

				<a
					className={ onHover ? "visible" : "invisible" }
					href={ repository.url }
					target="_blank"
					rel="noopener noreferrer"
				>
					<OpenIcon />
				</a>
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
	)
};

export default ProfileRepository;