var time = [00, 00, 00, 00]
var setTime = [0, 0, 0, 0]
var running = true;
var counter = 0;

//initalizes and displays the counter
document.getElementById("seconds").innerHTML = "<p>0" + time[3] + "</p>";
document.getElementById("minutes").innerHTML = "<p>0" + time[2] + "</p>";
document.getElementById("hours").innerHTML = "<p>0" + time[1] + "</p>";
document.getElementById("days").innerHTML = "<p>0" + time[0] + "</p>";


var lastClick = 0;
document.getElementById("start-stop-btn").addEventListener('click', function () {

    document.getElementById("start-stop-btn").classList.toggle("start");
    document.getElementById("start-stop-btn").classList.toggle("stop");
    if (Date.now() - lastClick > 1000) {
        if (counter == 0) {
            document.getElementById("start-stop-btn").innerText = "Stop";
            running = true;
            timer(running);
            counter = 1;
        } else if (counter == 1) {
            document.getElementById("start-stop-btn").innerText = "Start";
            running = false;
            counter = 0;
        }
        lastClick = Date.now();
    }

})


function timer(runnning) {
    if (running) {
        setTimeout(function () {
            //seconds
            if (time[3] <= 60) {
                time[3]++;
                if (time[3] == 60) {
                    document.getElementById("seconds").innerHTML = "<p>0" + 0 + "</p>";
                } else {
                    if (time[3] < 10) {
                        document.getElementById("seconds").innerHTML = "<p>0" + time[3] + "</p>";

                    } else {
                        document.getElementById("seconds").innerHTML = "<p>" + time[3] + "</p>";

                    }

                }
                //minutes
                if (time[3] == 60) {
                    time[2]++;
                    time[3] = 0;
                    if (time[2] == 60) {
                        document.getElementById("minutes").innerHTML = "<p>" + 0 + "</p>";
                    } else {
                        if (time[2] < 10) {
                            document.getElementById("minutes").innerHTML = "<p>0" + time[2] + "</p>";

                        } else {
                            document.getElementById("minutes").innerHTML = "<p>" + time[2] + "</p>";

                        }
                    }
                    //hours
                    if (time[2] == 60) {
                        time[2] = 0;
                        time[1]++;
                        if (time[1] == 60) {
                            document.getElementById("hours").innerHTML = "<p>" + 0 + "</p>";
                        } else {
                            if (time[1] < 10) {
                                document.getElementById("hours").innerHTML = "<p>0" + time[1] + "</p>";
                            } else {
                                document.getElementById("hours").innerHTML = "<p>" + time[1] + "</p>";
                            }
                        }
                        //days
                        if (time[1] == 60) {
                            time[1] = 0;
                            time[0]++;
                            if (time[1] == 60) {
                                document.getElementById("days").innerHTML = "<p>" + 0 + "</p>";
                            } else {
                                if (time[0] < 10) {
                                    document.getElementById("days").innerHTML = "<p>0" + time[0] + "</p>";

                                } else {
                                    document.getElementById("days").innerHTML = "<p>" + time[0] + "</p>";

                                }
                            }
                        }
                    }
                }
                timer(running);

            }

        }, 1000)

    } else {
        reset();
    }
}
//resets times after the stop button is clicked

function reset() {
    time = [0, 0, 0, 0]
    //update after reset
    document.getElementById("seconds").innerHTML = "<p>0" + time[3] + "</p>";
    document.getElementById("minutes").innerHTML = "<p>0" + time[2] + "</p>";
    document.getElementById("hours").innerHTML = "<p>0" + time[1] + "</p>";
    document.getElementById("days").innerHTML = "<p>0" + time[0] + "</p>";

}
