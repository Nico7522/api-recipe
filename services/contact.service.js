const { main } = require("../mail/main")

const contactService = {
    post: async (subject, body, mail) => {
        const message = await main.contact(subject, body, mail)
        return message

    }
}

module.exports = contactService