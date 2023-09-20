let rectangle = []
coordinates = document.querySelector('.coordinates');
coordinates2 = document.querySelector('.coordinates2');
coordinates3 = document.querySelector('.coordinates3');
coordinates4 = document.querySelector('.coordinates4');
coordinates5 = document.querySelector('.coordinates5');
rectangleWidth = document.querySelector('.rectanglewidth');



document.querySelector('#but').onclick = function () {
    rectangle[0] = +document.querySelector('#x1').value;
    rectangle[1] = +document.querySelector('#y1').value;
    rectangle[2] = +document.querySelector('#x2').value;
    rectangle[3] = +document.querySelector('#y2').value;
    
    console.log(rectangle);

    x1 = rectangle[0];
    y1 = rectangle[1];
    x2 = rectangle[2];
    y2 = rectangle[3];

    coordinates.innerHTML = 'x1 = ' + x1 + ', ' + 'y1 = ' + y1 + ', ' + 'x2 = ' + x2 + ', ' + 'y2 = ' + y2;

    width = x2 - x1;
    height = y2 - y1;

    rectangleWidth.innerHTML = 'Ширина прямоугольника =' + ' ' + width + ' ' + 'Высота прямоугольника =' + ' ' + height;
}

    document.querySelector('#but_width').onclick = function () {
    modifiedWidth = +document.querySelector('#modifiedwidth').value;
    

    rectangle[2] = modifiedWidth + rectangle[2]
               
        x1 = rectangle[0];
        y1 = rectangle[1];
        x2 = rectangle[2];
        y2 = rectangle[3];

        width2 = x2 - x1;
    
    coordinates2.innerHTML = 'x1 = ' + x1 + ', ' + 'y1 = ' + y1 + ', ' + 'x2 = ' + x2 + ', ' + 'y2 = ' + y2 + ' ' + ' ' + 'Ширина прямоугольника =' + ' ' + width2 ;
    console.log(rectangle);
    }

    document.querySelector('#but_height').onclick = function () {

        modifiedHeight = +document.querySelector('#modifiedheight').value;

        rectangle[2] = +document.querySelector('#x2').value
        rectangle[3] = modifiedHeight + rectangle[3]
    

        x1 = rectangle[0];
        y1 = rectangle[1];
        x2 = rectangle[2];
        y2 = rectangle[3];

        height2 = y2 - y1;
    
    coordinates3.innerHTML = 'x1 = ' + x1 + ', ' + 'y1 = ' + y1 + ', ' + 'x2 = ' + x2 + ', ' + 'y2 = ' + y2 + ' ' + ' ' + 'Высота прямоугольника =' + ' ' + height2 ;
    console.log(rectangle);
    }

    document.querySelector('#but_bias_x').onclick = function () {

        bias_x = +document.querySelector('#bias_x').value;

        rectangle[3] = +document.querySelector('#y2').value

        rectangle[0] = rectangle[0] + bias_x
        rectangle[2] = rectangle[2] + bias_x
    

        x1 = rectangle[0];
        y1 = rectangle[1];
        x2 = rectangle[2];
        y2 = rectangle[3];
    
    coordinates4.innerHTML = 'x1 = ' + x1 + ', ' + 'y1 = ' + y1 + ', ' + 'x2 = ' + x2 + ', ' + 'y2 = ' + y2;
    console.log(rectangle);
    }


    document.querySelector('#but_point').onclick = function () {

        rectangle[0] = +document.querySelector('#x1').value
        rectangle[2] = +document.querySelector('#x2').value

        point_x = +document.querySelector('#point_x').value;
        point_y = +document.querySelector('#point_y').value;

        if (point_x > rectangle[0] && point_x < rectangle[2] && point_y > rectangle[1] && point_y < rectangle[3]) {
            alert('Точка находится втутри прямоугольника');
        } else {
            alert('Точка НЕ находится втутри прямоугольника');
        }
    
        x1 = rectangle[0];
        y1 = rectangle[1];
        x2 = rectangle[2];
        y2 = rectangle[3];
    
        console.log(rectangle);
    }



