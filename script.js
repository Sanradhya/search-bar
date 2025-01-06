document.getElementById('search-button').addEventListener('click', () => {
    const searchValue = document.getElementById('search-input').value.trim();
    if (searchValue) {
      alert(`You searched for: ${searchValue}`);
    } else {
      alert('Please enter a search term!');
    }
  });
  