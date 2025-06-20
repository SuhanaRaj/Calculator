    // function appendValue(val){
    //     document.getElementById('display').value += val;
    // }

    // function clearDisplay(){
    //     document.getElementById('display').value = '';
    // }

    // function calculate(){
    //     const display = document.getElementById('display');
    //     try {
    //         display.value = eval(display.value);
    //     } catch (e) {
    //         display.value = 'Error';
    //     }
    // }

    
        window.onload = function () {
            window.appendValue = function(val){
                document.getElementById('display').value += val;
            }

            window.clearDisplay = function(){
                document.getElementById('display').value = '';
            }

            window.calculate = function(){
                const display = document.getElementById('display');
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            }
        };