let now = moment(); // new Date().getTime();
let then = moment().add(60, 'seconds'); // new Date(now + 60 * 1000);

$(".now").text(moment(now).format('h:mm:ss a'));
$(".then").text(moment(then).format('h:mm:ss a'));
$(".duration").text(moment(now).to(then));
(function timerLoop() {
  $(".difference > span").text(moment().to(then));
  $(".countdown").text(countdown(then).toString());
  requestAnimationFrame(timerLoop);
})();