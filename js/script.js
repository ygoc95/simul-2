
var canvas = new fabric.Canvas('upper', {
    backgroundColor: 'rgb(100,100,200)',
    selectionColor: 'blue',
    selectionLineWidth: 2,
    height:997,
    width:900,    
    // ...
  });

var roomImgElement = document.getElementById('interior-bg');  
var RoomImgInstance = new fabric.Image(roomImgElement, {
    left: 0,
    top: 0,
    selectable:false,
    evented:false,    

    });

canvas.add(RoomImgInstance);

var imageUrl = './images/floor/beige.png';
var floorimage = fabric.Image.fromURL(imageUrl, function(myImg) {
    myImg.set({
        left:-160,
        top: -245,
        scaleX:1.5,
        scaleY:1.25,            
        selectable:false,
        evented:false   
    });
    canvas.add(myImg);
    canvas.moveTo(myImg,-1);   
    canvas.renderAll(canvas);

});


function buttonClicked(clicked_id,place) {
    if(place=="wallpaper"){
        var imageUrl = './images/wallpapers/'+clicked_id+'.png';
        var wallImage = fabric.Image.fromURL(imageUrl, function(myImg) {        
            myImg.set({
                right:100,
                top: 0,
                scaleY:1.5,            
                selectable:false,
                evented:false   
            });
            canvas.add(myImg);
            canvas.moveTo(myImg,-2);   
            canvas.renderAll(canvas);
           
        });
    } else if(place=="floor"){
        var imageUrl = './images/floor/'+clicked_id+'.png';
        var floorImage = fabric.Image.fromURL(imageUrl, function(myImg) {        
            myImg.set({
                left:-160,
                top: -245,
                scaleX:1.5,
                scaleY:1.25,            
                selectable:false,
                evented:false   
            });
            canvas.add(myImg);
            canvas.moveTo(myImg,-1);   
            canvas.renderAll(canvas);
           
        });
    }
}


