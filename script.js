function getCurrentTime() {
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let dayOfWeek = date.toLocaleDateString('uk-ua', { weekday: 'long' });
    let dayOfMonth = date.getDate();
    let month = date.toLocaleDateString('uk-ua', { month: 'long' });
    let year = date.getFullYear();
    
    let formattedTime = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);
    let formattedDate = dayOfWeek + ', ' + addLeadingZero(dayOfMonth) + ' ' + month + ' ' + year + ' року';
    
    document.getElementById('time').innerText = formattedTime + ', ' + formattedDate;
  }
  
  function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  setInterval(getCurrentTime, 1000); // Оновлення часу кожну секунду
  