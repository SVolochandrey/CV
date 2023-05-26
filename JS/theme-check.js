const themeSwitcher = document.getElementById('theme-clicker');
    
    // Проверяем состояние переключателя при загрузке страницы и устанавливаем соответствующий класс темы
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light');
      themeSwitcher.checked = true;
    }
    
    // Обработчик события при изменении состояния переключателя
    themeSwitcher.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light'); // Сохраняем состояние темы в localStorage
      } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      }
    });