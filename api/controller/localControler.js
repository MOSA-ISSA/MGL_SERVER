
const checkRespond =async(req, res) => {
    res.status(200).json({
        message: "server respond",
    });
}

module.exports={checkRespond}