$(document).ready(function() {
    // 초기 페이지 설정
    pageView(window.location.hash.substring(1) || 'Introduction');

    var navigationElements = document.getElementsByClassName("navigationElem");
    
    function changeBackground(element) {
        for (var i = 0; i < navigationElements.length; i++) {
            navigationElements[i].style.backgroundColor = "";
        }
        element.style.backgroundColor = "gray";
    }
    for (var i = 0; i < navigationElements.length; i++) {
        navigationElements[i].addEventListener("click", function() {
            changeBackground(this);
        });
    }

    var initialSelectedElement = document.querySelector(".navigationElem .selected");
    if (initialSelectedElement) {
        changeBackground(initialSelectedElement.parentNode);
    }

    // 페이지 링크 클릭 이벤트 처리
    $('nav a').click(function(event) {
        var pageValue = $(this).attr('href').substring(1); // 클릭한 링크의 href 속성에서 페이지 ID 추출
        pageView(pageValue); // 페이지 보여주기
    });

    // 외부 링크 클릭 이벤트 처리
    $('.sns-pictogram a').click(function(event) {

        var externalLink = $(this).attr('href'); // 클릭한 링크의 href 속성 가져오기
        window.open(externalLink, '_blank'); // 새 탭에서 외부 링크 열기
    });

    // 페이지 보여주는 함수
    function pageView(pageValue) {
        $('.page').hide(); // 페이지 숨기기
        $('#' + pageValue).show(); // 해당 페이지 보여주기
        window.location.hash = pageValue; // URL  업데이트
    }
});
