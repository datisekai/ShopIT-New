///search

var arrProduct = [];
function createProduct()
{
    if(localStorage.getItem('product') == null)
    {

        arrProduct = [
            {
                id: "0",
                img:'macbook1.jpg',
                name: 'Macbook',
                prices: '1200',
                type: "macbook"
            },
        
            {
                id: "1",
                img: '13promax.jpg',
                name: 'IPHONE 13 Pro max new',
                prices: '2000',
                type: "iphone"
            },
        
            { 
                id: "2",
                img: '13.jpg',
                name: 'IPHONE 13 64GB new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "3",
                img: '131mobile1.jpg',
                name: 'IPHONE 13 mini new',
                prices: '800',
                type: "iphone"
            },
        
            {
                id: "4",
                img: '131mobile2.jpg',
                name: 'IPHONE 13 mini new',
                prices: '900',
                type: "iphone"
            },
            
            {
                id: "5",
                img: '131mobile3.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "6",
                img: '131mobile4.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1100',
                type: "iphone"
            },
        
            {
                id: "7",
                img: '131mobile5.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1200',
                type: "iphone"
            },
        
            {
                id: "8",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1300',
                type: "iphone"
            },
        
            
            {
                id: "9",
                img: 'macbook1.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '2400',
                type: "macbook"
            },
        
            {
                id: "10",
                img: 'macbook2.jpg',
                name: 'MacBook Pro 16" 2019 Touch Bar 2.6GHz Core i7 512GB',
                prices: '2600',
                type: "macbook"
            },
        
            {
                id: "11",
                img: 'macbook3.jpg',
                name: 'MacBook Air 13" 2020 M1 16GB/256GB',
                prices: '2900',
                type: "macbook"
            },
        
            {
                id: "12",
                img: 'macbook4.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 16GB/256GB',
                prices: '1900',
                type: "macbook"
            },
        
            {
                id: "13",
                img: 'macbook5.jpg',
                name: 'MacBook Pro 14" 2021 M1 Pro',
                prices: '1399',
                type: "macbook"
            },
        
            {
                id: "14",
                img: 'macbook6.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar 2.0GHz Core i5 512GB',
                prices: '1499',
                type: "macbook"
            },
        
            {
                id: "15",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '999',
                type: "macbook"
            },
        
            {
                id: "16",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '1099',
                type: "macbook"
            },
        
            {
                id: "17",
                img: 'ipad1.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1000',
                type: "ipad"
            },
        
            {
                id: "18",
                img: 'ipad2.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1400',
                type: "ipad"
            },
        
            {
                id: "19",
                img: 'ipad3.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1600',
                type: "ipad"
            },
        
            {
                id: "20",
                img: 'ipad4.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1700',
                type: "ipad"
            },
        
            {
                id: "21",
                img: 'ipad5.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2100',
                type: "ipad"
            },
        
            {
                id: "22",
                img: 'ipad6.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2000',
                type: "ipad"
            },
        
            {
                id: "23",
                img: 'ipad7.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
                prices: '2400',
                type: "ipad"
            },

            {
                id: "24",
                img: '131mobile6.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1600',
                type: "iphone"
            },

            {
                id: "25",
                img: '131mobile7.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1700',
                type: "iphone"
            },

            {
                id: "26",
                img: '131mobile8.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1800',
                type: "iphone"
            },

            {
                id: "27",
                img: '131mobile9.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "28",
                img: '131mobile10.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "29",
                img: '131mobile11.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "30",
                img: '131mobile12.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "31",
                img: '131mobile12.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "32",
                img: '131mobile13.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },
            
        
            ];
            localStorage.setItem('product',JSON.stringify(arrProduct));
    } else{
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
}

var arrCustomer = [];
function createCustomer()
{

    if(localStorage.getItem('customer') == null)
    {

        arrCustomer = [
            {
                user: 'admin',
                password: 'admin',
                email: 'lydatltd@gmail.com',
                level: 0,

            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}

createCustomer();
createProduct();
function searchInfo(id)
{
    txtSearch = document.getElementById(id).value;
    if(txtSearch != '')
    {
        if(txtSearch.toUpperCase().indexOf('IPH') != -1)
        {
            window.location = 'index.html?product=iphone';
        }
        else if(txtSearch.toUpperCase().indexOf('IPA') != -1)
        {
            window.location = 'index.html?product=ipad';
        }
        else if(txtSearch.toUpperCase().indexOf('MAC') != -1)
        {
            window.location = 'index.html?product=macbook';
        }
        else {
            renderEmptyProduct();
        }
    }
}

function preLoading()
{
    var preLoader = document.getElementById('preLoader');
    window.addEventListener('load', hideLoading);
}

function hideLoading()
{
    setTimeout(function(){
        preLoader.style.display = "none";
    },0);
}

preLoading();

function onCart()
{
    if(isLogin())
    {
        window.location = "cart.html";
    } else{
        displayLogin();
    }
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}

function hideLogin()
{
    document.querySelector('.modal__login').style.display = "none";
    hideErrorUser();
    hideErrorPass();
    hideErrorEmail();
}
function onLogin()
{
    window.sessionStorage;
    var admin = false;
    var level = 1;
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var flag = -1;
    if(username == "")
    {
        document.getElementById('errorUser').textContent = "Username không được bỏ trống";
        flag = 0;
    }
    if(password == "")
    {
        document.getElementById('errorPass').textContent = "Password không được bỏ trống";
        flag = 0;
    }
    for(var index in arrCustomer)
    {
        if(arrCustomer[index].user.toUpperCase() == username.toUpperCase())
        {
            if(arrCustomer[index].status == "Bị khóa")
            {
                flag = -2;
                break;
            }
        }
    }

    for (var i=0;i<arrCustomer.length;i++)
    {
        if (username.toUpperCase() == arrCustomer[i].user.toUpperCase() && password == arrCustomer[i].password && arrCustomer[i].status !="Bị khóa")
        {
            flag = 1;
            if(arrCustomer[i].level == 0) {
                level = arrCustomer[i].level; admin = true;
            }
            break;
        }
    }

    if (flag==1){
        sessionStorage.setItem('user',username);
        sessionStorage.setItem('level',level)
        hideLogin();
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('hasLogin').style.display = 'flex';
        document.getElementById('userLogin').textContent = username;
        swal("Đăng nhập thành công!", "Bạn đã có thể mua hàng!", "success");
        hideErrorUser();
        hideErrorPass();
        hideErrorEmail();
        if (admin == 1) document.getElementById('admin').style.display = "";
        else {
            document.getElementById('admin').style.display = "none";
        }
        
    }
    else if(flag == -1){
        document.getElementById('errorLogin').textContent = "Username hoặc Password không chính xác!";
    } 
    else if(flag == -2)
    {
        document.getElementById('errorLogin').textContent = "Tài khoản của bạn đã bị khóa.";
    }
    
}

function hideErrorUser()
{
    document.getElementById('errorUser').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorPass()
{
    document.getElementById('errorPass').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorEmail()
{
    document.getElementById('errorEmail').textContent = "";
}


function onRegister()
{
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var flag = 1;
    if(username == "" || username.length < 5)
    {
        document.getElementById('errorUser').textContent = "Username phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(email == "" || email.length < 5 || email.indexOf('@') == -1)
    {
        document.getElementById('errorEmail').textContent = "Email phải có @ và lớn hơn 5 kí tự";
        flag = 0;
    }
    if(username != "" && password != "" && email != "")
    {
        for (var i=0;i<arrCustomer.length;i++)
        {
            if(username.toUpperCase() == arrCustomer[i].user.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Username đã tồn tại";
                flag = -1;
                break;
            }
            if(email.toUpperCase() == arrCustomer[i].email.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Email đã tồn tại";
                flag = -1;
                break;
            }
        }
    }

    if(flag == 1)
    {
        var customer = {
            user: username,
            password: password,
            email: email,
            level: 1
           
        };
        arrCustomer.push(customer);;
        swal("Đăng ký thành công!", "Vui lòng đăng nhập", "success");
        onSignIn();
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        console.log(arrCustomer);
    }

}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
        document.querySelector('action__comment').style.display = 'block';
    }
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
}

function onLogOut()
{
    swal({
        title: "Bạn muốn đăng xuất?",
        text: "Khi muốn mua hàng, bạn sẽ phải đăng nhập lại!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('level');
            window.location = "index.html";
        }
      });
    
}


function onSignUp()
{
    document.querySelector('.modal__content-heading').textContent = "REGISTER";
    document.getElementById('modal__email').style.display = "block";
    document.getElementById('register').style.display = "";
    document.getElementById('login').style.display = "none";
    document.getElementById('modal-signup').style.display = "none";
    document.getElementById('modal-signin').style.display = "";
   
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function onSignIn()
{
    document.querySelector('.modal__content-heading').textContent = "LOGIN";
    document.getElementById('modal__email').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "";
    document.getElementById('modal-signup').style.display = "";
    document.getElementById('modal-signin').style.display = "none";
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
    }
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function displayModalBars()
{
    document.getElementById('barsOverlay').style.display = "block";
    document.getElementById('barsContent').style.display = "block";
}

function hideModalBars()
{
    document.getElementById('barsOverlay').style.display = "none";
    document.getElementById('barsContent').style.display = "none";
    hideCategoryBars();
}

function displayCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "block";
    document.getElementById('barCategoryClose').style.display = "block";
}

function hideCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "none";
    document.getElementById('barCategoryClose').style.display = "none";
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

// Info Product
function renderInfoProduct()
{
    const idProduct = getQueryVariable('id');
    var arrInfo = {};
    for (var index in arrProduct)
    {
        if(arrProduct[index].id == idProduct)
        {
            arrInfo = arrProduct[index];
            break;
        }
    }
    
    var html = ` <div class="view__product-left">

    <div class="view__product-img">
        <img src="./assets/img/${arrInfo.img}" alt="">
    </div>

    <div class="view__product-preview">
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
    </div>

    <div class="view__product-share">
        <div class="view__product-share-heading">
            Chia Sẻ:
        </div>

        <div class="view__product-share-icon">
            <div class="view__product-share-img">
                <img src="./assets/img/zalo.jpg" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/facebook.png" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/messenger.png" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/twichter.png" alt="">
            </div>
        </div>
    </div>

</div>

<div class="view__product-right">

    <div class="view__product-right-heading">
        <p>${arrInfo.name}</p>
    </div>

    <div class="view__product-appreciate">
        <div class="view__product-appreciate-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        
        <div class="view__product-appreciate-quantify">
            40 Đánh giá
        </div>

        <div class="view__product-appreciate-done">
            467 Đã bán
        </div>
    </div>

    <div class="view__product-right-prices">
        <div class="view__product-right-prices-real">
            <p>${arrInfo.prices}$</p>
        </div>

        <div class="view__product-right-prices-sale">
            <p>5% Giảm</p>
        </div>
    </div>

    <div class="view__product-transport">
        <div class="view__product-transport-heading">
            <p>Vận chuyển tới</p>
        </div>

        <div class="view__product-select">
            <select name="" id="selectAddress">
                <option value="">An Giang</option>
                <option value="">Kiên Giang</option>
                <option value="">TP.HCM</option>
                <option value="">Bình Dương</option>
                <option value="">Bình Phước</option>
                <option value="">Bình Thuận</option>
            </select>
        </div>

        <div></div>
    </div>

    <div class="view__product-color">
        <div class="view__product-color-heading">
            <p>Màu sắc</p>
        </div>

        <div class="view__product-color-list">
            <button class="view__product-color-item">Trắng</button>
            <button class="view__product-color-item">Đỏ</button>
            <button class="view__product-color-item">Xanh</button>
            <button class="view__product-color-item">Tím</button>
        </div>

        <div></div>
    </div>

    <div class="view__product-quantify">
        <div class="view__product-quantify-heading">
            <p>Số lượng</p>
        </div>

        <div class="view__product-quantify-handle">
            <div class="quantify-handle-minus" onclick= "actionMinus();">
                <button>-</button>
            </div>

            <div class="quantify-handle">
                <input type="text" class="quantify-handle-input" value="1" readonly>
            </div>

            <div class="quantify-handle-plus" onclick = "actionPlus();">
                <button>+</button>
            </div>
        </div>

        <div></div>
    </div>

    <div class="view__product-btn">
        <div class="view__product-addcart" onclick= "addProductToCart(${idProduct});">
            <button><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
        </div>
        <div class="view__product-buynow" onclick = "goHome();">
            <button>Về trang chủ </button>
        </div>
    </div>

    <div class="view__product-description">
        <p>7 ngày miễn phí đổi trả</p>
        <p>Hàng chính hãng 100%</p>
    </div>
</div>`;
    document.querySelector('.view__product').innerHTML = html;
}

function goHome()
{
    window.location = "index.html";
}

window.onload = function()
{
    renderInfoProduct();
    renderComment();
    checkSession();
}

//Comment
var arrComment = [];
function createComment()
{

    if(localStorage.getItem('comment') == null)
    {

        arrComment = [
            {
                user:'admin',
                idProduct:'0',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'1',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'2',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'3',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'4',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'5',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            }
            
        ];
        localStorage.setItem('comment',JSON.stringify(arrComment));
    } else{
        arrComment = JSON.parse(localStorage.getItem('comment'));
    }
}
createComment();
function renderComment()
{
    var html = "";
    const idSP = getQueryVariable('id');
    let arrRender = [];
    for (var index in arrComment)
    {
        if(arrComment[index].idProduct == idSP)
        {
            arrRender.push(arrComment[index]);
        }
    }
    for (var index in arrRender)
    {
        html += `<div class="comment__review-content-user">

            <div class="comment__review-author">
                <p><i class="fas fa-user"></i> ${arrRender[index].user}</p>
            </div>

            <div class="comment__review-description">
            <p>${arrRender[index].content}</p>
            </div>

        </div>`;

    }
    document.querySelector('.comment__review-content').innerHTML = html;
}


function submitComment()
{
    if(sessionStorage.getItem('user') != null)
    {

        const idProduct = getQueryVariable('id');
        const userSession = sessionStorage.getItem('user');
        const contentComment = document.getElementById('txtcomment').value;
        const objectCmt = {
            user:userSession,
            idProduct:idProduct,
            content:contentComment
        }
        arrComment.push(objectCmt);
        localStorage.setItem('comment',JSON.stringify(arrComment));
        document.getElementById('txtcomment').value = '';
        renderComment();
    } else {
        displayLogin();
    }
}


//End info

var arrMyProduct = [];
if(localStorage.getItem(sessionStorage.getItem('user')) == null)
{
    arrMyProduct == [];
} else{
    arrMyProduct = JSON.parse(localStorage.getItem(sessionStorage.getItem('user')));
}
var quantifyCart = arrMyProduct.length;
function addProductToCart(id)
{
    if(isLogin())
    {
        var userSession = sessionStorage.getItem('user');
        swal({
            title: "Bạn muốn thêm vào giỏ hàng?",
            text: "Bạn có thể tiếp tục mua hàng và thanh toán sau!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var date = new Date();
                var curTime = date.getHours() + ":" + date.getMinutes();
                var curDate = curTime + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                if(localStorage.getItem(userSession)!=null)
                {
        
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[arrMyProduct.length -1]['quantify'] = 1;
                    arrMyProduct[arrMyProduct.length -1]['currentTime'] = curDate;
                }
                else{
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[0]['quantify'] = 1;
                    arrMyProduct[0]['currentTime'] = curDate;
                }
                
                localStorage.setItem(userSession,JSON.stringify(arrMyProduct));
                swal("Thêm thành công!", "Nếu bạn muốn thanh toán, vui lòng vào giỏ hàng!", "success");
                quantifyCart = arrMyProduct.length;
                innerQuantify(quantifyCart);
            } else {
              
            }
          });
    } else {
       displayLogin();
    }
}
function innerQuantify(quantifyCart)
{
    document.getElementById('quantifyProductCart').textContent = quantifyCart;
}
