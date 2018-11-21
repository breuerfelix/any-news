import { Language as lang } from 'other';

function getPointsString(points) {
	let pointsNumber = Number(points);
	if(pointsNumber < 1000) return pointsNumber;
	return Math.round(pointsNumber / 100) / 10 + 'k';
}

function getTimeString(date) {
	const dateNumber = Number(date);
	const now = Number(Date.now());
	let dateDiff = now - dateNumber;

	dateDiff = doSomething(dateDiff, 1000, 60, 'SECOND');
	if(typeof dateDiff == 'string') return dateDiff;
	dateDiff = doSomething(dateDiff, 60, 60, 'MINUTE');
	if(typeof dateDiff == 'string') return dateDiff;
	dateDiff = doSomething(dateDiff, 60, 24, 'HOUR');
	if(typeof dateDiff == 'string') return dateDiff;
	dateDiff = doSomething(dateDiff, 24, 30, 'DAY');
	if(typeof dateDiff == 'string') return dateDiff;
	dateDiff = doSomething(dateDiff, 30, 12, 'MONTH');
	if(typeof dateDiff == 'string') return dateDiff;

	// convert to years
	dateDiff = Math.floor(dateDiff / 12);
	if(dateDiff == 1) return `${dateDiff} ${lang.get('YEAR')}`;

	return `${dateDiff} ${lang.get('YEARS')}`;
}

function doSomething(value, first, second, langString) {
	let diff = Math.floor(Number(value) / Number(first));
	if(diff > 1) langString += 'S';

	if(diff / second < 1) return `${diff} ${lang.get(langString)}`;
	return diff;
}

export { getTimeString, getPointsString };
