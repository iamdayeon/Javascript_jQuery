# [Javascript/jQuery]코어 라이브러리-1

## 1. 자바스크립트 코어 라이브러리란?
자바스크립트가 개발자를 위해 기본적으로 제공해주는 기능을 말한다.   
개발자는 이 기능을 이용하여 개발을 하고 또한 개발자만의 고유 라이브러리를 만들 수가 있다.

<br/>

## 2. 타이머 함수
### 2-1. 타이머 함수란?
타이머 함수는 일정한 시간마다 특정 구문을 실행하고자 할 때 사용하는 기능이다.

▶ 타이머 함수의 실무에서의 활용
  - 이미지 슬라이더에서 일정한 시간마다 이미지가 자동으로 슬라이드 되는 기능
  - 롤링 배너에서 일 시간마다 배너를 변경하는 기능
  - 일정 시간마다 자동으로 변경되는 실시간 검색어 기능
  - 게임에서 플레이 시간을 나타내는 기능

▶ 타이머 함수의 종류
  - setInterval() : 일정 시간마다 주기적으로 특정 구문을 실행하는 기능
  - setTimeout() : 일정 시간이 지난 후 특정 구문을 딱 한번 실행하는 기능
  - clearInterval() : 실행 중인 타이머 함수를 멈추는 기능 

▶ 타이머 함수는 모두 전역 객체인 window에 포함 되어 있다.

<br/>

### 2-2. 일정 시간마다 특정 구문을 실행하는 타이머 만들기
일정 시간마다 특정 구문을 실행하기 위해선 setInterval()함수를 사용한다.
  - 사용법  var timerID = setInterval(func, duration);
  - 매개변수 
     func : 지연 시간마다 타이머 함수에 의해 호출되는 일종의 콜백 함수이다.
     duration : 지연 시간, 단위는 밀리초이다.
 - 리턴값은 생성된 타이머 ID이다. 이 ID는 실행한 타이머 함수를 멈출 때도 사용한다.
 - 아래와 같이 1초마다 숫자가 증가하는 프로그램 만들기

```
var $output = $("#output");
var count = 0;

function addCount() {
   count++;
   $output.text(count);
}
setInterval(addCount, 1000);
```

<br/>

### 2-3. 일정 시간 지난 후, 딱 한번 실행되는 타이머 만들기
   - 일정 시간 지난 후, 딱 한번 특정 구문을 실행하기 위해선 setTimeout()함수를 사용한다.
   - 사용법  var timerID = setTimeout(func, duration);
   - 매개변수 
      func : 지연 시간마다 타이머 함수에 의해 호출되는 일종의 콜백 함수이다.
      duration : 지연 시간, 단위는 밀리초이다.
  - 리턴값은 생성된 타이머 ID이다.이 ID는 실행한 타이머 함수를 멈출 때도 사용한다.
  - 아래와 같이 5초 후, “안녕하세요“를 화면에 출력하는 프로그램 만들기

```
var $output = $("#output");
setTimeout(function() {
   $output.text("안녕하세요. 환영합니다.");
}, 5000);
```

<br/>

### 2-4. 타이머 멈추기
  - setInterval(), setTimeout()함수를 이용하여 생성한 타이머는 clearInterval()함수를 이용해서 멈출 수 있다.
  - 사용법   clearInterval(timerID);
  - 매개변수   timerID : 제거할 타이머 ID이다.
  - 리턴값은 없다.
  - 아래와 같이 변수값을 1초에 한 번 1씩 증가시키고 이 값을 화면에 출력하는데, 정지버튼을 누르면 더 이상 실행하지 않는 프로그램 만들기

```
var $output = $("#output");
var count = 0;
var timerID = 0;
timerID = setInterval(function() {
   count++;
   $output.text(count);
}, 1000);

$("#stop").click(function() {
   clearInterval(timerID);
});
```

<br/>

## 3. Math 클래스 
### 3-1. Math클래스의 용도
  - Math클래스에는 숫자를 랜덤하게 생성하는 기능부터 사인(sin), 코사인(cos)과 같은 수학 관련 기능이 담겨 있다.

