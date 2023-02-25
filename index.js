
const MarkRead = document.querySelector(".mark-all"),
    notiCount = document.querySelector(".noti-count");

let numCount = 3

MarkRead.addEventListener("click", function () {
    numCount = 0;
    notiCount.innerHTML = numCount;

    document.querySelectorAll(".unread").forEach(unread => {
        unread.classList.remove("unread");
    });

    document.querySelectorAll(".red-dot").forEach(redDot => {
        redDot.classList.remove("red-dot");
    });
});