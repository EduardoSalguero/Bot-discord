module.exports = {
    name: 'hola',
    description: 'Dice hola',
    execute(message, args) {

        message.channel.send(`Hola ${message.member.nickname}!`);
    }
};