
document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var products = document.querySelectorAll('.pro h5');
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            var link = document.createElement('a');
            link.href = '#' + product.parentElement.getAttribute('id');
            link.textContent = productName;
            searchResults.appendChild(link);
        }
    });

    if (searchResults.innerHTML !== '') {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })    }
    if(close){
        close.addEventListener('click', ()=>{
            nav.classList.remove('active')
        })
}
