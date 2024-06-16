export class Slide {
  public SliderTop() {
    let speed = window.scrollY;

    if (window.scrollY > 1900) {
      speed += -1900;
    }
    return speed / 2;
  }
}
