class userDto {
    constructor(user) {
        this.id = user._id;
        this.name = user.name;
        this.email = user.email;
    }
}

module.exports = userDto;