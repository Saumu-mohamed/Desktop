let displayValue = '0';
        let memory = 0;
        let history = [];
        const display = document.getElementById('display');
        const historyPanel = document.getElementById('history');

        // Update display and adjust font size for large numbers
        function updateDisplay() {
            display.textContent = displayValue;
            const len = displayValue.length;
            display.style.fontSize = len > 10 ? `${2.5 - (len - 10) * 0.1}rem` : '2.5rem';
        }

        // Clear the display and reset to initial state
    function clearDisplay() {
            displayValue = '0';
            updateDisplay();
        }

        // Append a number to the display
        function appendNumber(num) {
            if (displayValue === '0' && num !== '.') {
                displayValue = num;
            } else {
                displayValue += num;
            }
            updateDisplay();
        }

        // Append a decimal point, preventing multiple decimals in a number
        function appendDecimal() {
            const lastNumber = displayValue.split(/[+–×÷()]/).pop();
            if (!lastNumber.includes('.')) {
                displayValue += '.';
                updateDisplay();
            }
        }

        // Append an operator, preventing consecutive operators
        function appendOperator(op) {
            const lastChar = displayValue.slice(-1);
            if (!['+', '–', '×', '÷'].includes(lastChar)) {
                displayValue += op;
                updateDisplay();
            }
        }

        // Append parentheses, ensuring valid placement
        function appendParenthesis(paren) {
            if (paren === '(') {
                const lastChar = displayValue.slice(-1);
                if (displayValue === '0' || ['+', '–', '×', '÷', '('].includes(lastChar)) {
                    displayValue = displayValue === '0' ? paren : displayValue + paren;
                    updateDisplay();
                }
            } else {
                if (displayValue.match(/\(/g)?.length > displayValue.match(/\)/g)?.length) {
                    displayValue += paren;
                    updateDisplay();
                }
            }
        }

        // Backspace to remove the last character
        function backspace() {
            displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : '0';
            updateDisplay();
        }

        // Memory operations: store, recall, add, subtract, clear
        function memoryOperation(op) {
            switch (op) {
                case 'MC':
                    memory = 0;
                    break;
                case 'MR':
                    displayValue = memory.toString();
                    updateDisplay();
                    break;
                case 'M+':
                    memory += parseFloat(displayValue) || 0;
                    break;
                case 'M-':
                    memory -= parseFloat(displayValue) || 0;
                    break;
            }
        }

        // Calculate the result, handling operator precedence and parentheses
        function calculate() {
            try {
                // Replace operators for JavaScript evaluation
                let expression = displayValue
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/–/g, '-');
                
                // Validate expression
                if (!isValidExpression(expression)) {
                    throw new Error('Invalid expression');
                }

                // Evaluate expression safely
                const result = eval(expression);
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error('Invalid calculation');
                }

                // Update history
                history.push(`${displayValue} = ${result}`);
                updateHistory();

                // Update display with result
                displayValue = result.toString();
                updateDisplay();
            } catch (e) {
                displayValue = 'Error';
                updateDisplay();
                setTimeout(clearDisplay, 1000);
            }
        }

        // Validate the expression to prevent invalid inputs
        function isValidExpression(expr) {
            // Prevent consecutive operators
            if (/[+\-*/]{2,}/.test(expr)) return false;
            // Prevent operators at start/end (except parentheses)
            if (/^[+*/]/.test(expr) || /[+\-*/]$/.test(expr)) return false;
            // Ensure balanced parentheses
            let parenCount = 0;
            for (let char of expr) {
                if (char === '(') parenCount++;
                if (char === ')') parenCount--;
                if (parenCount < 0) return false;
            }
            return parenCount === 0;
        }

        // Update the history panel
        function updateHistory() {
            historyPanel.innerHTML = history.map(h => `<div>${h}</div>`).join('');
            historyPanel.scrollTop = historyPanel.scrollHeight;
        }

        // Toggle between light and dark mode
        function toggleTheme() {
            document.documentElement.setAttribute(
                'data-theme',
                document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            );
        }

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (/^[0-9]$/.test(e.key)) appendNumber(e.key);
            if (e.key === '.') appendDecimal();
            if (e.key === '+' || e.key === '-') appendOperator(e.key);
            if (e.key === '*') appendOperator('×');
            if (e.key === '/') appendOperator('÷');
            if (e.key === '(' || e.key === ')') appendParenthesis(e.key);
            if (e.key === 'Enter') calculate();
            if (e.key === 'Backspace') backspace();
            if (e.key === 'Escape') clearDisplay();
        });

        // Initialize display
        updateDisplay();
    
