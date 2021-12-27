
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
                comment:[],
                status:"Hoạt động"
            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
                comment:[],
                status:"Hoạt động"
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}
var arrBill = [];
createBill();
var billDetail = [];
createBillDetail();
var arrMyProduct = [];
var arrCart = [];
var userSession = sessionStorage.getItem('user');
var userSale = JSON.parse(localStorage.getItem(userSession + 'sale')) || "";
var valueSale = 0;
var keySale = userSale.keySale;
function createMyProduct()
{
    if(localStorage.getItem(userSession) != null)
    {
        arrCart = JSON.parse(localStorage.getItem(userSession));
    }
}
createMyProduct();
createProduct();
createCustomer();

function renderMyProduct(){
 
    var s = '';
    
    for (var index in arrCart){
       
            
            s = s + '<tr> <td data-th="Product"> <div class="row">' + 
                '<div class="col-sm-2"><img src="./assets/img/'+arrCart[index].img+'" alt="Sản phẩm 1" class="img-responsive" width="100">' +
                    '</div> <div class="col-sm-10"> <h4 class="nomargin">'+arrCart[index].name+'</h4>' +
                    '<p>Kiểu dáng năng động và thời trang rất thích hợp để làm quà tặng</p>' +
                    '<p>	Vạch chia rõ ràng và chi tiết từng milimets</p>' + 
                    '<p>	Vỏ máy bằng thép chống oxy hóa hiệu quả </p>' +
                        '</p></div> </div> </td><td data-th="Price" class="text-center Price">'+arrCart[index].prices+'$</td> ' +
                        '<td data-th="Quantity" class="quatify__icon"><div class="quatify__icon-item"><i class="btn-icon far fa-minus-square minus" onclick="minusOfProduct('+arrCart[index].id+')" style="cursor: pointer"></i>'+
                            '<input class="form-control text-center-1 productx" type="text" readonly value="'+arrCart[index].quantify+'">' +
                            '<i class="btn-icon far fa-plus-square plus productx" onclick="plusOfProduct('+arrCart[index].id+')" style="cursor: pointer"></i>' +
                            '</div></td> <td data-th="Subtotal" class="text-center" id="sum_product">'+sumOfProduct(arrCart[index].prices,arrCart[index].quantify)+'$</td>'+
                                '<td class="actions" data-th=""><button class="btn btn-info btn-sm" onclick="deleteProductOfCart('+index+')"><i class="far fa-trash-alt"></i></button>'+
                                    '<button title = "'+arrCart[index].currentTime+'" class="btn btn-info-1 btn-sm"><i class="fas fa-calendar-times"></i></button></td>  </tr> ';                                                             
        
                                    }
    document.getElementById('itemProduct').innerHTML = s;
}
function renderFooterProduct()
{
    var s = '<tr> <td><a href="index.html" class="btn  btn-warning" style="color:white; font-family:san-serif; font-size:15px;">Tiếp tục mua hàng</a></td><td colspan="1" class=""><input type="text" class="form" placeholder="Nhập vào mã giảm giá ........." id="txtsale">'+
    '</td><td><button class="button_addsale" onclick="renderSale();">Sử dụng mã</button></td><td class=" text-center"><strong style="font-family:san-serif; font-size:16px; color:black;">Tổng tiền: '+totalProducts()+'$ </strong></td> <td onclick="displayModalPay();"><a href="#" class="btn btn-success" style="color:white; font-family:san-serif; font-size:15px;">Thanh toán</a></td></tr> '; 
    document.getElementById('footerProduct').innerHTML = s;
}

function displayModalPay()
{
    document.querySelector('.modal__address').style.display = "block";
}

function hideModalPay()
{
    document.querySelector('.modal__address').style.display = "none";
}

function totalProducts()
{
    var s = 0;
    for (var index in arrCart)
    {
        s += (parseInt(arrCart[index].prices)*arrCart[index].quantify);
    }
    s = s*(1-valueSale);
    return parseInt(s);
}



function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);  
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}


function deleteProductOfCart(id)
{
    swal({
        title: "Bạn có chắc chắn muốn xóa?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            arrCart.splice(id,1);
            localStorage.setItem(userSession,JSON.stringify(arrCart));
            renderMyProduct();
            renderFooterProduct();
        }
      });
   
}

