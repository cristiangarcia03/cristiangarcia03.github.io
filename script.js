

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
  if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})

var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var dog = document.getElementById("dogecoin")

var liveprice = {
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

  "method" : "GET",
  "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd
    eth.innerHTML = response.ethereum.usd
    dog.innerHTML = response.dogecoin.usd
});