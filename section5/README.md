# [Javascript/jQuery]함수의 종류
## 1. 함수의 분류
함수(function)는 크게 두 가지 분류로 나눌 수 있다.
+ 사용자 정의 함수 : 사용자가 필요한 기능을 직접 만든 함수를 말한다.
+ 자바스크립트 코어 함수 : 자바스크립트가 기본적으로 제공하는 함수를 코어 함수라고 한다.<br/>
    ex) parseInt(), Math.random() 등

<br/>

## 2. 사용 방법에 따른 함수 종류
함수는 사용방법에 따라 아래와 같이 나눌 수 있다.
### ① 일반 함수
가장 일반적으로 사용한 함수를 지칭한다.
```
function add(x,y){
...
}
```

<br/>

### ② 중첩 함수
- 함수 안에 함수가 있는 경우 중첩되었다라고 하며 이 때, 함수안에 있는 함수를 중첩함수라고 한다. 

<br/>

#### ②-1. 중첩 함수란?
- 함수 내부에는 일반 구문 뿐 아니라, 새로운 함수 구문까지도  넣을 수 있다. 이때 함수 내부에 만들어지는 함수를 중첩 함수라 칭한다.

<br/>

#### ②-2. 중첩 함수의 용도
▶ 내부 전용 함수
      ; 중첩함수는 함수 내부의 지역변수처럼 함수 내부에서만 사용할 수 있다.즉, 함수 내부에서만  사용하는 기능을 중첩함수로 만들어 사용하는 것이다.

▶ 일반적으로 중첩함수는 이름이 없는 이벤트 리스너로 많이 활용된다.
```
$(document).ready(function((){
  $("#btnStart").click(function(){
      alert("안녕하세요.");
  });
});
```
→ 클릭 이벤트 리스너가 중첩함수로 사용된 형태

▶ 중복 코드 또는 그룹화
      ; 함수 내부의 커다란 기능이나 중복 코드를 내부 함수로 만들어 재사용할 때도 중첩함수를 사용한다. 아울러 중첩함수는 외부 함수와 내부 함수의 아주 밀접한 관계일 때 사용하는 것이 좋다.

<br/>

#### ②-3. 중첩함수와 중첩함수를 포함한 함수와의 관계
중첩함수에서 중첩함수를 포함하고 있는 함수의 지역변수에 접근해서 사용할 수 있다는 점이다.

```
var a=10;
var b=20;
var c=30;
function outer_func(){
   var b=200;
   var c=300;
   function inner_func(){
      var c=3000;
      document.write("1. a =" + a + "<br/>");
      document.write("2. b =" + b + "<br/>");
      document.write("3. c =" + c + "<br/>");
   }
   inner_func();
}
outer_func();
```
→ 실행 결과   
1. a = 10   
2. b = 200   
3. c = 3000   

<br/>

### ③ 콜백 함수**
함수 실행결과 값을 리턴이 아닌 매개변수로 넘어온 함수를 호출해서 넘겨주는 방식을 콜백이라 하며 
이때 매개변수로 넘어온 함수를 콜백함수라 한다.

<br/>

#### ③-1. 콜백 함수란?
문법
```
function fun(callback){
     ....
     callback(결과);
}
```
- 콜백 함수는 주로 함수 내부의 처리 결과값을 함수 외부로 내보낼 때 사용한다.(일종의 return문과 비슷한 기능을 한다.)
- 콜백 함수를 사용하는 구조는 특정함수의 매개변수 값으로 콜백함수를 넘긴 후, 처리 결과를 콜백 함수의 매개변수에 담아 콜백 함수를 호출하는 구조를 가지고 있다.
- 이에 따라, 로직 구현 부분은 동일하고 로직 처리 부분을 다양하게 처리해야 하는 경우에 유용하다.(예제로 살펴보자)

<br/>

