var Document = require('../../models').Document;

module.exports.index = function( req, res ) {
  Document.find({}, function( err, docs ) {
    if (err) {
      sendError( res, err );
      return;
    }

    res.render('admin/documents/index', {
      title: 'Document Index Page',
      docs: docs
    });

  });
};


module.exports.new = function( req, res ) {
  res.render('admin/documents/new', {
    title: 'New Document',
    newDoc: new Document()
  });
};

module.exports.create = function( req, res ) {
  var doc = new Document( req.body.document);
  doc.save( function( err ) {
    if (err) {
      sendError( res, err );
      return;
    }
    else if (req.params.format) {
      var json = JSON.strinigy(doc);
      res.send(json);
      return;
    }

    res.redirect( '/admin/documents' );
  });
};

module.exports.edit = function( req, res ) {
  console.log('editing');
  Document.findById( req.params.id, function( err, doc ) {
    if (err) {
      sendError( res, err );
      return;
    }

    res.render( 'admin/documents/edit', {
      title: 'Document Edit',
      doc: doc
    });
  });
};

module.exports.update = function( req, res ) {
  console.log('updating');
  var data = req.body;
  Document.findByIdAndUpdate( req.params.id, data, function( err, doc ) {
    if (err) {
      sendError( res, err );
      return;
    }
    sendSuccess(res);
  });
};

module.exports.destroy = function( req, res ) {
  console.log('destroying');
  Document.findByIdAndRemove( req.params.id, function( err ) {
    if (err) {
      sendError( res, err );
      return;
    }
    if (req.params.del) {
      res.redirect('/admin/documents/');
    }
    else {
      sendSuccess( res );
    }
  });
};

function sendError( res, err ) {
  res.send( { status: 'error', err: err } );
}

function sendSuccess( res ) {
  res.send( { status: 'success' } );
}