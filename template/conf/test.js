module.exports = {
	mono: {
		<% if (modules.mongodb) { %>mongodb: {
			url: 'mongodb://localhost:27017',
			dbName: '<%= name %>-test',
			dropDatabase: true
		},<% } %>
	}
}
