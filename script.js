//login button event handeler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
})

//deposit button event handeler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositValue = document.getElementById("depositAmount").value;
    const depositAmount = parseFloat(depositValue);

    document.getElementById("latestDeposit").innerText = depositAmount;
    document.getElementById("depositAmount").value = "";

    const currentBalence = document.getElementById("currentBalence").innerText;
    const currentBalenceAmount = parseFloat(currentBalence);
    const totalBalence = currentBalenceAmount + depositAmount;
    document.getElementById("currentBalence").innerText = totalBalence;
})

//withdraw button event handeler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawValue = document.getElementById("withdrawAmount").value;
    const withdrawAmount = parseFloat(withdrawValue);

    document.getElementById("latestWithdraw").innerText = withdrawAmount;
    document.getElementById("withdrawAmount").value = "";

    const currentBalence = document.getElementById("currentBalence").innerText;
    const currentBalenceAmount = parseFloat(currentBalence);
    const totalBalence = currentBalenceAmount - withdrawAmount;
    document.getElementById("currentBalence").innerText = totalBalence;
})

//message event handeler

const msgBtn = document.getElementById("addDeposit");
msgBtn.addEventListener("click", function () {
    const depositAndWithdrawArea = document.getElementById("msg-area");
    depositAndWithdrawArea.style.display = "none";
    const messageArea = document.getElementById("message-area-deposit");
    messageArea.style.display = "block";

    document.getElementById("successfulAmountDeposit").innerText = document.getElementById("latestDeposit").innerText;
})

const msBtn = document.getElementById("addWithdraw");
msBtn.addEventListener("click", function () {
    const depositAndWithdrawArea = document.getElementById("msg-area");
    depositAndWithdrawArea.style.display = "none";
    const messageArea = document.getElementById("message-area-withdraw");
    messageArea.style.display = "block";

    document.getElementById("successfulAmountWithdraw").innerText = document.getElementById("latestWithdraw").innerText;
})