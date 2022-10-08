export default function randomChar(max_range: number): string {
	return String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * max_range));
}
