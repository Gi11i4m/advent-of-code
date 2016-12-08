export class CinematicAnimation {
  constructor(public text: string) {
    process.stdout.write(text);
  }

  generateAnimationFrame(): void {
    process.stdout.write('.');
  }
  
  print(text): void {
    process.stdout.write(text);
  }
}