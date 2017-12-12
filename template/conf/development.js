module.exports = {<% if (mongodb === 'yes') { %>
	mono: {
		mongodb: {
			url: 'mongodb://localhost:27017/<%= name %>'
		}
	}<% } %>}
