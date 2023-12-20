// "use strict"
//4 Игра угадай ячейку
/*
№1

*/
// let table=document.querySelector("#table");
// createTable(table, 10, 10);
// let sluchs=sluch(10, 0, 99)
// let tds = document.querySelectorAll("#table td");
// console.log(sluchs)
// let win=0;
// for(let i=0; i<tds.length; i++){
//     tds[i].textContent=i;
//     tds[i].addEventListener("click", function func(){
//         if (sluchs.includes(i)){
//             this.classList.add("green")
//             win++;
//             if(win < 11){
//                 alert("pobeda")
//             }
//         }else{
//             this.classList.add("red")
//         }
//         this.removeEventListener("click", func)
//     })
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function sluch(count, min, max){
//     return rand(createArr(min, max)).slice(0, count);
// }

// function createArr(min, max){
//     let res=[];
//     for(let i=min; i<=max; i++){
//         res.push(i);
//     }
//     return res;
// }

// function rand(arr){
//     let res=[];
//     while (arr.length>0){
//         let random = getRandomInt(0, arr.length-1);
//         let elem = arr.splice(random, 1)[0];
//         res.push(elem);
//     }
//     return res;
// }
// function createTable(table, rows, cols){
//     for(let i=0; i<rows; i++){
//         let tr = document.createElement("tr");
//         for(let j=0; j<cols; j++){
//             let td = document.createElement("td");
//             tr.append(td)
//         }
//         table.append(tr)
//     }
// }

/*
№2

*/

// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
            
//         })
//     }

// }
// func(10, 0, 100)


// let btn = document.createElement("button")
// btn.textContent = "start"
// let hhh = 10;
// let table = document.querySelector("table")
// let right = 0;
// table.classList.add("none")
// btn.addEventListener("click", function func2(){
//     table.classList.toggle("none");
//     let p = document.createElement("p")
//     let timer = setInterval(function(){
//         p.textContent = hhh--
//         div.prepend(p)
//         if(hhh < -1){
//             clearInterval(timer)
//             for(let td of tds){
//                 if(td.style.background == "green"){
//                     right++
//                 }
//             }            
//             alert(`Time over. Отгадано ${right}/10 ячеек`)
//             table.classList.toggle("none")
//             p.textContent = ""
//         }
//     }, 1000)
//     btn.removeEventListener("click", func2)
// })
// div.appendChild(btn)



//5 Экранная клавиатура
/* 
№1

*/
// let keyboard=document.querySelector(".keyboard");
// let polvved=document.querySelector("#inp")
// let arr=[...'1234567890abcdefghijklmnopqrstuvwxyz'];
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//         polvved.value+=span.textContent
//     })
// }

/*
№2

*/
// let keyboard=document.querySelector(".keyboard");
// let polvved=document.querySelector("#inp")
// let arr=[...'1234567890abcdefghijklmnopqrstuvwxyz'];
// let capsLK= document.querySelector("#btnCL");
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//         polvved.value+=span.textContent
//     })
// }
// let toLower=true;
// let spans=document.querySelectorAll(".buttonSimvol");
// capsLK.addEventListener("click", function(){
//     for(let span of spans){
//         if(toLower==true){
//             span.textContent=span.textContent.toUpperCase();
//         }else{
//             span.textContent=span.textContent.toLowerCase();
//         }
//     }
//     toLower=!toLower;
// })

//6 Линейный календарь 
/*
№1

*/
// let arrDates=[
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31
// ]
// let ulKalendar=document.querySelector("#kalendar");
// for (let elem of arrDates){
//     let li = document.createElement("li");
//     li.classList.add("liDate");
//     li.textContent=elem;
//     ulKalendar.appendChild(li);
// }

/*
№2

*/
// let arrDates=[
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31
// ]
// let ulKalendar=document.querySelector("#kalendar");
// let now  = new Date();
// let date = now.getDate();
// for (let elem of arrDates){
//     let li = document.createElement("li");
//     li.classList.add("liDate");
//     li.textContent=elem;
//     if(li.textContent==date){
//         li.classList.add("red")
//     }
//     ulKalendar.appendChild(li);
// }

/*
№3

*/
// let arrDates=[
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31
// ]
// let ulKalendar=document.querySelector("#kalendar");
// let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']
// let now  = new Date();
// let date = now.getDate();
// let dateMonth = now.getMonth();
// let dateYear = now.getFullYear();
// let h1=document.querySelector("h1");
// h1.textContent=`${arrMonths[dateMonth]}  ${dateYear}`;

// for (let elem of arrDates){
//     let li = document.createElement("li");
//     li.classList.add("liDate");
//     li.textContent=elem;
//     if(li.textContent==date){
//         li.classList.add("red")
//     }
//     ulKalendar.appendChild(li);
// }

/*
№4


*/
// let last=document.querySelector("#last");
// let next=document.querySelector("#next");
// let arrDates=[
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31
// ]
// let ulKalendar=document.querySelector("#kalendar");
// let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']
// let now  = new Date();
// let date = now.getDate();
// let dateMonth = now.getMonth();
// let dateYear = now.getFullYear();
// let h1=document.querySelector("h1");
// h1.textContent=`${arrMonths[dateMonth]}  ${dateYear}`;

// for (let elem of arrDates){
//     let li = document.createElement("li");
//     li.classList.add("liDate");
//     li.textContent=elem;
//     if(li.textContent==date){
//         li.classList.add("red")
//     }
//     ulKalendar.appendChild(li);
// }
// last.addEventListener("click", function(event){
//     event.preventDefault();
//     ulKalendar.innerHTML='';
    
//     if(dateMonth==0){
//         dateMonth=11;
//         dateYear-=1
//     }else{
//         dateMonth-=1
//     }
//     let d = new Date(dateYear, dateMonth + 1, 0);  
//     for(let i=1; i<=d.getDate(); i++){
//         let li = document.createElement("li");
//         li.classList.add("liDate");
//         li.textContent=i;
//         ulKalendar.appendChild(li);
//     }
//     h1.textContent=`${arrMonths[dateMonth]}  ${dateYear}`
// })
// next.addEventListener("click", function(event){
//     event.preventDefault();
//     ulKalendar.innerHTML='';
    
//     if(dateMonth==11){
//         dateMonth=0;
//         dateYear+=1
//     }else{
//         dateMonth+=1
//     }
//     let d = new Date(dateYear, dateMonth + 1, 0);  
//     for(let i=1; i<=d.getDate(); i++){
//         let li = document.createElement("li");
//         li.classList.add("liDate");
//         li.textContent=i;
//         ulKalendar.appendChild(li);
//     }
//     h1.textContent=`${arrMonths[dateMonth]}  ${dateYear}`
// })




//7 Поиск тегов
/*
№1

*/
/*
№2

*/
// let input = document.querySelector("#iskat");
// let result = document.querySelector(".result")
// let tegs={
//     p: "абзац",
//     h1: "заголовок",
//     span: "спан",
//     h2: "заголовок"
// }
// input.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         let tagN = input.value;
//         if(tegs[tagN]){
//             result.textContent = tegs[tagN]
//         }else{
//             result.textContent = "ошибка"
//         }
//     }
// })

//8 Поиск исторических события
/*
№1

*/
/*
№2

*/
// let input = document.querySelector("#input");
// let table = document.getElementById('table');
// let year2000 = [
// 	{
// 		date: '20.01.2000',
// 		sob: 'событие 1',
// 		opis: 'описание события 1'
// 	},
//     {
// 		date: '21.01.2000',
// 		sob: 'событие 2',
// 		opis: 'описание события 2'
// 	}
// ];
// let year2001 = [
// 	{
// 		date: '10.02.2001',
// 		sob: 'событие 3',
// 		opis: 'описание события 3'
// 	},
//     {
// 		date: '11.02.2001',
// 		sob: 'событие 4',
// 		opis: 'описание события 4'
// 	},
//     {
// 		date: '12.02.2001',
// 		sob: 'событие 5',
// 		opis: 'описание события 5'
// 	}
// ];
// let year2002= [
// 	{
// 		date: '01.02.2002',
// 		sob: 'событие 6',
// 		opis: 'описание события 6'
// 	},
//     {
// 		date: '02.02.2002',
// 		sob: 'событие 7',
// 		opis: 'описание события 7'
// 	},
//     {
// 		date: '03.02.2002',
// 		sob: 'событие 8',
// 		opis: 'описание события 8'
// 	},
//     {
// 		date: '04.02.2002',
// 		sob: 'событие 9',
// 		opis: 'описание события 9'
// 	},
// ];
// input.addEventListener("keypress", function func(event){
//     if(event.key==="Enter"){
//         table.innerHTML = "";
//         if(input.value=="2000"){
//             for (let history of year2000) {
//                 let tr = document.createElement('tr');
                
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
                
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
                
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
                
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="2001"){
//             for (let history of year2001) {
//                 let tr = document.createElement('tr');
                
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
                
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
                
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
                
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="2002"){
//             for (let history of year2002) {
//                 let tr = document.createElement('tr');
                
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
                
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
                
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
                
//                 table.appendChild(tr);
//             }
//         }else{
//             let tr = document.createElement('tr');
//             tr.textContent="год введен не верно";
//             table.appendChild(tr);
//         }
//     }
// })

//9 Гороскоп
/*
№1


№2


№3
*/
// let input=document.querySelector(".input");
// let res=document.querySelector("#result");
// let horoscop ={
//     "today":{
//         "aries": "хороший день",
//         "taurus": "плохой день",
//         "gemini": "хороший день",
//         "cancer": "плохой день",
//         "leo": "хороший день",
//         "virgo": "плохой день",
//         "libra": "хороший день",
//         "scorpio": "плохой день",
//         "sagittarius": "хороший день",
//         "capricorn": "плохой день",
//         "aquarius": "хороший день",
//         "pisces": "плохой день",
//     },
//     "tomorrow":{
//         "aries": "плохой день",
//         "taurus": "хороший день",
//         "gemini": "плохой день",
//         "cancer": "хорошийдень",
//         "leo": "плохой день",
//         "virgo": "хороший день",
//         "libra": "плохой день",
//         "scorpio": "хороший день",
//         "sagittarius": "плохой день",
//         "capricorn": "хороший день",
//         "aquarius": "плохой день",
//         "pisces": "хороший день",
//     },
//     "posletomorrow":{
//         "aries": "супер день",
//         "taurus": "плохой день",
//         "gemini": "супер день",
//         "cancer": "плохой день",
//         "leo": "супер день",
//         "virgo": "плохой день",
//         "libra": "супер день",
//         "scorpio": "плохой день",
//         "sagittarius": "супер день",
//         "capricorn": "плохой день",
//         "aquarius": "супер день",
//         "pisces": "плохой день",
//     }
// };
// input.addEventListener("keypress", function(event){
//     if(event.code==="Enter"){
//         let checkedRadio = document.querySelector('[name="day"]:checked');
//         let date = new Date();
//         if(checkedRadio.value=="today"){
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate());
//             console.log(`сегодня ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["today"][znakZodiac(input.value)]}`)
//         }else if(checkedRadio.value=="tomorrow"){
//             let dd = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)
//             console.log(`завтра ${addZero(dd.getMonth())+"."+addZero(dd.getDate())} для ${znakZodiac(input.value)} прогноз: ${horoscop["tomorrow"][znakZodiac(input.value)]}`)
//         }else{
//             let dd = new Date(date.getFullYear(), date.getMonth(), date.getDate()+2)
//             console.log(`послезавтра ${addZero(dd.getMonth())+"."+addZero(dd.getDate())} для ${znakZodiac(input.value)} прогноз: ${horoscop["posletomorrow"][znakZodiac(input.value)]}`)
//         }
        

        
//     }
// })
// function addZero(day){
//     if(day<9){
//         return "0" + day;
//     }else{
//         return ""+day;
//     }
// }
// function znakZodiac(date){
//     if(date>='03.21' && date<="04.20"){
//         return "aries";
//     }else if(date>='04.21' && date<="05.21"){
//         return "taurus";
//     }else if(date>='05.22' && date<="06.21"){
//         return "gemini";
//     }else if(date>='06.22' && date<="07.22"){
//         return "cancer";
//     }else if(date>='07.23' && date<="08.21"){
//         return "leo";
//     }else if(date>='08.22' && date<="09.23"){
//         return "virgo";
//     }else if(date>='09.24' && date<="10.23"){
//         return "libra";
//     }else if(date>='10.24' && date<="11.22"){
//         return "scorpio";
//     }else if(date>='11.23' && date<="12.22"){
//         return "sagittarius";
//     }else if(date>='12.23' && date<="12.31" ||
//              date>='01.01' && date<="01.20" ){
//         return "capricorn";
//     }else if(date>='01.21' && date<="02.19"){
//         return "aquarius";
//     }else if(date>='02.20' && date<="03.20"){
//         return "pisces";
//     }else{
//         alert("неверно введена дата")
//     }
// }

