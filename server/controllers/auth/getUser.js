 
async function getuserData(req, res) {
    try { 
  
        return res.status(200).json({ user: req.user });

    } catch (err) { res.status(500).json({ error: err.message || "Something went wrong" }); }
}


module.exports = getuserData