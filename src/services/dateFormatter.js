const dateOptions = {
	day: "numeric",
	month: "long",
	year: "numeric"
};

const formatDate = (date) => {
	const newDate = new Date(date);
	return newDate.toLocaleString("en-US", dateOptions);
};

export default formatDate;
