import { createInputSum } from './input-sum.js';

function addSection(parent) {
    const tmpSection = document.querySelector('template#tmp-section');
    const fragment = tmpSection.content.cloneNode(true);

    const sectionContainer = fragment.querySelector('.cmp-section-container');

    sectionContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if (elem.matches('.cmd-delete-section')) {
            const elem = ev.target;

            sectionContainer.remove();

            generateSectionCotainer(parent);
        }
    });


    createInputSum(sectionContainer);

    parent.append(fragment);
}

export function createSectionInput(mainContainer) {
    const sectionContainer = mainContainer.querySelector('.cmp-section-container');

    addSection(mainContainer);
    generateSectionCotainer(mainContainer);

    const addSectionButton = document.querySelector('button.cmd-add-section');

    addSectionButton.addEventListener("click", (ev) => {
        addSection(mainContainer);
        generateSectionCotainer(mainContainer);
    });

}

export function generateSectionCotainer(mainContainer) {
    const sectionContainer = mainContainer.querySelectorAll('.cmp-section-container');

    sectionContainer.forEach((sectionContainer, i) => {
        console.log(i);
        if (sectionContainer.querySelector('.cmp-section-no')) {
            sectionContainer.querySelector('.cmp-section-no').textContent = i+1;
        }

        mainContainer.querySelector('.cmd-delete-section').disabled = false;

    });

    if (sectionContainer.length == 1) {
        mainContainer.querySelector('.cmd-delete-section').disabled = true;
    }
};