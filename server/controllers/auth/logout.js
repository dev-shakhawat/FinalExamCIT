

 async function logout(req, res) { 
  
  // cookie remove
  res.cookie('FinalExamCIT', '', {
    httpOnly: true,
    expires: new Date(0), // immediate expiry
    sameSite: 'lax',      // frontend cross-site issues avoid
    secure: false
  });

  return res.status(200).json({ logout: true });
 
}

module.exports = logout;