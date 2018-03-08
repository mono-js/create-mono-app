module.exports = {
	mono: {
		<% if (modules.mongodb) { %>mongodb: {
			url: 'mongodb://localhost:27017/<%= name %>-test',
			dropDatabase: true
		},<% } %>
	}
}
