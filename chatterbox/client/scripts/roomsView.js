var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: [],

  initialize: function() {
  
    RoomsView.roomChange(); 
    RoomsView.roomAdd();
    
  },

  render: function() {
    $('select').empty();

    Messages.results.forEach(function(msg) {
      if (msg.roomname) {
        Rooms[msg.roomname] = msg.roomname;
      }
    });

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
  },

  roomAdd: function() {
    RoomsView.$button.on('click', function() {
      var newRoom = prompt('What do you want to name your room?');
      Rooms[newRoom] = newRoom;
      RoomsView.render();
    });
  }
};
