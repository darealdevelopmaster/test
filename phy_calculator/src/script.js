document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const rulesList = document.getElementById('rules-list');
    const calculator = document.getElementById('calculator');
    const selectedRule = document.getElementById('selected-rule');
    const solveForSelect = document.getElementById('solve-for');
    const inputsContainer = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    const resultText = document.querySelector('.result-text');
    const resultUnitSelect = document.getElementById('result-unit-select');
    const searchInput = document.getElementById('search');

    // Example rules data
    const rulesData = [
        { rule: 'F = ma', variables: ['force', 'mass', 'acceleration'] },
        // Add more rules here if needed
    ];

    // Units data
    const units = {
        'force': ['Newtons (N)'],
        'mass': ['Kilograms (kg)'],
        'acceleration': ['Meters/second² (m/s²)'],
        // Add more units as needed
    };

    // Function to populate units based on solve-for variable
    function populateUnits() {
        const solveFor = solveForSelect.value;
        resultUnitSelect.innerHTML = '';
        units[solveFor].forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            resultUnitSelect.appendChild(option);
        });
    }

    // Function to dynamically populate rules list in the sidebar
    function populateRulesList() {
        rulesList.innerHTML = '';
        rulesData.forEach(rule => {
            const li = document.createElement('li');
            li.textContent = rule.rule;
            li.setAttribute('data-rule', rule.rule);
            li.addEventListener('click', () => {
                selectedRule.innerText = rule.rule;
                populateSolveFor(rule.variables); // Update Solve for dropdown based on rule variables
                displayInputs();
            });
            rulesList.appendChild(li);
        });
    }

    // Function to dynamically populate "Solve for" dropdown based on rule variables
    function populateSolveFor(variables) {
        solveForSelect.innerHTML = '';
        variables.forEach(variable => {
            const option = document.createElement('option');
            option.value = variable;
            option.textContent = variable.charAt(0).toUpperCase() + variable.slice(1);
            solveForSelect.appendChild(option);
        });
    }

    // Function to dynamically display inputs based on selected rule and solve-for variable
    function displayInputs() {
        const solveFor = solveForSelect.value;
        inputsContainer.innerHTML = '';
        rulesData.find(rule => rule.rule === selectedRule.innerText).variables.forEach(variable => {
            if (variable !== solveFor) {
                const inputGroup = document.createElement('div');
                inputGroup.className = 'input-group';
                inputGroup.innerHTML = `
                    <label for="${variable}">${variable.charAt(0).toUpperCase() + variable.slice(1)}:</label>
                    <input type="number" id="${variable}" placeholder="${variable.charAt(0).toUpperCase() + variable.slice(1)}">
                    <select id="${variable}-unit">
                        <option value="unit1">Unit 1</option>
                        <option value="unit2">Unit 2</option>
                        <!-- Add more units if needed -->
                    </select>
                `;
                inputsContainer.appendChild(inputGroup);
            }
        });

        // After adding inputs, trigger MathJax typeset to render LaTeX math
        MathJax.typeset();
    }

    // Event listener for solve-for dropdown change
    solveForSelect.addEventListener('change', () => {
        displayInputs();
        populateUnits();
    });

    // Event listener for calculate button click
    calculateBtn.addEventListener('click', () => {
        const solveFor = solveForSelect.value;
        const values = {};
        let allValuesProvided = true;

        rulesData.find(rule => rule.rule === selectedRule.innerText).variables.forEach(variable => {
            if (variable !== solveFor) {
                const value = document.getElementById(variable).value;
                values[variable] = value ? parseFloat(value) : null;
                if (!value) allValuesProvided = false;
            }
        });

        if (!allValuesProvided) {
            resultText.innerText = 'Please provide all values.';
            return;
        }

        fetch('http://localhost:5500/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rule: selectedRule.innerText,
                solveFor: solveFor,
                values: values
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultText.innerText = `Error: ${data.error}`;
            } else {
                resultText.innerText = `Result: ${data.result}`;
                populateUnits(); // Update units based on solve-for after calculation
            }
        })
        .catch(error => {
            resultText.innerText = `Error: ${error}`;
        });
    });

    // Event listener for search input to filter rules list
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        Array.from(rulesList.children).forEach(item => {
            const rule = item.getAttribute('data-rule').toLowerCase();
            item.style.display = rule.includes(query) ? 'block' : 'none';
        });
    });

    // Populate initial sidebar rules list and set default selected rule
    populateRulesList();
    selectedRule.innerText = rulesData[0].rule;
    populateSolveFor(rulesData[0].variables); // Populate Solve for dropdown initially with first rule's variables
    displayInputs();
});
