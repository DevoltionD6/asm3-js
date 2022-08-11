
// khai bao bien hocsinh
var hocsinh = {
    tenhocsinh: "",
    toan: 0,
    ly: 0,
    hoa: 0,
}

// khai báo biến số thứ tự để tính toán
var sothutu = 0;



// 2 nút nhấn trung bình và học sinh giỏi
$("#themvao2").click(function(){
    trungbinh()
  });

$("#themvao3").click(function(){
    hocsinhgioi()
  });


// kiểm tra giá trị đầu vào 
function validate()
{
    const ten = $("#ten");
    const diemtoan = $("#diemtoan");
    const diemly = $("#diemly");
    const diemhoa = $("#diemhoa");
    let check=true;
    

    if (ten.val() == "" )
    {
        $("#ten").addClass("error");
        check=false
    }
    else {
        $("#ten").removeClass("error");
    }

    if (diemtoan.val() == "" || diemtoan.val() < 0 || diemtoan.val() >10)
    {
        $("#diemtoan").addClass("error");
        check=false
    }
    else {
        $("#diemtoan").removeClass("error");
    }

    if (diemly.val() == ""  || diemly.val() < 0 || diemly.val() >10)
    {
        $("#diemly").addClass("error");
        check=false
    }
    else {
        $("#diemly").removeClass("error");
    }

    if (diemhoa.val() == ""  || diemhoa.val() < 0 ||diemhoa.val() >10)
    {
        $("#diemhoa").addClass("error");
        check=false
    }
    else {
        $("#diemhoa").removeClass("error");
    }
    
    if(check==false) return
    nhapvao();

}

// thêm điểm học sinh vào bảng
function nhapvao()
{   
    sothutu++;

    const tenhocsinh = $("#ten").val();
    const toan = $("#diemtoan").val();
    const ly = $("#diemly").val();
    const hoa = $("#diemhoa").val();
    hocsinh.tenhocsinh = tenhocsinh;
    hocsinh.toan = toan;
    hocsinh.ly = ly;
    hocsinh.hoa= hoa;

    
    var table = document.getElementById("myTable");
        
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    cell1.innerHTML = sothutu;
    cell2.innerHTML = hocsinh.tenhocsinh;
    cell3.innerHTML = hocsinh.toan;
    cell4.innerHTML = hocsinh.ly;
    cell5.innerHTML = hocsinh.hoa;
    cell6.innerHTML = "";
    
    
    $("#ten").val("");
    $("#diemtoan").val("");
    $("#diemly").val("");
    $("#diemhoa").val("");
}


// tính giá trị trung bình của điểm
function trungbinh ()
{   
    var rows = $("#myTable tr");            //rows là 1 mảng các thẻ tr
    rows.each(function (index,element)      // each lặp qua các vòng vào mỗi dòng vào mỗi dòng để lấy ra các ô là các thẻ td của dòng đó thì sử dụng hàm children
    { 
        if (index > 0 )  // cứ mỗi callback thì index ++
        {
            let cells = $(this).children();     // $(this) ở đây đại diện cho thẻ tr là dòng đang lặp qua
            let diemToan = parseFloat(cells.eq(2).text());      //hàm eq(thứ tự) hàm này sẽ lấy ra phần tử ở vị trí nào đánh index bắt đầu từ 0- thứ tự thứ 3 của cell
            let diemLy = parseFloat(cells.eq(3).text());
            let diemHoa = parseFloat(cells.eq(4).text());

            let trungbinh = (diemToan + diemLy + diemHoa) / 3;
            cells.eq(5).text(trungbinh)
        }
    })
}
// tìm học sinh giỏi
function hocsinhgioi ()
{
    var rows = $("#myTable tr");
    rows.each(function(index,element)
    {
        if (index > 0 )
        {
            let cells = $(this).children();
            let diemToan = parseFloat(cells.eq(2).text());      
            let diemLy = parseFloat(cells.eq(3).text());
            let diemHoa = parseFloat(cells.eq(4).text())
            if ( diemToan >= 8 && diemLy >= 8 && diemHoa >= 8)
        {
            $(this).css("color", "red");
        }
        }
    })
    
}