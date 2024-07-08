let openside = document.querySelector('.open1')
let closeside = document.querySelector('.close1')
let sidebar = document.querySelector('.sidebar')
let blank1 = document.querySelector('.blankside')

function open11 () {
  sidebar.classList.add('closedside')
  sidebar.classList.remove('openedside')
  openside.style.display = 'none'
  closeside.style.display = 'flex'
  blank1.style.width = '6.7%'
}
function close11 () {
  sidebar.classList.add('openedside')
  sidebar.classList.remove('closedside')
  openside.style.display = 'flex'
  closeside.style.display = 'none'
  blank1.style.width = '21%'
}
