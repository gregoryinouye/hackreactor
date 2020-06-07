var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function() {
    $('#chats').empty();
    if(Object.keys(Messages).length === 0) {setTimeout(MessagesView.render, 1000)} else {
      Messages.results.forEach(msg => {
        if (RoomsView.currentRoom.includes(msg.roomname)) {
          MessagesView.renderMessage(msg);
        }
      });
    }
  },

  renderMessage: function(message) {
    message.username = message.username ? message.username : 'unknown';
    message.text = message.text ? message.text : 'none';
    message.createdAt = message.createdAt ? message.createdAt : 'unknown';
    $('#chats').append(MessageView.render(message));
  }
};