//10 Сайт предсказаний
/*
№1


№2


№3

*/
// let timer;
// let maxNumber = 10;
// let buttonStart=document.querySelector("#start");
// let buttonStop=document.querySelector("#stop");
// let result = document.getElementById('text')
// let arrpreds = ["плохо", "хорошо", "плохо", "хорошо", "плохо", "хорошо", "плохо", "хорошо", "плохо", "хорошо"]
// let predictionNumber = document.getElementById('timer');
// buttonStart.addEventListener("click", function(){
//     timer = setInterval(function(){
//         let randomNum = Math.floor(Math.random() * maxNumber) + 1;
//         predictionNumber.textContent = randomNum;
//     }, 100);
//     document.getElementById('start').classList.remove('active');
//     document.getElementById('stop').classList.add('active');

// })

// buttonStop.addEventListener("click", function(){
//             clearInterval(timer);
//             if(arrpreds[Number(predictionNumber.textContent)]=="плохо"){
//                 result.classList.add("red")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
//             }else{
//                 result.classList.add("green")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
//             }
//             document.getElementById('start').style.display = 'none';
//             document.getElementById('stop').style.display = 'none';
// })

// 11 Автодополнение
// /*
// №1

// */
// let arr  = ['Belarus', 'Belgium', 'Bulgaria'];
// let input =document.querySelector("#elem");
// let ul = document.querySelector("#list")
// input.addEventListener("input", function(){
//     ul.innerHTML=""
//     let filtered = arr.filter(country => country.startsWith(input.value));
//     console.log(filtered)
//     for(let elem of filtered){
//         let li = document.createElement('li')
//         li.textContent=elem;
//         ul.appendChild(li)
//     }
        
