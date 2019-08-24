var time = [0, 0, 0, 0]
var setTime = [0, 0, 0, 0]
var running = true;
var counter = 0;
document.getElementById("seconds").innerHTML = "<p>" + time[3] + "</p>";
document.getElementById("minutes").innerHTML = "<p>" + time[2] + "</p>";
document.getElementById("hours").innerHTML = "<p>" + time[1] + "</p>";
document.getElementById("days").innerHTML = "<p>" + time[0] + "</p>";


document.getElementById("start-stop-btn").addEventListener('click', function () {

    document.getElementById("start-stop-btn").classList.toggle("start");
    document.getElementById("start-stop-btn").classList.toggle("stop");

    if (counter == 0) {
        document.getElementById("start-stop-btn").innerText = "Stop";
        running = true;
        timer(running);
        counter = 1;
    } else if (counter == 1) {
        document.getElementById("start-stop-btn").innerText = "Start";
        running = false;
        counter = 0;
        reset();
    }
})

function timer(runnning) {
    if (running) {
        setTimeout(function () {
            //seconds
            if (time[3] <= 0 || time[3] <= 60) {
                time[3]++;
                if (time[3] == 60) {
                    document.getElementById("seconds").innerHTML = "<p>" + 0 + "</p>";
                } else {
                    document.getElementById("seconds").innerHTML = "<p>" + time[3] + "</p>";

                }

                //minutes
                if (time[3] == 60) {
                    time[2]++;
                    document.getElementById("minutes").innerHTML = "<p>" + time[2] + "</p>";

                    time[3] = 0;
                    //hours
                    if (time[2] > 59) {
                        document.getElementById("hours").innerHTML = "<p>" + time[1] + "</p>";
                        time[1]++;
                        //days
                        if (time[1] > 59) {
                            time[0]++;
                            document.getElementById("days").innerHTML = "<p>" + time[0] + "</p>";
                        }
                    }
                }
                timer(running);

            }

        }, 1000)

    } else {
    }
}
function reset() {
    time = [0, 0, 0, 0]
}