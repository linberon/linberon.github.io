//reset contact form after submit
document.getElementById("contactForm").reset();

//smooth scroll
$(".navbar").click(function(e) {
	event.preventDefault();
	$("html, body").animate(
		{
			scrollTop: $(this.hash).offset().top - 30
		},
		600
	);
});
