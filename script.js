let listek = 12
let listekStudent = listek * 0.65
let navstevnici = 174
let navstevniciStudent = navstevnici * 0.4
let mesicne = 15

let prijem = (listek * navstevnici) * mesicne

let prijemSeStudenty = ((listek * (navstevnici * 0.6)) + (listekStudent * navstevniciStudent)) * mesicne

document.body.innerHTML+= "<p>" + prijem + "</p>"

document.body.innerHTML+= "<p>" + prijemSeStudenty + "</p>"