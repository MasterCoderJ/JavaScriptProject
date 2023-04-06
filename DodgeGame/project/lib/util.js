 //랜덤값 계산이 귀찮고 번거롭지만, 앞으로 자주 사용될가능성이 높으므로 함수로 정의해놓고 재사용 + n은 매개변수
function getRandom(n){
    return parseInt(Math.random()*n); // 0~1미만의 소수점 반환 절대 1이 될 수 없음
    }

//범위가 있는 랜덤값
/* min : 시작값
    max: 끝값
    예) 원하는 시작값이 5이고 끝값이 8이라면 Math.random()에 몇을 곱해야하는가*/

function getRandomWithRange(min,max){
  var result = min+parseInt(Math.random()*(max-min+1)); 
  return result;
}

//게임 개발시 사용될 충돌 체크 함수
//충돌여부 판단 res1 = 북서쪽 res2= 남서, res3= 북동 res4= 남동

function collisionCheck(me,you) {
  let result1 = (me.y + me.height >= you.y) && (me.x + me.width >= you.x);

  let result2 = (me.x + me.width >= you.x) && (me.y <= you.y + you.height);

  let result3 = (me.x <= you.x + you.width) && (me.y + me.height >= you.y);

  let result4 = (me.x <= you.x + you.width) && (me.y <= you.y + you.height);

  return result1 && result2 && result3 && result4;
}
