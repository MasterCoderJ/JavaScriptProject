class Enemy {
    constructor(container, src, x, y, width, height, velX, velY) {
        //super(container, src, x, y, width, height, velX, velY);
        this.container =container;
        this.img= document.createElement("img");
        this.src = src;
        this.x = x;
        this.y= y;
        this.velX = velX;
        this.velY = velY;
        this.width= width;
        this.height= height;

        this.img.src = this.src;
        
        //스타일 적용
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width= this.width +"px";
        this.img.style.height= this.height+"px";

        this.container.appendChild(this.img);

        

    }
    tick() {
        this.x += this.velX;
        this.y += this.velY;
    }


    render(){       

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.removeFromScreen();
    }

    removeFromScreen() {

        //적군객체 화면밖 이동시 제거
        if (this.x > screen.width - 400 || this.y > screen.height + 400 || time==0) {

            // 1)화면에서 제거
            this.container.removeChild(this.img); //요소 제거

            // 2)배열에서 제거
            let index = enemyArray.indexOf(this);
            enemyArray.splice(index, 1);
        }
    }


}