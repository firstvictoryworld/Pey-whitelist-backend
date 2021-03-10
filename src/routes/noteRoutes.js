const notesController = require('../controllers/notesController');

module.exports = (app) => {
  //# create a note
  app.post('/api/whitelists', notesController.create);

  //#get the list of notes
  app.get('/api/whitelists', notesController.fetch);

  //#get a single note
  app.get('/api/whitelists/:id', notesController.get);

  //#check if this address is belong to whitelist or not
  app.get('/api/check/:id', notesController.check);

  //#update a note
  app.put('/api/whitelists/:id', notesController.update);

  //#delete a note
  app.delete('/api/whitelists/:id', notesController.delete);
};
