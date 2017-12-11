const test = require('ava')
const { join } = require('path')

const { start, stop } = require('mono-test-utils')

let ctx

test.before('Start mono server (env: test)', async () => {
	// ctx = { server, app, conf, stdout, stderr }
	ctx = await start(join(__dirname, 'fixtures/ok/'))
})

test('Check hello() method', (t) => {
	const { hello } = require('../')
	const s = hello()

	t.is(s, `Hello ${ctx.conf.mono.<%= moduleKey %>.username}`)
})

test.after('Stop mono server', async () => {
	await stop(ctx.server)
})
