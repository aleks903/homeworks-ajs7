export default function sortHelthHeroes (arrHeroes) {
  arrHeroes.sort(compare);
  arrHeroes.reverse();
  
  return arrHeroes;
}

function compare(a,b) {
  if(a.health > b.health) return 1;
  if(a.health == b.health) return 0;
  if(a.health < b.health) return -1;
}