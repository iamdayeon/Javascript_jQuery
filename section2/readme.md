# [Javascript/jQuery]조건문, 반복문
## 1. 조건문
### 1-1. if 문
괄호 안의 조건이 true이면 { } 사이의 명령을 처리하고, false 이면 { } 안의 명령 무시

```
if(true){
    alert('result : true');
}
```
→ 결과 출력

<br/>

### 1-2. if … else 문
- if( ) 문의 괄호 안의 조건이 true이면 if 다음에 있는 { }의 명령을 처리하고, false이면 else 다음에 있는 { } 안의 명령 실행
- else if 문과 else 문은 옵션으로 사용할 수도 안할 수도 있다. if 문과 else 문은 2번 이상 사용할 수 없지만 else if 문은 여러 번 사용할 수 있다.

```
if(true){
    alert(1);
} else {
    alert(2);
}
```
→ 결과는 1 출력

<br/>

### 1-3. else if 문
- else if는 좀 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공
- else if의 특징은 if나 else와는 다르게 여러개가 올 수 있다
- else if의 모든 조건이 false라면 else가 실행된다. else는 생략 가능하다

<br/>

### 1-4. 삼항 조건 연산자 
삼항 조건 연산자(ternary operator)는 조건식의 평가 결과에 따라 반환할 값을 결정한다.    
자바스크립트의 유일한 삼항 연산자이며 부수 효과는 없다. 삼항 조건 연산자 표현식은 아래와 같이 사용한다.

```
조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값
```

```
var score =75;
(score >= 60) ? alert("통과") : alert("실패");
```
→ 
(score >= 60) → 조건   
? alert("통과") → 조건이 true일 때 실행   
: alert("실패"); → 조건이 false일 때 실행   

```
if(score >= 60) {
alert("통과");
}
else{
alert("실패")
}
```
→  위 예제를 if구문으로 변경 시

<br/>

### 1-5. 논리 연산자 
논리 연산자(Logical Operator)는 우항과 좌항의 피연산자(부정 논리 연산자의 경우, 우항의 피연산자)를 논리 연산한다.   
논리 부정(!) 연산자는 언제나 불리언 값을 반환한다. 하지만 논리합(||) 연산자와 논리곱(&&) 연산자는 일반적으로 불리언 값을 반환하지만 반드시 불리언 값을 반환해야 하는 것은 아니다.

| 논리 연산자 | 의미 | 
| --- | --- | 
| \|\| | 논리합(OR) | 
| && | 논리곱(AND) | 
| ! | 부정(NOT) | 

<br/>

### 1-6. switch 문
- if - 사용범위가 넓다
- switch - 한정된 데이터(가독성이 높다는 장점이 있다)

switch -> case -> break -> default(옵션)   
break가 없으면 코드 전체가 출력된다. 

```
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```

```
<script>
        //사용자로부터 입력받는 부분
        var rank = window.prompt("직급을 입력하세요.1-부장, 2-차장, 3-과방, 4-대리, 5-사원");
        //swith문은 정형화, 한정된 데이터에 가독성을 좋게 하고자 한다면 switch문을 사용할 것을 고려해도 좋다.
        switch(rank){
            case "1" : document.write("<p>부장의 급여는 <strong>700만원</strong>입니다.");
                 break //break문이 없으면 입력한 부분 아래에 있는 내용을 다 출력 함
            case "2" : document.write("<p>차장의 급여는 <strong>600만원</strong>입니다.");
                 break
            case "3" : document.write("<p>과장의 급여는 <strong>500만원</strong>입니다.");
                 break
            case "4" : document.write("<p>대리의 급여는 <strong>350만원</strong>입니다.");
                 break
            case "5" : document.write("<p>사원의 급여는 <strong>200만원</strong>입니다.");
                 break
            //default는 옵션이다
            default : alert("잘못 입력하셨습니다.");
        }
```
→  switch 문은 case, default, break 등 다양한 키워드를 사용해야 하고 폴스루가 발생하는 등 문법도 복잡하다.    
if…else 문으로 해결할 수 있다면 if…else 문을 사용하는 편이 좋다.    
하지만 if…else 문보다 switch 문을 사용했을 때 가독성이 더 좋다면 switch 문을 사용하는 편이 좋다.

<br/>

## 2. 반복문
반복문(Loop statement)은 주어진 조건식(conditional expression)의 평가 결과가 참인 경우 코드 블럭을 실행한다. 그 후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행한다. 이는 조건식이 거짓일 때까지 반복된다.

자바스크립트는 3가지의 반복문 for 문, while 문, do…while 문을 제공한다. 그 외에도 for..in 문, ES6에서 새롭게 도입된 for…of 문이 있다. for..in 문과 for…of 문에 대해서는 나중에 살펴보기로 하자.

<br/>

### 2-1. 반복문 for 문
- for 문은 조건식이 거짓으로 판별될 때까지 코드 블록을 반복 실행한다. 가장 일반적으로 사용되는 반복문
- 여러 명령을 늘어 놓지 않고 소스를 간단하게 작성할 수 있음
- 소스의 양이 줄어 실행 속도가 빨라짐

```
for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
반복해서 실행될 코드
}
```

![alt 예제](https://postfiles.pstatic.net/MjAyMjAxMTFfMTM3/MDAxNjQxODY3MzE1OTQ2.w2FnWMWHcZHuADRxRlpvAr6pTw4uUhmyn43Fo5mHD6kg.mDL17Bkn8e7Hc6TnDgQGLoUt8WOvwkp66uzcM4ekQmkg.PNG.daykkk/KakaoTalk_20220110_173409556.png?type=w966)

<br/>

### 2-2. 반복문 while 문, do..while 문
- for문 : 반복 횟수 기준
- while문 : 특정 조건에 따라 반복(무한루프)
- do…while문 : 사용자에게 일단 물어보는 프로그램(무조건 한번 이상 실행)

```
while (조건){
반복해서 실행할 코드
}
```

![alt 예제](https://postfiles.pstatic.net/MjAyMjAxMTFfMjk2/MDAxNjQxODY3MzY5Njcw.uLSf_Q9fRuDYABOYf24DN0697q1Wy1xBTEMnsd-WFTog.kL3OdMMFssx7jzSLS4hbSRWAFZ6j_ETOm_4xJ_mcvQgg.PNG.daykkk/KakaoTalk_20220110_175427417.png?type=w966)

<br/>

## 3. break문
반복문의 흐름에서 바로 빠져나올 때 사용

<br/>

## 4. continue문
주어진 조건에 맞는 값을 만났을 때 실행하던 반복 문장을 건너뛰고 반복문의 맨 앞으로 되돌아갑니다. 