// })


//12 Спойлер
/*
№1

*/
// let toggles = document.querySelectorAll('.toggle');
// for (let toggle of toggles){  
//     toggle.addEventListener('click', function(event){
//         event.preventDefault();
//         let spoiler= toggle.parentElement.nextElementSibling;
//         spoiler.classList.toggle('active');
//     });
// }

//13 Вкладки
/*
№1

*/
// let menu = document.querySelectorAll('.menu a');
// let tabs = document.querySelectorAll('.tabs .tab');
// menu.forEach((tab, index) => {
//     tab.addEventListener('click', function(event) {
//         event.preventDefault();
//         menu.forEach(tab => tab.classList.remove('active'));
//         tabs.forEach(text => text.classList.remove('active'));
//         this.classList.add('active');
//         tabs[index].classList.add('active');
//       });
// }) 


//14 Аккордеон
/*
№1

*/
// let links = document.querySelectorAll('.link a');
  
// links.forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       let tab = this.closest('.tab');
//       document.querySelectorAll('.tab.active').forEach(tab => tab.classList.remove('active'));
//       tab.classList.add('active');
//     });
// });


//16 Игра в города против робота
/*
№1

*/
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];

// field.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         if(cities.includes(field.value)){
//             console.log("есть")
//             }else{
//             if(cities.length==0){
//                 cities.push(field.value);
//                 console.log(cities)
//             }else{
//                 let arr1 = cities[cities.length-1].split('')
//                 if(arr1[arr1.length-1]!=field.value.split('')[0]){
//                     console.log("---")
//                 }else{
//                     cities.push(field.value)
//             }
//             console.log(cities)
//         }
//         }
//         field.value=''
//     }
// })


