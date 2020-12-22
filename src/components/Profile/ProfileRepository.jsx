import { useState } from "react";
import Icon from "../Icon";

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
			className="max-w-full md:max-w-md lg:max-w-lg p-4 bg-white flex flex-row gap-5 rounded-lg shadow"
		>
			<main className="flex flex-col flex-grow justify-between">
				<header>
					<h1 className="text-lg font-medium break-normal md:break-all">{ repository.name }</h1>
					<h3 className="text-sm text-gray-800 font-light">{ repository.language }</h3>
					<h3 className="font-light italic">{ formatDate(repository.createdAt) }</h3>
				</header>

				<p className="text-sm break-normal md:break-all">{ repository.description }</p>

				<section className={ `${onHover ? "visible" : "invisible"} flex flex-row space-x-2` }>
					{
						repository.url && (
							<a
								href={ repository.url }
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon name="open" />
							</a>
						)
					}
					{
						repository.website && (
							<a href={ repository.website } target="_blank" rel="noopener noreferrer">
								<Icon name="website" />
							</a>
						)
					}
				</section>
			</main>

			<aside className="flex flex-col justify-between">
				<section className="flex flex-col items-center">
					<Icon name="star" />
					<p>{ repository.stars }</p>
				</section>

				<section className="flex flex-col items-center">
					<Icon name="fork" />
					<p>{ repository.forks }</p>
				</section>

				<section className="flex flex-col items-center">
					<Icon name="issue" />
					<p>{ repository.openIssues }</p>
				</section>
			</aside>
		</article>
	)
};

export default ProfileRepository;
