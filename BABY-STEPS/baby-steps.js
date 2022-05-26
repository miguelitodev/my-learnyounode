let args = process.argv;

function getCommand(path) {
	let last = path.split("\\");

	last = last[last.length - 1];
	last = last.split(".")[0];

	return last;
}

function getScriptPath(path) {
	return path.split(":")[1];
}

args[0] = getCommand(args[0]);
args[1] = getScriptPath(args[1]);

console.log(args);
