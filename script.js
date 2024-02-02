
const timetableData = {
    "cse": {
        "monday": [
            { time: "8:30 - 9:25", subject: "-" },
            { time: "9:30  - 10:25 ", subject: "CS 204" },
            { time: "10:30  - 11:25 ", subject: "CS 202" },
            { time: "11:30 - 12:25 ", subject: "CS 208" },
            { time: "12:30 - 13:25 ", subject: "Lunch Break" },
            { time: "14:30 - 17:25 ", subject: "P: CS 254" },
        ],
        "tuesday": [
            { time: "8:30 - 9:25", subject: "-" },
            { time: "9:30  - 10:25 ", subject: "-" },
            { time: "10:30  - 11:25 ", subject: "CS 206" },
            { time: "11:30  - 12:25 ", subject: "CS 204" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 17:25 ", subject: "P: MA 204CS" },
        ],
        "wednesday": [
            { time: "8:30 - 9:25 ", subject: "-" },
            { time: "9:30  - 10:25 ", subject: "CS 206" },
            { time: "10:30  - 11:25 ", subject: "CS 202" },
            { time: "11:30  - 12:25 ", subject: "For Public Lecture" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 17:25 ", subject: "P: CS 256" },
        ],
        "thursday": [
            { time: "8:30 - 9:25", subject: "-" },
            { time: "9:30  - 10:25 ", subject: "T: CS 206" },
            { time: "10:30  - 11:25 ", subject: "T: CS 208" },
            { time: "11:30  - 12:25 ", subject: "Lunch Break" },
            { time: "12:30  - 13:25 ", subject: "-" },
            { time: "14:30  - 17:25 ", subject: "-" },
        ],
        "friday": [
            { time: "8:30 - 9:25", subject: "-" },
            { time: "9:30  - 10:25 ", subject: "T: CS 334/434" },
            { time: "10:30  - 11:25 ", subject: "T: CS 204" },
            { time: "11:30  - 12:25 ", subject: "T: CS 208" },
            { time: "12:30  - 13:25 ", subject: "T: CS 202" },
            { time: "14:30  - 17:25 ", subject: "Lunch Break" },
           { time: "17:30  - 14:25 ", subject: "P: CS 258"},
        ],
        "saturday": [
            { time: "8:30  - 9:25 ", subject: "L: HS 302/ ES 302" },
        ],
    },
    "ce": {
        "monday": [
            { time: "9:30  - 10:25 ", subject: "CE 202" },
            { time: "10:30  - 11:25 ", subject: "CE 206" },
            { time: "11:30  - 12:25 ", subject: "-" },
            { time: "12:30  - 13:25 ", subject: "L: AA 204" },
            { time: "14:30  - 17:25 ", subject: "P: MA 204CE" },
            {time: "17:30  - 14:25 ", subject: "P: MA 204MM" },
        ],
        "tuesday": [
            { time: "9:30  - 10:25 ", subject: "CE 208" },
            { time: "10:30  - 11:25 ", subject: "CE 204" },
            { time: "11:30  - 12:25 ", subject: "CE 202" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 17:25 ", subject: "P: CE 254" },
        ],
        "wednesday": [
            { time: "9:30  - 10:25 ", subject: "CE 204" },
            { time: "10:30  - 11:25 ", subject: "CE 206" },
            { time: "11:30  - 12:25 ", subject: "PUBLIC LECT." },
            { time: "12:30  - 13:25 ", subject: "L: AA 204" },
            { time: "14:30  - 17:25 ", subject: "P: CE 254/256" },
        ],
        "thursday": [
            { time: "9:30  - 10:25 ", subject: "T: CE 204" },
            { time: "10:30  - 11:25 ", subject: "L: CE 208" },
            { time: "11:30  - 12:25 ", subject: "Lunch Break" },
            { time: "12:30  - 13:25 ", subject: "-" },
            { time: "14:30  - 17:25 ", subject: "-" },
        ],
        "friday": [
            { time: "9:30  - 10:25 ", subject: "T: CE 202" },
            { time: "10:30  - 11:25 ", subject: "T: CE 208" },
            { time: "11:30  - 12:25 ", subject: "T: CE 206" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 15:25 ", subject: "T: AA 204" },
        ],
        "saturday": [
            { time: "8:30  - 9:25 ", subject: "L: HS 302/ ES 302" },]
    },
    "me": {
        "monday": [
            { time: "9:30  - 10:25 ", subject: "ME 208" },
            { time: "10:30  - 11:25 ", subject: "ME 206" },
            { time: "11:30  - 12:25 ", subject: "ME 202" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "13:30 - 14:25", subject: "L: HS 213" },
            { time: "14:30  - 17:25 ", subject: "P: ME 254 (M2)/P: ME 258 (M1)" },
        ],
        "tuesday": [
            { time: "9:30  - 10:25 ", subject: "ME 202" },
            { time: "10:30  - 11:25 ", subject: "ME 204" },
            { time: "11:30  - 12:25 ", subject: "ME 208" },
            { time: "14:30  - 17:25 ", subject: "P: ME 258 (M3)" },
        ],
        "wednesday": [
            { time: "10:30  - 11:25 ", subject: "ME 204" },
            { time: "10:30  - 11:25 ", subject: "ME 206" },
            { time: "11:30 - 12:25", subject: "PUBLIC LECT." },
            { time: "13:30  - 14:25 ", subject: "L: HS 213" },
            { time: "14:30  - 17:25 ", subject: "P: ME 254 (M1)" },
           
        ],
        "thursday": [
            { time: "9:30  - 10:25 ", subject: "L: ME 206" },
            { time: "10:30  - 11:25 ", subject: "T: ME 204" },
            { time: "11:30  - 12:25 ", subject: "L: ME 202" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "16:30 - 18:25", subject: "P:MA 204 ME" },
            
        ],
        "friday": [
            { time: "9:30  - 10:25 ", subject: "T: ME 208" },
            { time: "10:30  - 11:25 ", subject: "T: ME 202" },
            { time: "11:30  - 12:25 ", subject: "T: ME 206" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "13:30  - 14:25 ", subject: "L: HS 213" },
            

        ],
        "saturday": [
            { time: "8:30  - 9:25 ", subject: "L: HS 302/ ES 302" },
        ],
    },
    "ee": {
        "monday": [
            { time: "9:30  - 10:25 ", subject: "EE 206" },
            { time: "10:30  - 11:25 ", subject: "EE 202" },
            { time: "11:30  - 12:25 ", subject: "EE 208" },
            { time: "14:30  - 17:25 ", subject: "P: EE 256 (E2) (4 hr.)/P: EE 258 (E1) (3 hr.)" },
        ],
        "tuesday": [
            { time: "10:30  - 11:25 ", subject: "T: EE 204" },
            { time: "10:30  - 11:25 ", subject: "T: EE 206" },
            
        ],
        "wednesday": [
            { time: "10:30  - 11:25 ", subject: "T: EE 204" },
            { time: "11:30  - 12:25 ", subject: "T: EE 202" },
            { time: "14:30  - 17:25 ", subject: "P: EE 254 (E2) (3 hr)/P: EE 256 (E1) (4 hr)" },
        ],
        "thursday": [
            { time: "9:30  - 10:25 ", subject: "T: EE 202" },
            { time: "10:30  - 11:25 ", subject: "T: EE 204" },
            { time: "11:30  - 12:25 ", subject: "T: EE 208" },
            { time: "14:30  - 16:25 ", subject: "P: MA 204EE" },
        ],
        "friday": [
            { time: "9:30  - 10:25 ", subject: "T: EE 206" },
            { time: "10:30  - 11:25 ", subject: "T: EE 208" },
            { time: "11:30  - 12:25 ", subject: "T: EE 202" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
        ],
        "saturday": [
            { time: "8:30  - 9:25 ", subject: "L: HS 302/ ES 302" },
        ],
    },
    "mems": {
        "monday": [
            { time: "9:30  - 10:25 ", subject: "L: MM 202" },
            { time: "10:30  - 11:25 ", subject: "L: MM 208" },
            { time: "11:30  - 12:25 ", subject: "L: MM 204" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
        ],
        "tuesday": [
            { time: "10:30  - 11:25 ", subject: "L: MM 206" },
            { time: "11:30  - 12:25 ", subject: "L: MM 202" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 17:25 ", subject: "P: MM 254 (M2)/P: MM 258 (M1)" },
        ],
        "wednesday": [
            { time: "9:30  - 10:25 ", subject: "L: MM 206" },
            { time: "10:30  - 11:25 ", subject: "L: MM 208" },
            { time: "11:30  - 12:25 ", subject: "PUBLIC LECT." },

        ],
        "thursday": [
            { time: "10:30  - 11:25 ", subject: "T: MM 206" },
            { time: "11:30  - 12:25 ", subject: "L: MM 204" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30 - 17:25", subject: "P:CE 310/354" },

        ],
        "friday": [
            { time: "9:30 - 10:25 ", subject: "T:MM202" },
            { time: "10:30  - 11:25 ", subject: "T: MM 204" },
            { time: "11:30  - 12:25 ", subject: "T: MM 208" },
            { time: "12:30  - 13:25 ", subject: "Lunch Break" },
            { time: "14:30  - 17:25 ", subject: "P:CE 352/358" },
        ],
        "saturday": [
            { time: "8:30  - 9:25 ", subject: "L: HS 302/ ES 302" },
            
        ],
    }}

function showTimetable() {
    const branchSelect = document.getElementById("branchSelect");
    const selectedBranch = branchSelect.value;
    const timetableDisplay = document.getElementById("timetableDisplay");

    // Get the current day
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayIndex = new Date().getDay();
    const today = daysOfWeek[todayIndex];

    // to fetch the timetable data based on the selected branch from backend
    const timetable = timetableData[selectedBranch][today];

    // after 6 pm to show tomorrow's classes
    const now = new Date();
    const isAfter6PM = now.getHours() >= 18;
    const tomorrow = daysOfWeek[(todayIndex + 1) % 7];
    const nextDayTimetable = isAfter6PM ? timetableData[selectedBranch][tomorrow] : null;

    // Display the timetable
    let timetableHTML = `<h2>${today.charAt(0).toUpperCase() + today.slice(1)}'s Classes</h2>`;

    if (timetable && timetable.length > 0) {
        timetableHTML += "<ul>";
        timetable.forEach(entry => {
            timetableHTML += `<li>${entry.time} - ${entry.subject}</li>`;
        });
        timetableHTML += "</ul>";
    } else {
        timetableHTML += "<p>No classes today!</p>";
    }

    if (nextDayTimetable && nextDayTimetable.length > 0) {
        timetableHTML += `<h2>${tomorrow.charAt(0).toUpperCase() + tomorrow.slice(1)}'s Classes</h2>`;
        timetableHTML += "<ul>";
        nextDayTimetable.forEach(entry => {
            timetableHTML += `<li>${entry.time} - ${entry.subject}</li>`;
        });
        timetableHTML += "</ul>";
    }

    // Display timetable in the timetableDisplay div
    timetableDisplay.innerHTML = timetableHTML;
}
