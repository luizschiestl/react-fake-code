export function getRandomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)];
}
