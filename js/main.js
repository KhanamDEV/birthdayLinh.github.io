$(document).ready(function () {
  let amountHate = 0;
	const CONTENT = "Đùa thôi :))). T8 bù nhé😌";
	var lengthDefaul = 0;
	var curentProcess = 0;
	let process = setInterval(function () {
		curentProcess += 1;
		let mainProcess = $("#main-process");
		mainProcess.css({ width: `${curentProcess}%` });
		mainProcess.text(`${curentProcess}%`);
		if (curentProcess >= 100) {
			clearInterval(process);
			setTimeout(function () {
        $("#waiting").removeClass("active");
        $('footer').show();
        $("main#main-container").show();
			}, 1000);
		}
	}, 50);
	$(".button-success button").click(function () {
    $(".wrap-form").show();
    $("section#wrap-select .group-button").hide();
    $('.wrap-banner').show();
  });
  $(".button-failed button").click(function () {
   $("#exampleModal").modal('show');
  });
	$("#change-content").keyup(function (e) {
    $('footer').hide();
		let contentReplace = "";
		if (lengthDefaul < CONTENT.length) {
			for(let i = 0; i <= lengthDefaul; i++){
        contentReplace+= CONTENT[i];
      }
      $(this).val(contentReplace);
			lengthDefaul++;
			console.log(lengthDefaul);
		}else{
      lengthDefaul = 0;
      $(this).val("");
      alert('Chị chị em em như này thôi nháaaaa');
    }
	});
});
