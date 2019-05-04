const parseCookies = (req, res, next) => {
  let allCookies = req.headers.cookie;
  if (!allCookies) {
    next('no cookie found');
  } else {
    // console.log(shortlyid.split('=')[1]);
    let cookieArr = allCookies.split('; ');
    req.cookies = {};
    cookieArr.forEach((cookie) => {
      let parsedCookie = cookie.split('=');
      req.cookies[parsedCookie[0]] = parsedCookie[1];
    });
    next(null, 'cookies set');
  }
};

module.exports = parseCookies;