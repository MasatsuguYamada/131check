const kc_Enter = 13;
window.onload = function () {
  console.log("a");
  setAttr_keydown(document.getElementById('topDv'));
}

function setAttr_keydown(el) {
  console.log(el);
  if (el != null && el.tagName != 'BUTTON') {
    console.log("a");
    setEvent(el);
    let cnt = el.children.length;
    for (let i = 0; i < cnt; i++) {
      setAttr_keydown(el.children[i]);
    }
  }
}


function setEvent(el) {
  console.log(el)
  if (el == null) { return; }
  el.addEventListener('keydown', moveNextElm);
  el.addEventListener('focus', focusInput, false);
}


function moveNextElm(ev) {
　if (ev.shiftKey == true) { return; }
　if (ev.keyCode == kc_Enter) {
　　try {
　　　let el = getNextElm(ev.target);
　　　if (el != null) { el.focus(); }
　　　el = null;
　　} catch (e) { }
　}
}


function getNextElm(field) {
　let form = field.form;
　for (var e = 0; e < form.elements.length; e++) {
　　if (field == form.elements[e]) { break; }
　}
　for (let n = e + 1; n < form.elements.length; n++) {
　　if (form.elements[n % form.elements.length].style.display != 'none'
　　&& form.elements[n % form.elements.length].type != 'hidden') {
　　　return form.elements[n % form.elements.length];
　　}
　}
　for (let n = 0; n < e; n++) {
　　if (form.elements[n % form.elements.length].style.display != 'none'
　　&& form.elements[n % form.elements.length].type != 'hidden') {
　　　return form.elements[n % form.elements.length];
　　}
　}
}


function focusInput(ev) {
　try { ev.target.setSelectionRange(0, ev.target.value.length); }
　catch { }
}


document.onkeypress = enter;
function enter() {
　if (window.event.keyCode == kc_Enter) {
　　return false;
　}
}