// //17 Игра в города против робота
// /*
// №1

// */
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let allCities = ['belarus', 'belgium', 'bulgaria', "russia", "sum", "mama", "alla", "apa"];
// let hod =1
// field.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         if(cities.includes(field.value)){
//             console.log("есть")
//         }else if(cities.length==0 && allCities.includes(field.value)){
//                 cities.push(field.value);
//                 console.log(cities)
//         }else if(!allCities.includes(field.value)){
//             console.log("---");
//         }else if(hod%2==0){
//             let arr1 = cities[cities.length-1].split('')
//             if(arr1[arr1.length-1]!=field.value.split('')[0] || !allCities.includes(field.value)){
//                 console.log("---")
//             }else{
//                 cities.push(field.value)
//                 hod++;
//             }
           
//         }
//         if(hod%2!=0){
//             let arr1 = cities[cities.length-1].split('')
//             for(let elem of allCities){
//                 if(arr1[arr1.length-1]!=elem.split('')[0] || cities.includes(elem)){
//                     continue
//                 }else{
//                     cities.push(elem)
//                     hod++;
//                     break;
//                 }
//             }
//         }  
//         console.log(cities)
//         field.value='';
// }  
  
// })
                

//18 Чеклист      
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });


//29 Калькулятор продуктов
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//     tr.appendChild(td);
//     return td;
// }
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
//     let tot=0;
// 	if (costs) {
//         for(let cost of costs){
//             tot += Number(cost.textContent);
//         }
// 	}
//     total.textContent=tot
// }
// function allowEdit(td) {
// 	td.addEventListener('click', function func() {
//         console.log(td)
// 		let input = document.createElement('input');
// 		input.value = td.textContent;
		
