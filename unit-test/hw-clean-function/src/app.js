export default function colorHealth(element) {
  let statusHealth = '';
  switch (true) {
    case element.health < 15:
      statusHealth = 'critical';
      break;
    case element.health >= 15 && element.health <= 50:
      statusHealth = 'wounded';
      break;
    default:
      statusHealth = 'healthy';
      break;
  }

  return statusHealth;
}
