const superb = require('superb')
const _ = require('lodash')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of your new Mono module?',
			default: ':folderName:'
    },
    description: {
      message: 'How would you descripe your Mono module?',
      default: `${_.capitalize(superb())} module for Mono`
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:'
    }
	},
	data({ name }) {
		return {
			moduleKey: _.camelCase(name.replace(/^mono-/, ''))
		}
	},
  move: {
    'gitignore': '.gitignore',
    'pkg.json': 'package.json'
  },
  showTip: true,
  gitInit: true,
  npmInstall: true
}
