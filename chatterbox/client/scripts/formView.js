var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var msg = $('#message').val();
    if (msg) {
      var msgForServ = FormView.createMessage(msg);
      Parse.create(msgForServ);
      $('#message').val('');
    } else {
      console.log('please enter a message!');
    }
  },

  createMessage: function(msg) {
    var outputMsg = {
      username: App.username,
      text: msg,
      roomname: RoomsView.currentRoom[0] ? RoomsView.currentRoom[0] : 'default',
      createdAt: new Date(),
    };

    return outputMsg;
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};