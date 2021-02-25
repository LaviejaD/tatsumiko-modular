module.exports = {
	name: "nombre",
	description: "descricion",
	alise: ["nom"],
	haspermission: ["message_send"],
	arguments: {
		//si arguments es igual a 0 no es necesario vereficar argumentsneed
		arguments: 2,
		argumentsneed: [{ place: 0, type: "mention" }, { place: 1, type: "channel" }]
	},
	owner_only: true,
	run: (client, message, args) => {

	}
}