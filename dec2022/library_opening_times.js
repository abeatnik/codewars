//my solution for Library Opening Times: https://www.codewars.com/kata/56898ff4c115980dd8000051/train/javascript (6 kyu)

function openingTimes(str) {
    const open = {
        Monday: ["08:00", "20:00", "Tuesday"],
        Tuesday: ["08:00", "20:00", "Wednesday"],
        Wednesday: ["08:00", "20:00", "Thursday"],
        Thursday: ["08:00", "20:00", "Friday"],
        Friday: ["08:00", "20:00", "Saturday"],
        Saturday: ["10:00", "18:00", "Sunday"],
        Sunday: ["12:00", "16:30", "Monday"],
    };

    const [dayRaw, time] = str.split(" ");

    const day =
        dayRaw.split("")[0].toUpperCase() +
        dayRaw.split("").slice(1).join("").toLowerCase();

    const [hours, minutes] = time.split(":");

    const invalid =
        !open.hasOwnProperty(day) || hours >= "24" || minutes > "59";

    if (invalid) {
        return "Invalid time!";
    }

    if (time < open[day][0]) {
        return `Library opens: today ${open[day][0]}`;
    } else if (time > open[day][1] || time === open[day][1]) {
        const next = open[day][2];
        return `Library opens: ${next} ${open[next][0]}`;
    } else {
        return `Library closes at ${open[day][1]}`;
    }
}
