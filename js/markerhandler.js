AFRAME.registerComponent("markerhandler", {
  init: async function() {
    // Get the toys collection
    var toys = await this.getToys();
    
    this.el.addEventListener("markerFound", () => {
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    // Handling Click Events
    orderButtton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks For Order !",
        text: "  ",
        timer: 2000,
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work In Progress"
      });
    });
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },

  getToys: async function() {
    //Get the toys from the firestore database
    return await firebase
      .firestore()
      .collection("toys")
      .get()
      .then(snap => {
        return snap.docs.map(doc => doc.data());
      });
  }
});
