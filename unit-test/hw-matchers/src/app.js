export default function sortHelthHeroes(arrHeroes) {
  arrHeroes.sort((a, b) => b.health - a.health);
  return arrHeroes;
}
