// code your solution here
function superbowlWin(record) {
	const result = record.find((instance) => instance.result === 'W');
	if (result) return result.year;
	else return result;
}
