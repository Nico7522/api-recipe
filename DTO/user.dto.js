class UserDTO {
    constructor({id, name, surname, birthdate, email, avatar, valid, createdAt }){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.birthdate = birthdate,
        this.email = email,
        this.avatar= avatar,
        this.valid = valid,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = { UserDTO }