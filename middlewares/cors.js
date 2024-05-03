const allowedCors = [
    "http://practicum.yandex.ru",
    "http://students-projecrs.ru",
    "localhost:3000",
];

function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    }
    next(); // Идём дальше, не задерживаем очередь
};
module.exports = cors;
