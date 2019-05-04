const parseCookies = (req, res, next) => {
  let shortlyid = req.headers.cookie;
  if (!shortlyid) {
    next('no cookie found');
  } else {
    // console.log(shortlyid.split('=')[1]);
    res.set('Set-Cookie', shortlyid);
    res.end();
    next(null, 'cookie set');
  }
};

module.exports = parseCookies;