const body = document.querySelector("body");
const faminfo = document.getElementById("faminfo");
const bg = document.querySelector("#modalBg");
const binfoWrap = document.querySelectorAll(".pop_list_binfo");
const modalBg = document.querySelector("#modalBg");
const btn_pop_close = document.querySelectorAll(".btn_pop_close");

function modalPopupType1(numChk){
    showmodalBg('bk');
    faminfo.style.display = "block";
    switch (numChk){
        case 0:
            document.querySelector(".pop_wrap.groom").style.display = "block";
            break;
        case 1:
            document.querySelector(".pop_wrap.bride").style.display = "block";
            break; 
        case 2:
            document.querySelector(".pop_wrap.groom_fam").style.display = "block";
            break;
        case 3:
            document.querySelector(".pop_wrap.bride_fam").style.display = "block";
            break;
    }
}


function popupClose(){
    const faminfoPop = document.querySelectorAll("#faminfo .pop_wrap");
    faminfoPop.forEach(eachPop => {
        eachPop.style.display = "none";
    });
    body.classList.remove("hidden");
    faminfo.style.display = "none";
    modalBg.style.display = "none";
}

function hi(e){
    console.log(e);
    const txtTarget = e.path[1].innerText;
    copyIOS(txtTarget);
}
function copyIOS(string){
    var textarea = document.createElement('textarea');
    textarea.value = string;
  
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999);  // 추가
  
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

// btn_pop_close.addEventListener("click", popupClose)

binfoWrap.forEach(btnBI => {
    btnBI.addEventListener("click", hi);
    btnBI.addEventListener("touch", hi);
})
btn_pop_close.forEach(btns => {
    btns.addEventListener("click", popupClose);
});

var btns = document.querySelectorAll('.pop_list_binfo');
var clipboard = new ClipboardJS(btns);

clipboard.on('success', function(e) {
  alert("계좌번호가 복사되었습니다.")
});

clipboard.on('error', function(e) {
  console.log(e);
});