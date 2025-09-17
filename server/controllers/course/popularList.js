const Course = require("../../models/Course");



async function popularList (req, res) {
  try {
    // popular by isPopular flag first, else top by enrollCount
    const popular = await Course.find({ $or: [ { isPopular: true }, { enrollCount: { $gte: 10 } } ] })
      .sort({ enrollCount: -1 }).limit(10); 

    if(!popular) return res.status(404).json({ data: [] });
    return res.status(200).json({ data: popular });


  } catch (err) { res.status(500).json({ error: err.message }); }
}


module.exports = popularList    