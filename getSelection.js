console.log('content script 00000000');
console.log(chrome.tabs);
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action == "sling-reply") {
    selected = document.getSelection()
    // ugly thing to work on later :)
    msg_box = selected.baseNode.parentElement.closest(".message-repeat");
    author = msg_box.querySelector(".message-author").querySelector(".link-to-profile").querySelector("span").textContent
    input_field = document.querySelector(".messages-footer").querySelector("form").querySelector("textarea")

    input_field.style.height = "150px";
    if (input_field.value.length != 0) {
      input_field.value = input_field.value + "\n\n";
    }

    input_field.value = input_field.value + "> **" + author + "**\n> " + msg.text + "\n\n";
  }
});