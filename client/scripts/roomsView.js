var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: [],

  initialize: function() {
    
    setTimeout(function() {
      Messages.results.forEach(function(msg) {
        if (msg.roomname) {
          Rooms[msg.roomname] = msg.roomname;
        }
      });
      RoomsView.render(); 
      //RoomsView.roomChange(); 
    }, 1000);
    setInterval(function() {
      Messages.results.forEach(function(msg) {
        if (msg.roomname) {
          Rooms[msg.roomname] = msg.roomname;
        }
      });
      RoomsView.render();
    }, 50000);
  },

  render: function() {
    $('select').empty();
    Object.keys(Rooms).forEach(keyNames => RoomsView.renderRoom(keyNames));
  },

  renderRoom: function(roomName) {
    var rn = {roomname: roomName};
    $('select').append(RoomsView.roomHtml(rn));
  },

  roomHtml: _.template(
    "<option value=<%- roomname %> class='roomname'><%- roomname %></option>"
  ),

  roomChange: function() {
    RoomsView.$select.change(function() {
      RoomsView.currentRoom = [];
      $("select option:selected").each(function() {
        RoomsView.currentRoom.push(this.text);
      });
      MessagesView.render();
    });
  }
};
