function send() {
    let body = document.querySelector("#body").value;
    window.open(`mailto:ddmlf7@gmail.com?body=${body}`);
}

function copyTextToClipboard() {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard('ddmlf7@gmail.com');
      return;
    }
    navigator.clipboard.writeText('ddmlf7@gmail.com').then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }