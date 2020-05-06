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
    if (event.target.className == "boxes") {
      event.target.style.backgroundColor = "lightgrey";
    }
  }

  function dragLeave(event) {
    if (event.target.className == "boxes") {
      event.target.style.backgroundColor = "";
    }
  }

  $(".box, .pattern, .shape_selection, .houses_container, .houses_container_gen, .stars_container, .stars_container_gen, .AAB_towers_container, .AAB_small").css("display", "none");

  function startPretest1() {
    $(".welcome, #startPretest1").hide();
    $(".box, .pattern, .shape_selection, .pretest1, #startPretest2").show();
  }

  function startPretest2() {
    $(".pretest1, #startPretest2").hide();
    $(".pretest2, #startAAB_demo").show();
  }
  // AAB demo
  function startAAB_demo() {
    $(".box, .shape_selection, .pretest2, #startAAB_demo").hide();
    $(".houses_container, .stars_container, .star1, .empty_big1, .empty_small1, #startAAB_gen").show();
  }

  $("#small_house3").click(function() {
    if ($("#star3").css("visibility") == "hidden")
      $("#star3").css("visibility", "visible");
    else
      $("#star3").css("visibility", "hidden");
  });

  $("#small_house4").click(function() {
    if ($("#x5").css("visibility") == "hidden")
      $("#x5").css("visibility", "visible");
    else
      $("#x5").css("visibility", "hidden");
  });

  $("#big_house2").click(function() {
    if ($("#x6").css("visibility") == "hidden")
      $("#x6").css("visibility", "visible");
    else
      $("#x6").css("visibility", "hidden");
  });

  $("#small_house5").click(function() {
    if ($("#star4").css("visibility") == "hidden")
      $("#star4").css("visibility", "visible");
    else
      $("#star4").css("visibility", "hidden");
  });

  $("#small_house6").click(function() {
    if ($("#x7").css("visibility") == "hidden")
      $("#x7").css("visibility", "visible");
    else
      $("#x7").css("visibility", "hidden");
  });

  $("#big_house3").click(function() {
    if ($("#x8").css("visibility") == "hidden")
      $("#x8").css("visibility", "visible");
    else
      $("#x8").css("visibility", "hidden");
  });

  $("#small_house7").click(function() {
    if ($("#star5").css("visibility") == "hidden")
      $("#star5").css("visibility", "visible");
    else
      $("#star5").css("visibility", "hidden");
  });

  $("#small_house8").click(function() {
    if ($("#x9").css("visibility") == "hidden")
      $("#x9").css("visibility", "visible");
    else
      $("#x9").css("visibility", "hidden");
  });

  $("#big_house4").click(function() {
    if ($("#x10").css("visibility") == "hidden")
      $("#x10").css("visibility", "visible");
    else
      $("#x10").css("visibility", "hidden");
  });

  // AAB gen

  function startAAB_gen() {
    $("#startAAB_gen").hide();
    $(".houses_container_gen, .stars_container_gen, .star1_gen, .empty_big1_gen, .empty_small1_gen, #startAAB_abs").show();
  }

  $("#small_house3_gen").click(function() {
    if ($("#star3_gen").css("visibility") == "hidden")
      $("#star3_gen").css("visibility", "visible");
    else
      $("#star3_gen").css("visibility", "hidden");
  });

  $("#small_house4_gen").click(function() {
    if ($("#x5_gen").css("visibility") == "hidden")
      $("#x5_gen").css("visibility", "visible");
    else
      $("#x5_gen").css("visibility", "hidden");
  });

  $("#big_house2_gen").click(function() {
    if ($("#x6_gen").css("visibility") == "hidden")
      $("#x6_gen").css("visibility", "visible");
    else
      $("#x6_gen").css("visibility", "hidden");
  });

  $("#small_house5_gen").click(function() {
    if ($("#star4_gen").css("visibility") == "hidden")
      $("#star4_gen").css("visibility", "visible");
    else
      $("#star4_gen").css("visibility", "hidden");
  });

  $("#small_house6_gen").click(function() {
    if ($("#x7_gen").css("visibility") == "hidden")
      $("#x7_gen").css("visibility", "visible");
    else
      $("#x7_gen").css("visibility", "hidden");
  });

  $("#big_house3_gen").click(function() {
    if ($("#x8_gen").css("visibility") == "hidden")
      $("#x8_gen").css("visibility", "visible");
    else
      $("#x8_gen").css("visibility", "hidden");
  });

  $("#small_house7_gen").click(function() {
    if ($("#star5_gen").css("visibility") == "hidden")
      $("#star5_gen").css("visibility", "visible");
    else
      $("#star5_gen").css("visibility", "hidden");
  });

  $("#small_house8_gen").click(function() {
    if ($("#x9_gen").css("visibility") == "hidden")
      $("#x9_gen").css("visibility", "visible");
    else
      $("#x9_gen").css("visibility", "hidden");
  });

  $("#big_house4_gen").click(function() {
    if ($("#x10_gen").css("visibility") == "hidden")
      $("#x10_gen").css("visibility", "visible");
    else
      $("#x10_gen").css("visibility", "hidden");
  });

  function startAAB_abs() {
    $(".houses_container, .star1, .empty_big1, .empty_small1, .star2, .empty_big2, .empty_small2, .houses_container_gen, .star1_gen, .empty_big1_gen, .empty_small1_gen, .star2_gen, .empty_big2_gen, .empty_small2_gen, #startAAB_abs").hide();
    $(".box, .shape_selection, .AAB_abs, #startABB_gen").show();
  }

  function startABB_gen() {
    $(".box, .shape_selection, .AAB_abs, #startABB_gen").hide();
    $("#startABB_abs").show();
  }

  function startABB_abs() {
    $("#AABAAB_tower, .AAB_towers_container, .AAB_small, #startABB_abs").hide();
    $(".box, .shape_selection, .ABB_abs").show();
  }