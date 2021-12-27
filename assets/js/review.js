var d = 1;

function displayMessage() {
  ++d;
  if (d % 2 == 0) {
    document.getElementById("box-messenger").style.display = "block";
  } else {
    document.getElementById("box-messenger").style.display = "none";
  }
}

function hideMessage() {
  document.getElementById("box-messenger").style.display = "none";
}

var arrReview = [
  {
    video: "./assets/img/video0.mp4",
    title:
      "Đánh giá iPhone 13 Pro Max sau 1 tháng: Rất tốt nhưng vẫn chưa hoàn hảo",
  },

  {
    video: "./assets/img/video1.mp4",
    title:
      "Top Ipad giá ngon đáng mua nhất hiện nay là đây: Ipad 10.2 - Ipad Pro - Ipad Mini 5",
  },

  {
    video: "./assets/img/video2.mp4",
    title:
      "Xuất hiện hình ảnh MacBook Pro 16 inch trong bản cập nhật macOS Catalina 10.15.1 beta 2",
  },

  {
    video: "./assets/img/video3.mp4",
    title: "Hé lộ hình ảnh chiếc Iphone 13 ‘đẹp không góc chết’ sắp ra mắt",
  },
];

renderReview();
function renderReview() {
  var html = `<div class="sub-container__content-left">
    <div class="left-content1" id="left-content1">
     <video src=${arrReview[0].video} style="width:560px; height:315px" controls></video>
    </div>
    <div class="left-content2">
        <p style="font-size: 15px;">${arrReview[0].title}</p>
    </div>
</div>
<div class="sub-container__content-right">
    <div class="right-content1" onclick = "changeVideo1();">
        <video src=${arrReview[1].video} style="width:120PX; height:88px" controls></video>
      <p>${arrReview[1].title}</p>
    </div>
    <hr class="under">
    <div class="right-content2" onclick = "changeVideo2();">
    <video src=${arrReview[2].video} style="width:120PX; height:88px" controls></video>
        <p>${arrReview[2].title}</p>
    </div>
    <hr class="under">
    <div class="right-content3" onclick = "changeVideo3();">
    <video src=${arrReview[3].video} style="width:120PX; height:88px" controls></video>
        <p>${arrReview[3].title}</p>
    </div>  
</div>`;
  document.getElementById("videoReview").innerHTML = html;
}

function changeVideo1() {
  let temp = arrReview[0];
  arrReview[0] = arrReview[1];
  arrReview[1] = temp;
  renderReview();
}

function changeVideo2() {
  let temp = arrReview[0];
  arrReview[0] = arrReview[2];
  arrReview[2] = temp;
  renderReview();
}

function changeVideo3() {
  let temp = arrReview[0];
  arrReview[0] = arrReview[3];
  arrReview[3] = temp;
  renderReview();
}
