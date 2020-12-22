const ProfileCardInfoItem = ({ title, content }) => {
	return (
		<section className="flex flex-col items-center font-light tracking-tight">
			<h3 className="text-gray-500">{ title }</h3>
			<p>{ content }</p>
		</section>
	);
};

export default ProfileCardInfoItem;