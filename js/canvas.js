window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width  = window.innerWidth;
    var height = window.innerHeight;
    canvas.height = height;
    canvas.width = width;
    canvas.addEventListener('mousedown', function(e) {
      this.down = true;  
      this.X = e.pageX ;
      this.Y = e.pageY ;
      this.color = rgb();
    }, 0);
    canvas.addEventListener('mouseup', function() {
      this.down = false;      
    }, 0);
    canvas.addEventListener('mousemove', function(e) {
      this.style.cursor = 'pointer';
      if(this.down) {
          ctx.beginPath();
          ctx.moveTo(this.X, this.Y);
          ctx.lineCap = 'round';
           ctx.lineWidth = 3;
          ctx.lineTo(e.pageX , e.pageY );
          ctx.strokeStyle = this.color;
          ctx.stroke();

         this.X = e.pageX ;
         this.Y = e.pageY ;
      }
    }, 0);

    function rgb() {
      color = 'rgb(';
      for(var i = 0; i< 3; i++) {
        color += Math.floor(Math.random() * 255)+',';
      }
      return color.replace(/\,$/,')');
    }    
  };
