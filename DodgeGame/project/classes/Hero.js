class Hero {
    constructor(container, src, x, y, width, height, velX, velY) {

        this.container = container;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.img = document.createElement("img");
        this.flag = true;

        //스타일
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";


        this.container.appendChild(this.img);
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;

        for (let i = 0; i < enemyArray.length; i++) {

            let result = collisionCheck(this, enemyArray[i]);

            if (result) {
                this.img.remove();
                clearInterval(startClock);
                //clearInterval(startEnemy);
                clearInterval(gameLoopStart);
                defeat();
                setTimeout("document.location.reload()", 5000);
            }
        }

        //위 아래 경계
        if (this.y + this.height >= parseInt(stage.style.height) || this.y <= 0) {
            this.velY = -this.velY;
        }

        //좌 우 경계를 넘어서면
        if (this.x + this.width >= parseInt(stage.style.width) || this.x <= 0) {
            this.velX = -this.velX;
        }
    }

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}