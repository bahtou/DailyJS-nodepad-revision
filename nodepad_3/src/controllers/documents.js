var Document = require('../models').Document;

//Get Document List
module.exports.index = function( req, res ) {
  Document.find({}, function( err, docs ) {
    if (err) {
      sendError( res );
      return;
    }
    else if (req.params.format) {
        res.send(docs.map( function( doc ) {
          return doc.toObject;
        }));
    }
    else {
      res.render( 'documents/index', {
        documents: docs
      });
    }
  });
};

//Get Single Document
module.exports.show = function( req, res ) {
  Document.findById( req.params.id, function( err, doc ) {
    if (err) {
      sendError( res );
      return;
    }
    else if (req.params.format) {
      var json = JSON.stringify(doc);
      res.send(json);
      return;
    }
    res.render('documents/show', {
          title: 'My Document',
          doc: doc
    });
  });
};

function sendError( res ) {
  res.send( { status: 'error' } );
}

function sendSuccess( res ) {
  res.send( { status: 'success' } );
}