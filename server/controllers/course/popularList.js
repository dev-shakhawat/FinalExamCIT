const Course = require("../../models/Course");



async function popularList (req, res) {
  try {
    // popular by isPopular flag first, else top by enrollCount
    const popular = await Course.find({ $or: [ { isPopular: true }, { enrollCount: { $gte: 10 } } ] })
      .sort({ enrollCount: -1 }).limit(10);
    res.json(popular);
  } catch (err) { res.status(500).json({ error: err.message }); }
}


module.exports = popularList    