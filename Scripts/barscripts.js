function draw(){
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext('2d');
    

    


// Y lines grey
    ctx.beginPath();
    ctx.strokeStyle = '#A5A8AB';
    ctx.lineWidth = 2.5;
    ctx.moveTo(150,0);
    ctx.lineTo(150,395);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#A5A8AB';
    ctx.lineWidth = 2.5;
    ctx.moveTo(250,0);
    ctx.lineTo(250,395);
    ctx.stroke();

   ctx.beginPath();
   ctx.strokeStyle = '#A5A8AB';
    ctx.lineWidth = 2.5;
    ctx.moveTo(350,0);
    ctx.lineTo(350,395);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#A5A8AB';
    ctx.lineWidth = 2.5;
    ctx.moveTo(450,0);
    ctx.lineTo(450,395);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#A5A8AB';
    ctx.lineWidth = 2.5;
    ctx.moveTo(550,0);
    ctx.lineTo(550,395);
    ctx.stroke();
    

    ctx.fillStyle = '#0C1E43';
    ctx.fillRect(90,0,250,75);
    ctx.fillStyle = '#6D1720';
    ctx.fillRect(90,80,150,75);
    ctx.fillStyle = '#0C1E43';
    ctx.fillRect(90,160,350,75);
    ctx.fillStyle = '#6D1720';
    ctx.fillRect(90,240,220,75);
    ctx.fillStyle = '#0C1E43';
    ctx.fillRect(90,320,90,75);

  

    ctx.fillStyle = '#fff';
    ctx.font="20px Verdana";
    ctx.fillText("2020",15,41);
    ctx.fillText("2015",15,122);
    ctx.fillText("2010",15,203);
    ctx.fillText("2005",15,284);
    ctx.fillText("2000",15,365);

    ctx.fillStyle = '#fff';
    ctx.font="20px Verdana";
    ctx.fillText("20",140,420);
    ctx.fillText("40",240,420);
    ctx.fillText("60",340,420);
    ctx.fillText("80",440,420);
    ctx.fillText("100",540,420);
    ctx.fillText("1 = million",320,455);
    // Y line//
    ctx.beginPath();
    ctx.strokeStyle = '#000';;
    ctx.lineWidth = 2.5;
    ctx.moveTo(90,0);
    ctx.lineTo(90,395);
    ctx.stroke();
// x line//
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.moveTo(88,395);
    ctx.lineTo(650,395);
    ctx.stroke();



    



}