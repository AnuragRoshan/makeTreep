export function getCurrentMonth() {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Returns a number (0-11)

    return months[currentMonth];
}