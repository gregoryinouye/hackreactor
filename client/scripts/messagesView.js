var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(result => Messages = result);
    setInterval(function() {
      Parse.readAll(result => Messages = result);
      MessagesView.render();
    }, 1000);
  },

  render: function() {
    $('#chats').empty();
    Messages.results.forEach(msg => {
      if (RoomsView.currentRoom.includes(msg.roomname)) {
        MessagesView.renderMessage(msg);
      }
    });
  },

  renderMessage: function(message) {
    message.username = message.username ? message.username : 'unknown';
    message.text = message.text ? message.text : 'none';
    message.createdAt = message.createdAt ? message.createdAt : 'unknown';
    $('#chats').append(MessageView.render(message));
  }
};