const getRaffle = async (request) => {
    console.log(request);
    const { id } = request.headers;

    const Raffles = await RaffleModel.find(
        {
            where:
            {
                id
            }
        }
    );
    return Raffles;
};

const makeRaffle = async (request) => {
    const { bet, player } = request.payload;
    const sortedNumber = Number(Math.random(100));
    let response;
    if (bet === sortedNumber) {
        const Raffle = new RaffleModel();
        Raffle.winner = player;
        Raffle.number = sortedNumber;
        const repository = getRepository(RaffleModel);
        repository.save(Raffle);
        response = "Congratz, you win!";
    }
    else {
        response = `You failed, the sorted number is: ${sortedNumber}`;
    }
    return response;
};

const updateRaffle = async (request) => {
    const { id, player } = request.payload;

    const Raffle = RaffleModel.find(
        {
            where:
            {
                id
            }
        }
    );

    Raffle.winner = player;
    const repository = getRepository(RaffleModel);
    repository.save(Raffle);

    return "Raffle updated";
};

const deleteRaffle = async (request) => {
    const { id } = request.payload;
    const Raffle = await RaffleModel.findOneOrFail({ id });
    Raffle.delete();

    return "Raffle deleted";
};

module.exports = {
    getRaffle,
    makeRaffle,
    updateRaffle,
    deleteRaffle,
}   