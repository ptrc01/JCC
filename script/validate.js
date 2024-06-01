form.addEventListener("submit", function (e){
    e.preventDefault();

    let flag = 0;
    let emailChecker = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    let nomorChecker = /^\d{12}$/;
    
    let nama = document.getElementById("inputNama").value;
    let email = document.getElementById("inputEmail").value;
    let nomor = document.getElementById("inputNomor").value;
    let cekMail = document.getElementById("mail").checked;
    let cekPhone = document.getElementById("phone").checked;
    let mess = document.getElementById("inputMessage").value;

    if(nama.length >= 3){
        console.log(nama);
        flag =1;
        document.getElementById("name").innerText = "";
    }else{
        document.getElementById("name").innerText = "Please input your name";
        return false;
    }

    if (email.match(emailChecker)) {
        console.log(email);
        flag=1;
        document.getElementById("email").innerText = "";
    }else{
        document.getElementById("email").innerText = "Please input your correct email";
        return false;
    }

    if(nomor.match(nomorChecker)){
        console.log(nomor);
        document.getElementById("nomor").innerText = "";
        flag=1;
        
    }else{
        document.getElementById("nomor").innerText = "Please input your correct number";
        return false;
    }

    if(mess.length <10){
        document.getElementById("mess").innerText = "Please input your message";
        flag =0;
    }else{
        document.getElementById("mess").innerText = "";
        flag =1;
    }

    if(cekMail || cekPhone){
        document.getElementById("cek").innerText = "";
        flag=1;
    }else{
        document.getElementById("cek").innerText = "Please choose atleast one";
        return false;
    }


    if(flag ==1){
        document.getElementById("form").submit();
    }

})







