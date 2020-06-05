function allowDrop(ev) {
    event.preventDefault();
  }

  function drag(ev) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function drop(ev) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data).cloneNode(true));
    event.preventDefault();
    event.target.style.backgroundColor = "";
  }

  // https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp

  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function dragEnter(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.backgroundColor = "lightgrey";
    }
  }

  function dragLeave(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.backgroundColor = "";
    }
  }

  // if the child makes a mistake, they can click on the shape to remove it
  // https://stackoverflow.com/questions/30492918/how-to-remove-last-element-from-div user: Cliff Gunn and https://stackoverflow.com/questions/4469059/remove-elements-onclick-including-the-remove-button-itself-with-jquery user: xandy
  $("#box1").click(function() {
    $(this).children().remove();
  });

  $("#box2").click(function() {
    $(this).children().remove();
  });

  $("#box3").click(function() {
    $(this).children().remove();
  });

  $("#box4").click(function() {
    $(this).children().remove();
  });

  $("#box5").click(function() {
    $(this).children().remove();
  });

  $("#box6").click(function() {
    $(this).children().remove();
  });

  // showing token/no token under houses

  $("#house7").click(function() {
    $("#star3").show();
  });

  $("#house8").click(function() {
    $("#x5").show();
  });

  $("#house9").click(function() {
    $("#x6").show();
  });

  $("#house10").click(function() {
    $("#star4").show();
  });

  $("#house11").click(function() {
    $("#x7").show();
  });

  $("#house12").click(function() {
    $("#x8").show();
  });

  $("#house13").click(function() {
    $("#star5").show();
  });

  $("#house14").click(function() {
    $("#x9").show();
  });

  $("#house15").click(function() {
    $("#x10").show();
  });

  // next button to show AAB generalization task
  function showAABGen() {
    $(".cars, .tokens_gen").show();
    $("#AABGen").hide();
  }

// showing tokens/no tokens under cars
  $("#car7").click(function() {
    $("#star3_gen").show();
  });

  $("#car8").click(function() {
    $("#x5_gen").show();
  });

  $("#car9").click(function() {
    $("#x6_gen").show();
  });

  $("#car10").click(function() {
    $("#star4_gen").show();
  });

  $("#car11").click(function() {
    $("#x7_gen").show();
  });

  $("#car12").click(function() {
    $("#x8_gen").show();
  });

  $("#car13").click(function() {
    $("#star5_gen").show();
  });

  $("#car14").click(function() {
    $("#x9_gen").show();
  });

  $("#car15").click(function() {
    $("#x10_gen").show();
  });

  // random assignment of conditions
  //
  // function getCondition() {
  //
  // var condition = Math.floor((Math.random() * 10) + 1);
  //   if (condition <= 5) {
  //    location.href = "houses.html";
  //   }
  //   else {
  //      location.href = "AABabs1_EG.html";
  //   }
  // }
