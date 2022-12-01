const shortener = require('node-url-shortener');
const core = require('@actions/core');
const github = require('@actions/github');

const inputs = {
	url: core.getInput('url'),
}

shortener.short(inputs.url, function(res) {
	const url = new URL(res)
	if (!url.protocol.startsWith("http")) {
		process.exitCode = 1;
		console.log(res);
	} else {
		core.setOutput("short_url", url.toString());
	}
});
