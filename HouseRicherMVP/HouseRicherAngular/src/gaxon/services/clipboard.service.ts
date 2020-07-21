import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  private selectarea: HTMLTextAreaElement;

  constructor() {
  }

  /** Function will copy the source value to the clipboard. */
  copyToClipboard(source: string): boolean {
    this.createSelectareaAndSelect(source);

    const copySuccessful = document.execCommand('copy');
    this.removeSelectarea();

    return copySuccessful;
  }

  /**
   * Function will creates a hidden textarea in DOM and sets value from `source` property,
   * and makes a selection on it.
   */
  private createSelectareaAndSelect(source: string) {
    // Create a fake element to hold the contents to copy
    this.selectarea = document.createElement('textarea');

    // Prevent zooming on iOS
    this.selectarea.style.fontSize = '12pt';

    // Hide the element
    this.selectarea.classList.add('cdk-visually-hidden');

    // Move element to the same position vertically
    const yPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.selectarea.style.top = yPosition + 'px';

    this.selectarea.setAttribute('readonly', '');
    this.selectarea.value = source;

    document.body.appendChild(this.selectarea);

    this.selectarea.select();
    this.selectarea.setSelectionRange(0, this.selectarea.value.length);
  }

  /** Function will remove the select area from the DOM. */
  private removeSelectarea() {
    if (this.selectarea) {
      document.body.removeChild(this.selectarea);
      this.selectarea = null;
    }
  }
}
