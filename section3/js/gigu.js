$(document).ready(function(){
    //지구이미지 웹요소(노드)를 찾아서 저장
    var $gigu = $("#gigu");
    //버튼에 이벤트 등록(5초만에 left값 480px으로 설정
    //버튼을 클릭하면 콜백함수가 실행된다.
    $("#btnStart").click(function(){
        $gigu.animate({
            left : "480px"
        }, 5000);
    })
})