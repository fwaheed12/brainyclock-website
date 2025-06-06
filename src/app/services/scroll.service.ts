import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {}
  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement {
    // const element = <HTMLElement>document.querySelector(`#${id}`);
    const element = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
