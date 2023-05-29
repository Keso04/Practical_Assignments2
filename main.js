//Task N1
const btn = document.getElementById('btn');
const modal_container = document.getElementById('modalContainer');

btn.addEventListener('click', ()=> {
    modal_container.classList.add('showModal');
});

//Task N2
const myForm = document.querySelector(".form");

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = document.querySelector('input[name="color"]');
    //  console.log(input);

    if(!input.value){
        alert("please enter your color");
        return
    }

    if(input.value != "red" && input.value != "blue" && input.value != "green" &&
       input.value != "black" && input.value != "white"){
      alert("Please change your color");
      return
    }

    document.body.style.background = input.value;

    // console.log(input.value);
})

//Task N3
const myForm2 = document.querySelector(".form2");

myForm2.addEventListener('submit', (e) => {
    e.preventDefault();

    const input2 = document.querySelector('input[name="numbers"]');
    const numbers = input2.value;

    // console.log(typeof numbers);

    const arrOfStrings = numbers.split(":");
    let arrOfInts = [];
    let sum = 0;
    let result;

    arrOfStrings.forEach(element => {
        arrOfInts.push(parseInt(element));
    });

    let avarage = arrOfInts.forEach(num => {
        sum = sum + num;
    });

    result = sum/arrOfInts.length;

    result = result.toString();

    h1 = document.createElement("h1");
    ans = document.createTextNode(result);
    body = document.body;

    h1.appendChild(ans);
    body.appendChild(h1);
})