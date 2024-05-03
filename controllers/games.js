const sendAllGames = async (req, res) => {
    res.send(req.games);
};
const sendUpdatedGames = async (req, res) => {
    res.send ({
        games: req.games,
        undated: req.updatedObject,
    });
};

module.exports = {sendAllGames, sendUpdatedGames};