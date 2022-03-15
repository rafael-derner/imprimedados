
function imprimir(request, sender, sendResponse) {
  let spans = document.getElementsByTagName('span');
  console.log(spans);
  // spans.forEach(element => {
  //   array
  // });
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}