function renderSale()
{
    if(document.getElementById('txtsale').value!= "" && document.getElementById('txtsale').value == keySale)
    {
        swal({
            title: "Bạn muốn sử dụng " + userSale.text,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                valueSale = parseFloat(userSale.valueSale);
                renderFooterProduct();
            }
          });
       
    }else{
        swal("Sử dụng mã thất bại!", "Không tìm thấy mã khuyến mãi này!", "error");
        valueSale = 0;
    }
    renderFooterProduct();
}



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

function createBillDetail()
{
    if(localStorage.getItem('billdetail') == null)
    {
        billDetail = [
            {
                billID:arrBill[0].billID,
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
            }
        ]
        localStorage.setItem('billdetail',JSON.stringify(billDetail));
    } else {
         billDetail = JSON.parse(localStorage.getItem('billdetail'));
    }
}

function checkModalAddress()
{
    const address = document.getElementById('txtaddress').value;
    const phone = document.getElementById('txtphone').value;
    const regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let flag = true;
    if(!regexPhone.test(phone))
    {
        flag = false;
        document.getElementById('txtphoneerror').textContent = 'Sai định dạng số điện thoại!'
    }
    if(address == '') {
        document.getElementById('txtaddresserror').textContent = 'Địa chỉ không được bỏ trống!'
        flag = false;
    }


    return flag;
}

function hideErrorAddress()
{
  
    document.getElementById('txtaddresserror').textContent = '';
}

function hideErrorPhone()
{
    
    document.getElementById('txtphoneerror').textContent = '';
}

function onPay()
{
    if(checkModalAddress())
    {

        swal({
            title: "Bạn chắc chắn muốn thanh toán?",
            text: "Số tiền bạn phải trả là " + totalProducts() + "$",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
               
                    var listOrder = [];
                    var date = new Date();
                    // var year = date.getFullYear();
                    var curDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    for (var index in arrCart)
                    {
                        listOrder[index] = arrCart[index];
                        listOrder[index]["user"] = userSession;
                        listOrder[index]["status"] = "Đang xử lý";
                    }
        
                    var total = 0;
                    for (var index in arrCart)
                    {
                        total += parseInt(arrCart[index].prices) * parseInt(arrCart[index].quantify);
                    }
        
                    var billID = uuid();
                    var objBill = {
                        billID:billID,
                        arrOrder:listOrder,
                        user:userSession,
                        total:total,
                        curDate:curDate,
                        status:"Đang xử lý"
                    };
        
                    var objBillDetail = {
                        billID:billID,
                        arrOrder:listOrder
                    }
                  
                    arrCart = [];
                    localStorage.setItem(userSession,JSON.stringify(arrCart));
                    swal("Thanh toán thành công!", "Vui lòng chuẩn bị tiền để nhận hàng!", "success");
                    userSale = [];
                    localStorage.setItem(userSession + "sale",JSON.stringify(userSale));
                    arrBill.push(objBill);
                    billDetail.push(objBillDetail);
                    localStorage.setItem("listbill",JSON.stringify(arrBill));
                    localStorage.setItem("billdetail",JSON.stringify(billDetail));
                    renderMyProduct();
                    renderFooterProduct();
                
                
            }
          });   
    } else {
        swal('Thông tin nhận hàng','Vui lòng nhập đúng số điện thoại và địa chỉ','warning')
    }
}

function plusOfProduct(id)
{
    for (var index in arrCart)
    {
        if(arrCart[index].id == id)
        {
            ++arrCart[index].quantify;
            renderMyProduct(); 
            renderFooterProduct();
            break;
        }
    }
    
    
}

function minusOfProduct(id)
{
    for (var index in arrCart)
    {
        if(arrCart[index].id == id)
        {
            if(arrCart[index].quantify > 1)
            {

                --arrCart[index].quantify;
                renderMyProduct(); 
                renderFooterProduct();
                break;
            }
        }
    }
  
}


function sumOfProduct(a,b)
{
   return parseInt(a)*parseInt(b);
}

function sumOfProducts(a,b,value)
{
    return (a+b)*value;
}

window.onload = function()
{
    renderMyProduct();
    renderFooterProduct();
    checkSession();

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

//xuly modal bar
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


function renderEmptyProduct()
{
    document.getElementById('display_product').innerHTML = '<div id="errorSearch">Không tìm thấy sản phẩm</div>'
}

console.log(arrCart)