// 		td.textContent = '';
// 		td.appendChild(input);

//         input.addEventListener('keypress', function(event) {
//             if (event.key == 'Enter') {
//                 td.textContent = this.value;
                
//                 if (td.classList.contains('price') || td.classList.contains('amount')) {
//                     let pr=document.querySelector(".price");
//                     let am = document.querySelector(".amount");
//                     let c=document.querySelector(".cost")
//                     c.textContent= Number(pr.textContent)+Number(am.textContent);
//                     recountTotal();
// 				}
//                 td.addEventListener('click', func);
//             }
// 		});
		
// 		td.removeEventListener('click', func);

// 	});

// }
// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
	
//     allowEdit(createCell(tr, namee.value, 'name'));
//     allowEdit(createCell(tr, price.value, 'price'));
//     allowEdit(createCell(tr, amount.value, 'amount'));
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
//         this.parentElement.remove();
//         recountTotal();
//     });  
// 	table.appendChild(tr);
// 	recountTotal();
// }); 


//30 Тест с вопросами и ответами в HTML коде
/*
№1

*/
// let inputs= document.querySelectorAll("input");
// for(let input of inputs){
//     input.addEventListener("keypress", function(event){
//         if(event.key == 'Enter'){
//             if (input.value === input.dataset.right) {
//                 input.classList.remove('wrong');
//                 input.classList.add('right');
//             }else {
//                 input.classList.remove('right');
//                 input.classList.add('wrong');
//             }
//         }
//     })
// }

/*
№2

*/
// let otprav = document.querySelector('#otpr');
// let inputs= document.querySelectorAll("#test input");
// otprav.addEventListener("click", function(){
//     for(let input of inputs){
//         if (input.value === input.dataset.right) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     }
// })

//31 Тест с ответами в массиве
/*
№1

*/
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// let otprav = document.querySelector('#button');
// let inputs= document.querySelectorAll("#test input");
// otprav.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === answers[index]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

//32 Тест с вопросами и ответами в массиве
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];
// let otprav = document.querySelector('#button');
// let main_div = document.querySelector("#test");
// for (let q of questions){
//     let divq=document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=q;
//     divq.appendChild(p)
//     divq.appendChild(input);
//     main_div.appendChild(divq)
// }
// let inputs = document.querySelectorAll("#test input");
// otprav.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === answers[index]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

