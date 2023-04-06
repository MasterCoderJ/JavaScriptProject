class Nuclear {
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
    }

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.removeWithEnemy();
        this.removeFromScreen();
    }


    removeFromScreen() {
        //총알제거
        if (this.y > stage.height + 100) {

            try {
                // 1)화면에서 제거
                this.container.removeChild(this.img);

                // 2)배열에서 제거
                let index = bulletArray.indexOf(this);
                bulletArray.splice(index, 1);

            } catch (e) {
                console.log("이미제거된 총알")
            }
        }
    }

    removeWithEnemy() {

        for (let i = 0; i < enemyArray.length; i++) {

            let result = collisionCheck(this, enemyArray[i]);

            if (result || time==0) {

                try {
                    //1)화면에서 제거(총알,적군) 
                    this.container.removeChild(this.img);
                    this.container.removeChild(enemyArray[i].img);

                    //2)배열에서 제거                   
                    let index = bulletArray.indexOf(this); //총알
                    bulletArray.splice(index, 1);

                    index = enemyArray.indexOf(enemyArray[i]); //적군
                    enemyArray.splice(index, 1);
                } catch (e) {
                    console.log("이미제거된 적군입니다");
                }
            }

        }
    }


}