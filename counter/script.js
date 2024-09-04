let counter = 0;
        document.querySelector('#counter').textContent = counter;
        
        document.querySelectorAll('.Btns span').forEach(btn => {
            btn.addEventListener('click', () => {
                switch (btn.textContent) {
                    case 'D E C R E A S E':
                        counter--;
                        break;
                    case 'R E S E T':
                        counter=0;
                        break;
                    case 'I N C R E A S E':
                        counter++;
                        break;
                }
                document.querySelector('#counter').textContent = counter;
            });
        });