const monthYear = document.getElementById('monthYear');
        const dates = document.getElementById('dates');
        const prvBtn = document.getElementById('prvBtn');
        const nxtBtn = document.getElementById('nxtBtn');

        let currentDate = new Date();

        let updatedCalender = () =>{
            const currentYear =   currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            const firstDay = new Date(currentYear, currentMonth, 0);
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            const totalDays = lastDay.getDate();
            const firstDayIndex = firstDay.getDay();
            const lastDayIndex = lastDay.getDay();

            const monthYearString = currentDate.toLocaleString('default', {month: 'long'}) + ' ' + currentYear;
            monthYear.textContent = monthYearString;

            let datesHTML = '';

            for(let i = firstDayIndex; i > 0;i --){
                const preDate = new Date(currentYear, currentMonth, 0 - i+1);
                datesHTML += `<div class="date inactive">${preDate.getDate()}</div>`;
            }
            for(let i = 1; i <= totalDays; i++){
                const date = new Date(currentYear, currentMonth, i);
                const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
                datesHTML += `<div class="date ${activeClass}">${i}</div>`;
            }

            for(let i = 1; i <= 7 - lastDayIndex; i++){
                const nextDate = new Date(currentYear, currentMonth + 1, i);
                datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
            }

            dates.innerHTML = datesHTML;
        }
        prvBtn.addEventListener('click', () =>{
            currentDate.setMonth(currentDate.getMonth() - 1);
            updatedCalender();
        });
        
        nxtBtn.addEventListener('click', () =>{
            currentDate.setMonth(currentDate.getMonth() + 1);
            updatedCalender();
        });
        updatedCalender();
