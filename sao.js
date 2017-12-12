const superb = require('superb')
const _ = require('lodash')

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
    mongodb: {
      message: 'Do you want to use MongoDB in your app?',
      type: 'list',
      choices: ['yes', 'no'],
      default: 'yes'
		},
		// documentation: {
		// 	message: 'Do you want to auto-generate your API documentation?',
    //   type: 'list',
    //   choices: ['yes', 'no'],
    //   default: 'yes'
		// }
	},
	data: {
		documentation: 'no'
	},
	filters: {
    'src/todos/**': 'mongodb === "yes"',
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
