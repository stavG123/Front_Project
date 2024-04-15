const SizeColor = {
  data() {
    return {
      // Define data properties for user room, days, times, and reservations
      user_room: { name: "" }, // User's selected room
      rooms: [], // List of available rooms
      user_day: { name: "", code: "", desc: "" }, // User's selected day
      days: [], // List of available days
      user_time: { time: "", time2: "" }, // User's selected time
      times: [], // List of available times
      user_reservation: [], // List to store user reservations
    };
  },
  created() {
    // fetch data from JSON file
    fetch("jason/html4.json")
      .then((response) => response.json())
      .then((data) => {
        // Set fetched data to corresponding data 
        this.rooms = data.rooms;
        this.days = data.days;
        this.times = data.times;
        //chosing the first auto
        //to not make error
        this.user_room = this.rooms[0];
        this.user_day = this.days[0];
        this.user_time = this.times[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
     // Method to handle making a reservation
    makeGuess: function (event) {
     let aGuess =
        this.user_room.name +
        " " +
        this.user_day.name +
        " " +
        this.user_time.time;
      //if it is did not find it
      if (this.user_reservation.indexOf(aGuess) == -1) {
        this.user_reservation.push(aGuess);
        console.log(this.user_reservation);
      } else {
        alert("OMG can not do that");
      }
    },
  },
};

Vue.createApp(SizeColor).mount("#vue_radio");
