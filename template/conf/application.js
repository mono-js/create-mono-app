/*
** This is your application configuration
** See https://terrajs.org/mono/configuration
*/

module.exports = {
	mono: {
		// See https://terrajs.org/mono/configuration/modules
		<% if (mongodb === 'yes' && documentation === 'no') { %>modules: ['mono-mongodb'],<% } %>
		<% if (mongodb === 'no' && documentation === 'yes') { %>modules: ['mono-doc'],<% } %>
		<% if (mongodb === 'yes' && documentation === 'yes') { %>modules: [
			'mono-mongodb',
			'mono-doc'
		],<% } %>
		// See https://terrajs.org/mono/configuration/http
		http: {
			port: 8000
		},
		// See https://terrajs.org/mono/configuration/log
		log: {
			level: 'verbose'
		}
	}
}
