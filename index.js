

var btn_kayit=document.querySelector("#btn_kayıt");
var login_right =document.getElementById("login");
var login_left=document.getElementById("login_left");
const login_left_child=document.getElementById("login_title_1");
const login_right_form=document.getElementById("login_form");




btn_kayit.addEventListener("click", kayit_btn);




function kayit_btn(event){
    login_right.style.height="100vh";
    login_left_child.style.display="none";
    login_left.innerHTML=`<h1 class="login_title">Kayıt olun</h1>`;
    login_right_form.style.display="none";
    login_right.innerHTML=`           <form action="">
                <div>
                    <label for="">ad</label>
                    <input  class="form-control" type="text">
                </div>
                <br>

                <div>
                    <label for="">soyad</label>
                    <input class="form-control" type="text">
                </div>
                <br>
                <div>
                    <label for="">kullanıcı adı</label>
                    <input  class="form-control" type="text">
                </div>
                <br>
                <div>
                    <label for="">Parola</label>
                    <input type="text" class="form-control">
                </div>
                <br>
                <div>
                    <label for="">erkek</label>
                    <input type="radio" name="cinsiyet" value="erkek">
                    <label for="">kadın</label>
                    <input type="radio" name="cinsiyet" value="kadın">
                </div>
                <br>
                <div>
                    <button type="button" id="btn_kayıt_crt" class="btn btn-info">Kayıt ol</button>
                </div>
            </form>`;
            const btn_kayıt_crt=document.getElementById("btn_kayıt_crt");
            btn_kayıt_crt.addEventListener("click",kayıt);


    
}
function kayıt(){
    location.reload();
    alert("kayıt olundu");
}




