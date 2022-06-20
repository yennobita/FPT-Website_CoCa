
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}





//   window.onload = function() {
//     const article = {
//         btn1: [
//             {
//                 title: 'MIỀN BẮC',
//                 url: 'https://icdn.dantri.com.vn/thumb_w/770/2022/05/24/bao-bi-pepsi-docx-1653363255398.jpeg',
//                 description: '(Dân trí) - Bao bì Pepsi mới được làm 100% từ nhựa tái sinh là sáng kiến đột phá của nhãn hàng Pepsi và Suntory PepsiCo hướng đến mục tiêu phát triển bền vững. Sản phẩm này vừa ra mắt tại Hà Nội'
//             },
//             {
//                 title: '',
//                 description: ''
//             },
//             {
//                 title: '',
//                 description: ''
//             }
//         ],
//         btn2: [
//             {
//                 title: '',
//                 description: ''
//             },
//             {
//                 title: '',
//                 description: ''
//             },
//             {
//                 title: '',
//                 description: ''
//             }
//         ],
//         btn3: [
//             {
//                 title: '',
//                 description: ''
//             },
//             {
//                 title: '',
//                 description: ''
//             },
//             {
//                 title: '',
//                 description: ''
//             }
//         ]
//     }
//     function myFunction() {
//         document.getElementById(".agen-fl1").innerHTML = sometext;
//     }
//     const btns = document.getElementsByClassName("btn-article"); // collection// $('.btn-article') // document.querySelector('.btn-article')
//     const a = document.getElementById("btn1"); // html element //  $('#btn1') // // document.querySelector('#btn1')
//     const tag = document.getElementsByTagName("li"); // html element // $(li) // // document.querySelector('li')
//     const aOfLi = document.querySelector('.li a');
//     for (const btn of  Array.from(btns)) {
//         btn.addEventListener("click", (event) => {
//             const id = event.target.getAttribute("id"); // "btn1", "btn2", "btn3"
//             const displayedArticles = article[id];
//             const container = document.getElementById('article-container');
//             container.innerHTML = '';

//         });
//     }
   
// };

// 1. get all buttons
// 2. add event listener
  // check whether the target is which button?
  // get array articles
  // get articles container
  // clear content of container
  // for (const article of articles) {
  //  add article to container
  //}


