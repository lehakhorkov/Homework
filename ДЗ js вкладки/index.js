$(document).ready(function () {
    let tab = document.querySelectorAll('.tab');

    init();

    tab.forEach(function (element){ element.onclick = showTabs;});

    function init() {
        let tabBody = document.querySelectorAll('.tab-body');
        for (let i = 1; i < tabBody.length; i++) {
            tabBody[i].style.display = 'none';
        }}
    
    function showTabs() {
        // .getAttribute('data')
        let data = this.getAttribute('data');
        // console.log(data);
        let tabBody = document.querySelectorAll('.tab-body');
        for (let i = 0; i < tabBody.length; i++) {
            tabBody[i].style.display = 'none';
        }
        // css .tabBody[data="3"]
        // '.tab-body[data="'+data+'"]'
        // document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
        document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
    }

    $('.tabs li').mouseover(function () {
            $(this).css(
                {
                'font-weight': 'bold',
                }
            )
        });

        $('.tabs li').mouseout(function () {

            $(this).css(
                {
                'font-weight': 'normal',
                }
            )
        });
});