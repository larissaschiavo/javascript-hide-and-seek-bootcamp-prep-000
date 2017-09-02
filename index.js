function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const allLists = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < allLists.length; i++) {
    let listbabies = allLists[i].children
    for(let j = 0; j < listbabies.length; j++){
      listbabies[j].innerHTML = parseInt(listbabies[j].innerHTML) + n
    }
  }
}


function deepestChild() {
  let mainNode = document.getElementById('grand-node')
  let nextNode = mainNode.children[0]

    while(nextNode) {
      mainNode = nextNode
      nextNode = mainNode
    }
}
