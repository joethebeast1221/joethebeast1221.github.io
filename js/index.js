// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    
    var p1 = $('#price1').val()
    var p2 = $('#price2').val()
    var p3 = $('#price3').val()

    p1 = Number(p1)
       
    p2 = Number(p2) 

    p3 = Number(p3)
   
   var total = (p1 + p2 + p3) * 30.3
        // 將計算結束顯示在 id=result 的元件上
    $('#result').val(total)
})

