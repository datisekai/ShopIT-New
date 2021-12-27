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
var arrBill = [];

function createBill()
{
    if(localStorage.getItem('listbill') == null)
    {
        arrBill = [{
            billID:uuid(),
            arrOrder: [{
                currentTime: "10:7 2/12/2021",
                id: "0",
                img: "iphone13.png",
                name: "IPHONE 13 pro max",
                prices: "1200",
                quantify: 1,
                status: "Đang xử lý",
                type: "macbook",
                user: "admin"
            }],
            user:"admin",
            total:1200,
            curDate:"2/11/2021",
            status:"Đang xử lý"
        }]
        localStorage.setItem('listbill',JSON.stringify(arrBill));
    } else{
        arrBill = JSON.parse(localStorage.getItem('listbill'));
    }
}

createBill();
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

window.onload = () =>{
    checkSession();
    renderOrderMobile();
    renderMyOrder();
}



function hideModalDetail()
{
    document.querySelector('.modal__detail-bill').style.display = "none";
}

function renderMyOrder()
{
    var arrMyOrder = [];
    for (var index in arrBill)
    {
        if(arrBill[index].user == sessionStorage.getItem('user'))
        {
            arrMyOrder.push(arrBill[index]);
        }
    }
    var listOrder = arrMyOrder.map((order,index) =>{
        return `   <div class="container__order-product-view-content">
        <div class="container__order-product-view-content-id">
            <p>${index}</p>
        </div>

        <div class="container__order-product-view-content-time">
            <p>${order.curDate}</p>
        </div>

        <div class="container__order-product-view-content-bill">
            <button onclick="displayModalDetail('${order.billID}')">Xem chi tiết</button>
        </div>

        <div class="container__order-product-view-content-status">
            <p>${order.status}</p>
        </div>
    </div>`;
    })
    var htmls = listOrder.join('');
    document.querySelector('.container__order-product-view').innerHTML = htmls;
}

function displayModalDetail(billID)
{
    document.querySelector('.modal__detail-bill').style.display = "block";
    renderModalOrder(billID);
}

function renderModalOrder(billID)
{
    var objOrder;
    for (var index in arrBill)
    {
        if(arrBill[index].billID == billID)
        {
            objOrder = arrBill[index];
            break;
        }
    }

    document.querySelector('.modal__detail-bill-id').innerHTML = ` <p>Mã đơn hàng: ${objOrder.billID}`;
    var arrOrder = objOrder.arrOrder;
    var listOrder = arrOrder.map((order,index)=>{
        return `<div class="modal__detail-product-view">
    
        <div class="modal__detail-bill-product-id">
            <p>${index}</p>
        </div>

        <div class="modal__detail-bill-product-name">
            <p>${order.name}</p>
        </div>

        <div class="modal__detail-bill-product-img">
            <img src="./assets/img/${order.img}" alt="">
        </div>

        <div class="modal__detaill-bill-product-prices">
            <p>${order.prices}$</p>
        </div>

        <div class="modal__detaill-bill-product-quantify">
            <p>${order.quantify}</p>
        </div>
    </div>`;
    });

    var arrPrices = arrOrder.map(order => (order.prices));
    var total = arrPrices.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0)
    var htmls = listOrder.join('');
    document.querySelector('.modal__detail-bill-product-content').innerHTML = htmls;
    document.querySelector('.modal__detail-bill-product-time').innerHTML = ` <p>Thời gian đặt hàng: ${objOrder.curDate}</p>`;
    document.querySelector('.modal__detail-bill-product-total').innerHTML = ` <p>Tổng tiền : ${objOrder.total}$</p>`;
}

function renderOrderMobile()
{
    var arrMyOrder = [];
    for (var index in arrBill)
    {
        if(arrBill[index].user == sessionStorage.getItem('user'))
        {
            arrMyOrder.push(arrBill[index]);
        }
    }
    var listOrder = arrMyOrder.map((order,index) => {
        return `     <div class="container__order-product-view-mobile-content">
        <div class="container__order-product-view-mobile-id">
            <p><i class="fas fa-indent"></i> STT: <span>${index}</span></p>
        </div>

        <div class="container__order-product-view-mobile-time">
            <p><i class="fas fa-history"></i> Thời gian: <span>${order.curDate}</span></p>
        </div>

        <div class="container__order-product-view-mobile-bill">
            <p><i class="fas fa-money-bill"></i> Hóa đơn: <button onclick= "displayModalDetail('${order.billID}')">Xem chi tiết</button></p>
        </div>

        <div class="container__order-product-view-mobile-status">
            <p><i class="fas fa-battery-half"></i> Tình trạng: <span>${order.status}</span></p>
        </div>
    </div>`;
    });
    var htmls = listOrder.join('');
    document.querySelector('.container__order-product-view-mobile').innerHTML = htmls;
}