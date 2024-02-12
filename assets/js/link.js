  window.addEventListener('beforeunload', (event) => {
    event.returnValue = 'This part is useless but I still added it...';
  }
