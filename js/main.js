// Bài 1: Tìm ngày tháng năm
function previewDay(day, month, year, nhom){
    var day = +document.getElementById("ngay-1").value;
    var month = +document.getElementById("thang-1").value;
    var year = +document.getElementById("nam-1").value;
    var kq = document.getElementById('ketQua-b1');
    var result = "";
    var nhom;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nhom = 1;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nhom = 2;
            break;
        case 2:
            nhom = 3;
            break;
        default:
            kq = 'Tháng không hợp lệ!'
            break;
    }

    //Nếu tháng đó có 30 ngày
    if (day === 1 && nhom === 1) {
        day = 30;
        if (month === 1){
            day = 31;
            month = 12;
            year -= 1;
        }else if (month = 3){
            day = 28;
            month = 2;
        }else{
            month -= 1;
        }
    }else if(nhom === 1){
        day -=1
    }
    // Nếu tháng đó có 31 ngày
    if (day === 1 && nhom === 2){
        day = 31;
        month -= 1;

        }else if (nhom === 2){
            day -= 1;
        }
    //nếu chọn tháng 2
    if (day === 1 && nhom === 3){
        day = 31;
        month -= 1;
    }else if (nhom === 3){
        day -= 1;
    }

    result = day + "/" + month + "/" + year;
    kq.innerHTML = result;
}

function nextDay(day, month, year, nhom){
    var day = +document.getElementById("ngay-1").value;
    var month = +document.getElementById("thang-1").value;
    var year = +document.getElementById("nam-1").value;
    var kq = document.getElementById('ketQua-b1');
    var result = "";
    var nhom;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nhom = 1;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nhom = 2;
            break;
        case 2:
            nhom = 3;
            break;
        default:
            kq = 'Tháng không hợp lệ!'
            break;
    }

    if (day === 31 && nhom === 1){
        day = 1;
        if (month === 12){
            month = 1;
            year += 1;
        }else {
            month += 1;
        }
    }else if (nhom === 1){
        day += 1;
    }

    if (day === 30 && nhom === 2){
        day = 1;
        month +=1;
    }else if(day === 2){
        day += 1;
    }

    if (day === 28 && nhom === 3){
        day = 1;
        month +=1;
    }else if(nhom === 3){
        day +=1;
    }
    result = day + "/" + month + "/" + year;
    kq.innerHTML = result;
}

//Bài 2: Tính tháng đó có bao nhiêu ngày

// Tháng 2 nếu năm nhuận sẽ có 29 ngày
// Cách tính năm nhuận: năm chia hết cho 4 nhưng không chia hết cho 100 hoặc năm chia hết cho 400

function checkMonth(){
    var month2 = +document.getElementById('thang-2').value;
    var year2 = +document.getElementById('nam-2').value;
    var kq = document.getElementById('ketQua-b2');
    switch(month2){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            kq.innerHTML = "Tháng " + month2 + "/" + year2 + " có 31 ngày"
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            kq.innerHTML = "Tháng " + month2  + " có 30 ngày"
            break;
        case 2:
            kq.innerHTML = "Tháng " + month2 + "/" + year2 + " có " + checkyear(year2) + " ngày";
            break;
        default:
            kq.innerHTML = "Tháng không hợp lệ!"
    }
    
}

function checkyear(year2){
    if (year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0){
        return 29;
    }else{
        return 28;
    }
}


// Bài 3: Đọc số
function DocSo(){
    var num3 = +document.getElementById('num3-1').value;
    var hangTram = Math.floor(num3/100);
    var hangChuc = Math.floor(num3%100/10);
    var hangDV =num3%10;
    var show = "";
    var kq = document.getElementById('ketQua-b3');
    
    var num1 = "Một";
    var num2 = "Hai"
    var num3 = "Ba"
    var num4 = "Bốn"
    var num5 = "Năm"
    var num6 = "Sáu"
    var num7 = "Bảy"
    var num8 = "Tám"
    var num9 = "Chín"

    if (num3 < 100 || num3 > 999){
        kq.innerHTML = 'Số nhập vào lớn hơn 3 chữ số'
    }

    //Đọc hàng trăm
    switch(hangTram){
        case 1:
            show += num1 + " Trăm "
            break;
        case 2:
            show += num2 + " Trăm "
            break;
        case 3:
            show += num3 + " Trăm "
            break;
        case 4:
            show += num4 + " Trăm "
            break;
        case 5:
            show += num5 + " Trăm "
            break;
        case 6:
            show += num6 + " Trăm "
            break;
        case 7:
            show += num7 + " Trăm "
            break;
        case 8:
            show += num8 + " Trăm "
            break;
        case 9:
            show += num9 + " Trăm "
            break;
    }

    //Đọc số hàng chục
    if(hangChuc === 1){
        show += " Mười "
    }else if(hangChuc === 2){
        show += num2 + " Mươi "
    }else if(hangChuc === 3){
        show += num3 + " Mươi "
    }else if(hangChuc === 4){
        show += num4 + " Mươi "
    }else if(hangChuc === 5){
        show += num5 + " Mươi "
    }else if(hangChuc === 6){
        show += num6 + " Mươi "
    }else if(hangChuc === 7){
        show += num7 + " Mươi "
    }else if(hangChuc === 8){
        show += num8 + " Mươi "
    }else if(hangChuc === 9){
        show += num9 + " Mươi "
    }else{
        show += " Lẻ ";
    }
    
    //Đọc hàng đơn vị
    if (hangDV === 1 && hangChuc === 0){
        show += num1;
    }else if(hangDV === 1 && hangChuc === 1){
        show += num1;
    }else if(hangDV === 1){
        show += " Mốt";
    }else if (hangDV === 2){
        show += num2
    }else if (hangDV === 3){
        show += num3
    }else if (hangDV === 4){
        show += num4
    }else if (hangDV === 5){
        show += " Lăm"
    }else if (hangDV === 6){
        show += num6
    }else if (hangDV === 7){
        show += num7
    }else if (hangDV === 8){
        show += num8
    }else if (hangDV === 9){
        show += num9
    }

    kq.innerHTML = show;

}

//Bài tập 4: 