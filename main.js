// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});

$('#view-contact').on('click', function() {
  const contact = $('#contact').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    1300
  );
});
