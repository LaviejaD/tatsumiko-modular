module.exports = {
	name: "nombre",
	description: "descricion",
	alise: ["nom"],
	haspermission: ["message_send"],
	arguments: {
		number_arguments: 2,
		argumentsneed: [{ place: 0, type: "mention" }, { place: 1, type: "channel" }]
	},
	owner_only: true,
	run: (client, message, args) => {

	}
}