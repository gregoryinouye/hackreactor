var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    setTimeout(function() {
      Messages.results.forEach(function(msg) {
        if (msg.roomname) {
          Rooms[msg.roomname] = {'roomname': msg.roomname};
        }
      });
      RoomsView.render();  
    }, 1000);
    setInterval(function() {
      Messages.results.forEach(function(msg) {
        if (msg.roomname) {
          Rooms[msg.roomname] = {'roomname': msg.roomname};
        }
      });
      RoomsView.render();
    }, 50000);
  },

  render: function() {
    $('select').empty();
    Object.keys(Rooms).forEach(keyNames => RoomsView.renderRoom(RoomsView.roomHtml(Rooms[keyNames])));
  },

  renderRoom: function(roomName) {
    $('select').append(roomName);
  },

  roomHtml: _.template(
    "<option value=<%- roomname %>><%- roomname %></option>"
    )
};
