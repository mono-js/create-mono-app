const superb = require('superb')
const _ = require('lodash')

const monoModules = [
	{
		key: 'doc',
		name: 'API Documentation',
		module: 'mono-doc',
		checked: true
	},
	{
		key: 'mongodb',
		module: 'mono-mongodb',
		name: 'MongoDB',
		checked: true
	},
	{
		key: 'elasticsearch',
		module: 'mono-elasticsearch',
		name: 'Elastic Search'
	},
	{
		key: 'redis',
		module: 'mono-redis',
		name: 'Redis'
	},
	{
		key: 'mail',
		module: 'mono-mail',
		name: 'Mails'
	},
	{
		key: 'io',
		module: 'mono-io',
		name: 'Socket.io (mono-io)'
	},
	{
		key: 'push',
		module: 'mono-push',
		name: 'Push events (requires MongoDB & Socket.io modules)'
	},
	{
		key: 'notifications',
		module: 'mono-notifications',
		name: 'Notifications'
	}
]

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of your new Mono app?',
			default: ':folderName:'
    },
    description: {
      message: 'How would you descripe your Mono app?',
      default: `${_.capitalize(superb())} app with Mono`
		},
		eslint: {
      message: 'Do you want to use ESLINT?',
      type: 'list',
      choices: ['yes', 'no'],
      default: 'yes'
		},
    modules: {
      message: 'What Mono modules do you want to use?',
      type: 'checkbox',
      choices: monoModules
		}
	},
	data(answers) {
		const modules = {}
		answers.modulesConf = []

		answers.modules.forEach((name) => {
			const monoModule = monoModules.find((m) => m.name === name)

			if (!monoModule) return
			modules[monoModule.key] = true
			answers.modulesConf.push(monoModule.module)
		})
		answers.modules = modules

		return answers
	},
	filters: {
    'src/todos/**': 'modules.mongodb === true',
    '.eslintrc.json': 'eslint === "yes"'
  },
  move: {
    'gitignore': '.gitignore',
    'pkg.json': 'package.json'
  },
  showTip: true,
  gitInit: true,
	npmInstall: true
}