//33
/*
№1


let questions = {
	'Вопрос 1?': 'ответ 1',
	'Вопрос 2?': 'ответ 2',
	'Вопрос 3?': 'ответ 3',
}
*/
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// };
// let otprav = document.querySelector('#button');
// let main_div = document.querySelector("#test");
// for (let q in questions){
//     let divq=document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=q;
//     divq.appendChild(p)
//     divq.appendChild(input);
//     main_div.appendChild(divq)
// }
// let inputs = document.querySelectorAll("#test input");
// otprav.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === questions[input.previousElementSibling.textContent]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

/*
№2


let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];
*/
// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];

// let otprav = document.querySelector('#button');
// let main_div = document.querySelector("#test");
// for (let q of questions){
//     let divq=document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=q.text;
//     divq.appendChild(p)
//     divq.appendChild(input);
//     main_div.appendChild(divq)
// }
// let inputs = document.querySelectorAll("#test input");
// otprav.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === questions[index].right) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

//34 Тест с вариантами ответов в HTML коде
/*
№1

*/
// let radios = document.querySelectorAll('input[type=radio]');
// for(let radio of radios){
// 	radio.addEventListener("click", function func(){
// 		let parentDiv = this.closest('div');
// 		let rightAnswer = parentDiv.querySelector('input[data-right]');
// 		if (this === rightAnswer) {
// 			console.log('Ответ правильный');
// 		} else {
// 			console.log('Ответ неправильный');
// 		}
// 		radio.removeEventListener('click', func);
// 	})
// }

/*
№2

*/
// let otprav = document.querySelector('#button');
// otprav.addEventListener('click', function() {
// 	var radios = document.querySelectorAll('input[type=radio]');
// 	for(let radio of radios){
// 		let parentDiv = radio.closest('div');
// 	    let rightAnswer = parentDiv.querySelector('input[data-right]');
// 		if (radio.checked) {
// 		    if (radio === rightAnswer) {
// 		        console.log('Ответ правильный');

// 		    } else {
// 		        console.log('Ответ неправильный');
// 		}
// 	  }
// 	}
// });

//35 Тест с вариантами ответов в массиве
// let answers = [0, 1, 2];
// let otprav = document.querySelector('#button');
// let divs = document.querySelectorAll("#test div");

// otprav.addEventListener("click", function(){
// 	for(let i=0; i<divs.length;i++){
// 	let inputs = divs[i].querySelectorAll('input[type=radio]');
// 	let flag="---"
// 	for(let j=0; j<inputs.length; j++){
// 		if(inputs[j].checked){
// 			if(j===answers[i]){ 
// 				flag="+++"
// 				break;
// 		    }
// 		}
// 	}
// 	console.log(flag)
// }
// })

//36 Тест с вопросами и вариантами ответов в объекте
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];
// let answers = [0, 1, 2];
// let otprav = document.querySelector('#button');
// let div_main = document.querySelector("#test");
// for(let quest of questions){
// 	let div=document.createElement("div");
// 	let p = document.createElement("p");
// 	p.textContent=quest.text;
// 	div.appendChild(p);
// 	for(let variant of quest.variants){
// 		let label = document.createElement("label");
// 		label.innerHTML=`<input type=radio>${variant}`
// 		div.appendChild(label)
// 	}
	
// 	div_main.appendChild(div);
// }
// let divs = document.querySelectorAll("#test div");
// otprav.addEventListener("click", function(){
// 	for(let i=0; i<divs.length;i++){
// 	let inputs = divs[i].querySelectorAll('input[type=radio]');
// 	let flag="---"
// 	for(let j=0; j<inputs.length; j++){
// 		if(inputs[j].checked){
// 			if(j===questions[i].right){ 
// 				flag="+++"
// 				break;
// 		    }
// 		}
// 	}
// 	console.log(flag)
// }
// })

