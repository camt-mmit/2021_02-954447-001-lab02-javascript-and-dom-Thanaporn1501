document.addEventListener('DOMContentLoaded', () => {
    const addInput = (parent) => {
    // การสร้างโดยดึงจาก template
        const tmpInput = document.querySelector('template#tmp-input');
        const fragment = tmpInput.content.cloneNode(true);   // เราไม่สามารถที่จะดึงตัว fragment ออกมาจาก template ได้จริงๆจึงต้อง cloneNode

        fragment.querySelector('input[type="number"]').addEventListener('change', () => { 
            const inputs = parent.querySelectorAll('input[type="number"]');

            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });
    
        parent.append(fragment);

        parent.querySelectorAll('.cmp-input-container').forEach((inputContainer, i ) => {
            inputContainer.querySelector('.cmp-input-no').textContent = i + 1 ;

        });
    };

    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const cmdAddInput = document.querySelector('.cmd-add-input');
    cmdAddInput.addEventListener('click', () => {
        addInput(inputsContainer);
    });

    addInput(inputsContainer);
}); 


//fragment คือ  parent อย่างนึง พอเอาค่าใน fragment ไป append ที่อื่นมันจะหลุดออกจาก fragment 
//เพราะ node ต่างๆไปอยู่กับ parent ตัวอื่น 
