import ProfileRepository from "./ProfileRepository";

const ProfileRepositories = ({ repositories }) => {
	return (
		<section className="grid grid-flow-row grid-cols-1 gap-5 lg:gap-7 md:grid-cols-2 xl:grid-cols-3">
			{ repositories.map(repository => (
				<ProfileRepository key={ repository.id } repository={ repository } />
			)) }
		</section>
	)
};

export default ProfileRepositories;