//37 Слайдер текста
// let texts = ['text1', 'text2', 'text3'];
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let div=document.querySelector("#slider");
// let i=0;
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		if(i===texts.length){
// 			i=0
// 		}
// 		div.textContent=texts[i];
// 		i++;
// 	}, 1000);
    
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//38 Слайдер текста со стрелками
/*
№1

*/
// let texts = ['text1', 'text2', 'text3'];
// let left = document.querySelector('#left');
// let right  = document.querySelector('#right');
// let div=document.querySelector("#slider");
// div.textContent=texts[0]
// let i=0;
// right.addEventListener('click', function(event) {
// 	if(i===texts.length-1){
// 		i=0;
// 	}else{
// 		i++;
// 	}

// 	div.textContent=texts[i];
// 	event.preventDefault();
    
// });
// left.addEventListener('click', function(event) {
// 	if(i===0){
// 		i=texts.length-1
// 	}else{
// 		i--;
// 	}
// 	div.textContent=texts[i];
// 	event.preventDefault();
// });

/*
№2

*/
// let texts = ['text1', 'text2', 'text3'];
// let left = document.querySelector('#left');
// let right  = document.querySelector('#right');
// let div=document.querySelector("#slider");
// div.textContent=texts[0]
// let i=0;
// right.addEventListener('click', function func(event) {
// 	if(i===texts.length-1){
// 	}else{
// 		i++;
// 	}

// 	div.textContent=texts[i];
// 	event.preventDefault();
    
// });
// left.addEventListener('click', function func(event) {
// 	if(i===0){
// 		// right.removeEventListener("click", func);
// 	}else{
// 		i--;
// 		// right.addEventListener("click", func);
// 	}
// 	div.textContent=texts[i];
// 	event.preventDefault();
// });


//39 Слайдер картинок через массив
/*
№1

*/
// let texts = ["purple.jpg", 'forest.jpg', 'mount.jpg'];
// let left = document.querySelector('#left');
// let right  = document.querySelector('#right');
// let img=document.querySelector("#slider");
// img.setAttribute("src", texts[0])
// let i=0;
// right.addEventListener('click', function func(event) {
// 	if(i===texts.length-1){
// 		i=0;
// 	}else{
// 		i++;
// 	}

// 	img.setAttribute("src", texts[i])
// 	event.preventDefault();
    
// });
// left.addEventListener('click', function func(event) {
// 	if(i===0){
// 		i=texts.length-1;
// 	}else{
// 		i--;
// 	}
// 	img.setAttribute("src", texts[i])
// 	event.preventDefault();
// });

/*
№2

*/
// let img=document.querySelector("#slider");
// let texts = ["purple.jpg", 'forest.jpg', 'mount.jpg'];
// let left = document.querySelector('#left');
// let right  = document.querySelector('#right');
// let i = 0;


// function nextImage() {
// 	if(i===texts.length-1){
// 		i=0;
// 	}else{
// 		i++;
// 	}

// 	img.setAttribute("src", texts[i])
// }


// function prevImage() {
// 	if(i===0){
// 		i=texts.length-1;
// 	}else{
// 		i--;
// 	}
// 	img.setAttribute("src", texts[i])
// }


// let timerId = setInterval(nextImage, 1000);

// right.addEventListener('click', function(event) {
//     clearInterval(timerId); 
//     nextImage();
//     event.preventDefault();
// });

// left.addEventListener('click', function(event) {
//     clearInterval(timerId); 
//     prevImage();
//   	event.preventDefault();
// });


//40 Слайдер картинок через HTML
// let texts = document.querySelectorAll("#slider img");
// let i = 0;

// function show() {
//     for (let i = 0; i < texts.length; i++) {
//       texts[i].style.display = 'none';
//     }
//     texts[i].style.display = 'block';
//     	if(i===texts.length-1){
// 			i=0;
// 		}else{
// 			i++;
// 		}
//     setTimeout(show, 1000);
//   }

// show();

//41 Игра крестики-нолики
// let cells = document.querySelectorAll('#field td');
// let gamers = ['X', 'O'];
// start(cells);
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {

// 			return true;
// 		}
// 	}
	
// 	return false;
// }
// function start(cells) {
// 	let i = 0;
// 	for(let cell of cells){
// 		cell.addEventListener('click', function func() {
// 			this.textContent = ['X', 'O'][i % 2];	
// 			cell.removeEventListener("click", func);
// 			if (isVictory(cells)) {
// 				alert(this.textContent);
// 			}else if (i == 8) {
// 				alert('ничья');
// 			}
// 			i++;
// 		})
        
// 	}
// }


//47 Игра смена цветов

// let rows=3;
// let cols=3;
// let colors = ['red', 'green', 'blue'];
// let table =document.querySelector("#field");
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function nextColor(currentCol, arrColor) {
// 	let currentI = arrColor.indexOf(currentCol);
// 	let nextI;
//     if (currentI === arrColor.length - 1) {
// 	  nextI=0;
// 	} else {
// 		nextI=currentI+1;
// 	}
// 	return arrColor[nextI];
// }
// function win(arr) {
// 	let first = arr[0];
//     return arr.every(color => color === first);

// }
// for(let i=0; i<rows; i++){
// 	let tr=document.createElement("tr");
// 	for(let j=0; j<cols; j++){
// 		let td=document.createElement("td");
// 		td.classList.add(colors[getRandomInt(0, 2)]);
// 		tr.appendChild(td)
// 	}
// 	table.appendChild(tr)
// }
// let tds = document.querySelectorAll("#field td");
// let count=0
// for (let td of tds){
// 	td.addEventListener("click", function(){
// 		count+=1
// 		let currentColor = td.className;
//         let nextColorr = nextColor(currentColor, colors);
//         td.className = nextColorr;
// 		let tds = document.querySelectorAll("#field td");
// 		let colorss = Array.prototype.slice.call(tds, 0 ).map(elem => elem.className);//как превращать коллекцию в массив загуглила
// 		if(win(colorss)){
// 			alert(`победа ${count} кликов`)
// 			count=0
// 		}
// 	})
// }

// 52 Календарь
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// draw(body, year, month);

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
	
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// function range(count) {
// 	let arr = [];
	
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
	
// 	return arr;
// }

// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
	
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
	
// 	return result;
// }


//61 Вывод месяца и года в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let tekdat = document.querySelector(".info");

// let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
// let date  = new Date();
// let now = date.getDate();
// let year  = date.getFullYear();
// let month = date.getMonth();
// tekdat.textContent=`${arrMonths[month]} ${year}`;


// draw(body, year, month);

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
	
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// function range(count) {
// 	let arr = [];
	
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
	
// 	return arr;
// }

// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
	
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
	
// 	return result;
// }


//62 Стрелки для смены месяца в календаре
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let tekdat = document.querySelector(".info");
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
// let date  = new Date();
// let now = date.getDate();
// let year  = date.getFullYear();
// let month = date.getMonth();
// tekdat.textContent=`${arrMonths[month]} ${year}`;


// draw(body, year, month);

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
	
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// function range(count) {
// 	let arr = [];
	
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
	
// 	return arr;
// }

// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
	
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
	
// 	return result;
// }
// function getNextMonth(month) {
//     if (month < 11) {
//         return month + 1;
//     } else {
//         return 0;
//     }
// }

// function getPrevMonth(month) {
//     if (month == 0) {
//         return 11;
//     } else {
//         return month-1;
//     }
// }
// function getNextYear(year, month) {
//     if (month === 11) {
//         return year + 1;
//     } else {
//         return year;
//     }
// }

// function getPrevYear(year, month) {
//     if (month === 0) {
//         return year - 1;
//     } else {
//         return year;
//     }
// }
// next.addEventListener('click', function func(event) {
// 	event.preventDefault();
// 	if(month==11){
// 	    month=0;
// 		year+=1
// 	}else{
// 		month+=1
// 	}
//     draw(body, year, month);
//     tekdat.textContent =`${arrMonths[month]} ${year}`;
// 	next.addEventListener("click", func);
// });

// prev.addEventListener('click', function func(event) {
// 	event.preventDefault();
// 	if(month==0){
// 		month=11;
// 		year-=1
// 	}else{
// 		month-=1
// 	}
//     draw(body, year, month);
//     tekdat.textContent = `${arrMonths[month]} ${year}`;
// 	prev.addEventListener("click", func);
// });