#### ③-2. 콜백 함수의 예
![alt 콜백함수](https://postfiles.pstatic.net/MjAyMjAxMjdfMTk1/MDAxNjQzMjk0OTUzOTY2.tc1soNb3NLfyIHcyxxVKTd8S-dbLbF9d3N9u_9oL8Gog.Y3Lr9HkShhsJVK61NPi0Qh51OmHaug0sG6kTWLWD_i4g.JPEG.daykkk/1.JPG?type=w966)

![alt 콜백함수](https://postfiles.pstatic.net/MjAyMjAxMjdfMTcw/MDAxNjQzMjk0OTU0MDMz.z1qg39JR38pHfe9Ewrlg0B33Hdbes8KsEAf04DMeUy0g.eQmbWX3SEqyI-Eio1Dz6qYGXv0MsyUNs3ZbQRM-a6Dwg.JPEG.daykkk/2.JPG?type=w966)
1. 위와 같이 로직 구현부는 동일하게 하고, 로직 처리 부분을 분리해서 구현하여 원하는 로직 처리 부분을 호출하면 된다.<br/>
   그렇게 되면 유지보수 할 때 로직 처리 부분만 수정을 하면 되므로 큰 장점이 된다.   
2. 아울러, 로직 처리 부분을 다양하게 하여 필요에 맞게 로직 부분과 처리 부분을 조립하듯이 연결하여 사용이 가능하다.

<br/>

#### ③-3. 콜백 함수냐? return문이냐?     
![alt return문](https://postfiles.pstatic.net/MjAyMjAxMjdfMjcx/MDAxNjQzMjk1MDAwNzM1.upYVL_YL2J_OIfekr9f0S8d2-bm1IxWILiIqBKIpQFEg.O2syGPl0ckhLenoQ6XF9iBIa1UZEou6OAQUJuQ8X1eYg.JPEG.daykkk/3.JPG?type=w966)

![alt 콜백함수](https://postfiles.pstatic.net/MjAyMjAxMjdfMjU0/MDAxNjQzMjk1MDAwNzY5.HZt1kg-n0IKtac6-KhdlDtamoxpuU_pY9RFfurj-4R4g.zHH_TqPdvKJcfkNdLr6XUoxTW20ECAQInC7efCUwiMQg.JPEG.daykkk/4.JPG?type=w966)

1. 위와 같이 return문이나 콜백 함수를 사용하면 결과는 동일하다.   
2. 하지만, 통상적으로 단순한 처리는 return문을 이용하는 것이 더 효율적이다.   
3. 콜백 함수는 사용해야 하는 경우는 처리 부분과 구현 부분과 분리되어야 하는 경우나 구현 부분은 하나로 하고 처리 부분을 다양하게 만든 후 실행 시에 연결해서 사용하는 경우에 적합하다.(중요)

<br/>

#### ③-4. 동기 그리고 비동기란?
콜백 함수를 이해하기 위해서 동기와 비동기의 개념을 확실히 알자.   
▶ 동기(synchronize) : 일반적으로 함수가 호출된 후 끝날 때까지 다음 구문을 실행하지 않고 대기하는 것을 동기라고 칭한다.
```
alert("안녕하세요.");
document.write("alert()동작이 끝나야 이 내용은 실행됩니다.");
```

<br/>

▶ 비동기(unsynchronized) : 비동기는 동기의 반대 개념이다.함수가 호출된 후 끝날 때까지 기다리지 않고 다음 구문을 바로 실행하는 것을 비동기라 칭한다.
```
var count=1;
setInterval1(function(){
   document.write("2.count = " + count);
},3000);
document.write("동작이 모두 끝나지 않았어도 바로 실행됩니다.");
```

※ 동기, 비동기의 개념을 알아야 하는 이유는 바로 콜백 함수가 주로 비동기 함수의 결과값을 처리하기 위한 방법으로 주로 사용되어지기 때문이다.(중요)  

<br/>

#### ③-5. 콜백 함수의 실무적인 형태
실무에서 콜백 함수는 다음과 같은 경우에 많이 사용된다.
- 이벤트 리스너로 사용(버튼을 클릭 등)
- 타이머 실행 함수로 사용(특정 시간마다 실행하는 경우 등)
- 서버와 데이터를 주고받을 때 사용하는 jQuery Ajax 기능들에서 결과물을 받을 때(서버 접속, DB접속 등)
- jQuery 애니메이션 기능에서 애니메이션이 모두 끝났을 때, 실행하고자 하는 함수

즉, 위와 같이 콜백 함수는 로직 구현 부분과 로직 처리 부분을 나눠 작업할 때 주로 사용한다.

<br/>

### ④ 클로저 함수
일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게 되면 함수 내부에서 만든 지역변수가 자동으로 사라지지만 어떤 경우에는 사라지지 않고 남는 경우가 존재하는데 이 현상을 클로저라고 하며 이 현상을 일으키는 함수를 클로저 함수라 칭한다.

#### ④-1. 클로저란?
- 클로저는 함수 내부에 만든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태를 의미한다.
```
function func() {
   var count =1;
   $("btn").on("click",
      function() {
         count++;
         alert("count = " + count);
      }
   );
}
```
→ 일반 지역 변수의 경우 함수 호출이 완료되면 사라지는게 원칙이다.
하지만 좌측과 같이 클로저를 이용하면 함수 호출 완료 후에도 사라
지는 지역변수를 사라지지 않는 데이터 저장소로 만들 수가 있다.


- 위와 같이 변수가 메모리에서 제거되지 않고 계속해서 값을 유지하는 상태를 클로저라고 칭하며, 내부에 있는 함수를 클로저 함수라 부른다
```
function start() {
   var count = 0;
   aetInterval(function() {
      count++;
      document.write(count);
   }, 1000);
}
start();
```
→ 역시 start()가 실행되면서 지역변수인 count변수가 만들어지고 
setInterval의 익명함수에서 count를 사용하고 있기 때문에 값이 계속해
서 증가가 된다.이 때 이 익명함수를 또한 클로저 함수라고 부른다.

※ 이처럼 클로저 변수가 사라지지 않고 계속해서 값을 유지하는 상태를 전부 클로저라고 한다.(중요)

<br/>

#### ④-2. 클로저의 장점
- 연관 있는 변수와 기능(중첩 함수)을 하나의 함수로 묶어서 독립적으로 실행시킬 수가 있다.
- 즉, 함수 내부에 데이터가 만들어지기 때문에 함수 외부에서 수정할 수 없는 보호된 데이터를 만들 수 있다는 것이다.
- 이런 형태의 데이터는 객체지향 프로그래밍에서는 private데이터 즉, 캡슐화 된 데이터라고 부른다.
```
function tabMenu(selector){
   //선택한 탭메뉴를 저장할 변수
   var $selsctMenuItem =null;
   //메뉴 항목에 클릭 이벤트 등록
   $(selector).click(function(){
      //기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기
      if($selectMenuItem!=null){
         $selectMenuItem.removeClass("select");
      }
      //클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
      $selectMenuItem = $(this);
      //선택상태로 만들기
      $selectMenuItem.addClass("select");
   })
}
```
→ 클로저를 사용하여 메뉴 선택 시 그 값을 계속 유지함 
