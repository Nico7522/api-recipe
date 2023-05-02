class UserDTO {
    constructor({id, name, surname, birthdate, email, avatar, valid, CreatedAt }){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.birthdate = birthdate,
        this.email = email,
        this.avatar= avatar,
        this.valid = valid,
        this.CreatedAt = CreatedAt
    }
}

module.exports = { UserDTO }