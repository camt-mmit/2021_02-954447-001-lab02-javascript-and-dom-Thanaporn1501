document.addEventListener('DOMContentLoaded', () => {
    const addInput = (parent) => {
    //การสร้าง element โดยการเขียนโปรแกรมขึ้นมา 
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('cmp-input-container');

        const label = document.createElement('label');

        const labelMessage = document.createElement('b');
        labelMessage.textContent = 'Number:';

        const input = document.createElement('input');
        input.type = 'number';
        input.defaultValue = '0';
        input.required = true;

        //label มี child 2 ตัว คือ <b>, <input>
        label.append(labelMessage) ;
        label.append(input);

        inputContainer.append(label);

        //ใส่ parent เพื่อความยืดหยุ่นทำให้เราเอาไปใส่ตรงไหนก็ได้ 
        //ก่อนหน้านี้ document.querySelector('.cmp-inputs-container').append(inputContainer);
        parent.append(inputContainer);   

        input.addEventListener('change', () => {
            const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');

            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });
    };

    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const cmdAddInput = document.querySelector('.cmd-add-input');   
    
    cmdAddInput.addEventListener('click', () => {
        addInput(inputsContainer);
    });

    addInput(inputsContainer);  //อยากให้มีกล่อง input ไว้ 1 กล่อง
});

