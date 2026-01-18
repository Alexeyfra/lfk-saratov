document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-phone');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+7-977-610-10-64').then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() => {
          copyBtn.textContent = original;
        }, 2000);
      });
    });
  }

  // Копирование на странице контактов
  const copyBtn2 = document.getElementById('copy-phone-btn');
  if (copyBtn2) {
    copyBtn2.addEventListener('click', () => {
      navigator.clipboard.writeText('+7-977-610-10-64').then(() => {
        const original = copyBtn2.textContent;
        copyBtn2.textContent = 'Скопировано!';
        setTimeout(() => {
          copyBtn2.textContent = original;
        }, 2000);
      });
    });
  }
});