function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    const lists = document.getElementsByClassName('ranked-list')
    for (let i = 0; i<lists.length; i++){
        lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
    }
}

function deepestChild() {
    const div = document.querySelector('div#grand-node');
    let parent = div
    let child = div.children[0];
    while (child != undefined){
        parent = child;
        child = parent.children[0];
    }
    return parent;
    console.log(document.querySelector('#grand-node div div div div').children[0])
}

console.log(document.querySelector('#grand-node div div div div'));