▶ Math클래스의 실무에서의 기능
  - 배너나 이미지 슬라이더의 컨텐츠를 랜덤하게 보여줄 때, Math.random()함수를 이용한다
  - 컨텐츠의 위치를 무작위로 설정할 때도 Math.random()함수를 이용한다.
  - 게시판의 페이지 수를 구할 때 Math.ceil()함수를 이용한다.
  - 이미지 갤러리 제작 시 이미지를 곡선을 따라 나열하고 싶을 때 Math.sin()함수를 사용한다.

▶ Math 클래스의 주요 기능
  - 프로퍼티  PI : 원주율 값

▶ 함수(메서드)목록
| 메서드 | 설명 |
| --- | --- |
| abs() | 절대값을 반환 | 
| acos() | 아크코사인 값을 반환 | 
| asin() | 아크사인 값을 반환 | 
| atan() | 아크탄젠트 값을 반환 | 
| atan2() | x축과 주어진 점이 이루는 각도를 라디안 값으로 반환 | 
| ceil() | 올림값을 반환 | 
| cos() | 코사인 값을 반환 | 
| floor() | 숫자의 버림값을 반환 | 
| log() | 자연로그 값을 반환 | 
| max() | 두 수 중 큰 값을 반환 | 
| min() | 두 수 중 작은 값을 반환 | 
| random() | 0과 1사이의 난수 값을 반환 | 
| round() | 가장 가까운 정수로 반올림하거나 반내림한 값을 반환 | 
| sin() | 사인 값을 반환 | 
| sqrt() | 제곱근을 반환 | 
| tan() | 탄젠트 값을 반환 | 

▶ Math클래스는 다른 자바스크립트 코어 클래스와는 달리 대부분의 기능이 클래스 메서드(정적메서드)로 구현되어 있어서 인스턴스 생성 없이 바로 사용할 수 있다라는 장점을 가지고 있다.

<br/>

### 3-1. 랜덤 숫자 만들기
  - Math클래스에서 제공하는 random()메서드를 이용한다.
  - 사용법  var num = Math.random()*범위 값;
  - 매개변수 : 없음
  - 리턴값 : 0.0이상 ~ 1.0미만의 소수 값
  - 아래는 1초에 한 번씩 50에서 100 사이의 숫자(정수)를 출력하는 프로그램
```
$(document).ready(function() {
   $info = $("#info");
   showRandom();
   setInterval(showRandom, 1000);
});
function shoeRandom() {
   var value = parseInt(Math.random() * 50) + 50;
   $info.html(value);
}
```

<br/>

### 3-2. 작은 값, 큰 값 알아내기
  - Math클래스에서 제공하는 Math.max(), Math.min() 메서드를 이용한다.
  - 사용법  var max = Math.max(num1, num2);
  - 매개변수 : num1, num2의 비교할 숫자 값
  - 리턴값 : 두 개의 값 중 큰 값을 리턴
  - 사용법  var min = Math.min(num1, num2);
  - 매개변수 : num1, num2의 비교할 숫자 값
  - 리턴값 : 두 개의 값 중 작은 값을 리턴
   아래 코드는 숫자를 입력 받아서 비교하여 작은 값을 리턴하고 알림창을 띄우는 프로그램
```
var value = window.prompt("숫자를 입력", 0);

min = Math.min(100, Math.max(10, value));
alert("작은 값 : " + min);
```

<br/>

### 3-3. 숫자 내림값, 올림값 구하기
  - Math클래스에서 제공하는 Math.floor(), Math.ceil() 메서드를 이용한다.
  - 사용법  var result = Math. floor(num);
  - 매개변수 : num 실수 값
  - 리턴값 : 입력 값이 실수인 경우 내림한 정수값
  - 사용법  var result = Math.ceil(num);
  - 매개변수 : num 실수 값
  - 리턴값 : 입력 값이 실수인 경우 올림한 정수값
    아래 코드는 10.2를 내림, 올림하고 알림창을 띄우는 프로그램
```
var result = Math.floor(10.2);
alert(result); //10출력

result = Math.ceil(10.2);
alert(result);  //11출력
```  
  
