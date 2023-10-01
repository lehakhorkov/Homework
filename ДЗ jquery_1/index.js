$('button').click(function start () {
    $('.fish')
    .animate({
        opacity: -100,
        marginLeft: "800px"
        }, 5000)                        
                  
        .animate({
             opacity: 100,
            marginLeft: "0px"
            }, 5000, start)          



            $('.fish2')
            .animate({
                opacity: 100,
                marginLeft: "800px"
                }, 5000)                        
                          
                .animate({
                     opacity: -100,
                    marginLeft: "0px"
                    }, 5000, start) 

    $('.text')
    .animate({
        width: "900px",
        }, 2000)
        .animate({
            width: "500px",
            }, 2000, start)


});


