var controllers = require('../controllers')
  , home = controllers.Home
  , documents = controllers.Documents
  , adminDoc = controllers.AdminDoc;


module.exports = function( app ) {
  //Documents Page
  app.get( '/', function( req, res) {
    res.redirect('/documents');
  });

  app.get( '/documents.:format?', documents.index);
  app.get( '/documents/:id.:format?', documents.show);

  //Admin section
  app.get( '/admin/documents', adminDoc.index);
  app.get( '/admin/documents/new', adminDoc.new);
  app.post( '/admin/documents', adminDoc.create);
  app.get( '/admin/documents/:id/edit', adminDoc.edit);
  app.put( '/admin/documents/:id', adminDoc.update);
  app['delete']( '/admin/documents/:id', adminDoc.destroy );
  app.get( '/admin/documents/:id.:del', adminDoc.destroy);
};