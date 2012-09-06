module.exports.index = function( req, res ) {
  res.render('index', {title: 'Redirecting'});

  function redirecting() {
    res.redirect( '/documents' );
  }

};