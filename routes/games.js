const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const checkAuth = require("../middlewares/auth");
const { checkIfCategoriesAvaliable } = require("../middlewares/categories");
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkIsGameExists,
  checkIfUsersAreSafe,
  checkIsVoteRequest,
} = require("../middlewares/games");
const { checkEmptyFields } = require("../middlewares/users");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
