const imgs = [
    {simg: "./img/s_gimg_01.jpg", bimg: "./img/b_gimg_01.jpg"},
    {simg: "./img/s_gimg_02.jpg", bimg: "./img/b_gimg_02.jpg"},
    {simg: "./img/s_gimg_03.jpg", bimg: "./img/b_gimg_03.jpg"},
    {simg: "./img/s_gimg_04.jpg", bimg: "./img/b_gimg_04.jpg"},
    {simg: "./img/s_gimg_05.jpg", bimg: "./img/b_gimg_05.jpg"},
    {simg: "./img/s_gimg_06.jpg", bimg: "./img/b_gimg_06.jpg"},
    {simg: "./img/s_gimg_07.jpg", bimg: "./img/b_gimg_07.jpg"},
    {simg: "./img/s_gimg_08.jpg", bimg: "./img/b_gimg_08.jpg"},
    {simg: "./img/s_gimg_09.jpg", bimg: "./img/b_gimg_09.jpg"},
];

const galleryWrap = document.getElementById("gallery");
const bimgArea = document.getElementById("galleryBigimg");
const imgview = document.getElementById("imgview");
const btnHandlebigImg = document.querySelectorAll(".btn_bigimg");
const btnCloseImgModal = document.querySelector("#btnCloseImgModal");


imgs.forEach((eachImg,index) => {
    let gallerylist = document.createElement("li");
    let galleryimg = document.createElement("img");
    galleryimg.setAttribute("src",eachImg.simg)
    gallerylist.append(galleryimg);
    galleryWrap.append(gallerylist);
    gallerylist.addEventListener("click", showBigimg)
});

function showBigimg(e){
    bimgArea.innerHTML = "";
    let pickImg = e.target.getAttribute("src");
    let picBiggerImg = pickImg.replace("s_","b_");
    let galleryBigimg = document.createElement("img");
    galleryBigimg.classList.add("biggerImg")
    galleryBigimg.setAttribute("src", picBiggerImg);
    bimgArea.append(galleryBigimg);
    imgview.style.display = "block";
    showmodalBg('bg_white');
}

function changeImg(e){
    let btnDirection = e.target.getAttribute("data-direction");
    let biggerImg = document.querySelector(".biggerImg");
    let nowImg = biggerImg.getAttribute("src");
    let nowImgNum = nowImg.charAt(nowImg.length-5);

    switch (btnDirection){
        case "before":
            if(nowImgNum > 1){
                biggerImg.setAttribute("src", imgs[nowImgNum-2].bimg);
            }else{
                biggerImg.setAttribute("src", imgs[imgs.length-1].bimg);
            }
            break;
        case "next":
            if(nowImgNum <= imgs.length-1){
                biggerImg.setAttribute("src", imgs[nowImgNum].bimg);
            }else{
                biggerImg.setAttribute("src", imgs[0].bimg);
            }
            break;
    }
}

function showmodalBg(type){
    modalBg.style.display = "flex";
    modalBg.classList.add(type);
    body.classList.add("hidden");
}

function closeImgPopup(){
    body.classList.remove("hidden");
    imgview.style.display = "none";
    modalBg.classList.remove("bg_white");
    modalBg.style.display = "none";
}

btnHandlebigImg[0].addEventListener("click", changeImg);
btnHandlebigImg[1].addEventListener("click", changeImg);
btnCloseImgModal.addEventListener("click", closeImgPopup)