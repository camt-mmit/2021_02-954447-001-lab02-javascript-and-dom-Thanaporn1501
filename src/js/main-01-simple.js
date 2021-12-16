document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');

    inputs.forEach((elem) => {
        elem.addEventListener('change', () =>{
            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });
    });
}); 


// ดักจับ element ก็คือ DOMContentLoaded ซึ่งอยู่ใน document หมายความว่า สามารถใช้ querySelector ได้วแล้ว และก็เจอ element ทุกตัวที่อยู่ใน dom
// document.addEventListener('DOMContentLoaded', () => {}, true);  ถ้าใส่เป็น true มันจะจับที่ฝั่ง capturing 

// ('.cmp-inputs-container>input[type="number"]');
// เครื่องหมายมากกว่า ก็คือ child ที่อยู่ถัดกันพอดี (firstchild) แต่ถ้า space หมายถึง child ที่อยู่กี่ชั้นก็ได้ 

// ตัว interface ของ nodelist จะมี method ตัวนึงที่ชื่อว่า forEach
// ForEach จะส่งตัว element ที่select ได้จาก querySelectorAll ออกมาให้เราทีละตัว