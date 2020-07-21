export class GxHelper {
  public static filterArrayByString(itemsArray, searchStr) {
    if (!searchStr || searchStr === '') {
      return itemsArray;
    }

    searchStr = searchStr.toLowerCase();

    return itemsArray.filter(itemObj => {
      return this.searchInObj(itemObj, searchStr);
    });
  }

  public static searchInObj(itemObj, searchStr) {
    for (const prop in itemObj) {
      if (!itemObj.hasOwnProperty(prop)) {
        continue;
      }

      const value = itemObj[prop];

      if (typeof value === 'string') {
        if (this.searchInString(value, searchStr)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchStr)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchStr)) {
          return true;
        }
      }
    }
  }

  public static searchInArray(arr, searchStr) {
    for (const value of arr) {
      if (typeof value === 'string') {
        if (this.searchInString(value, searchStr)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchStr)) {
          return true;
        }
      }
    }
  }

  public static searchInString(value, searchStr) {
    return value.toLowerCase().includes(searchStr);
  }

  public static generateGUID() {
    function S4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return S4() + S4();
  }

  public static toggleInArray(item, array) {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }

  public static UUID(): string {
    if (typeof (window) !== 'undefined'
      && typeof (window.crypto) !== 'undefined'
      && typeof (window.crypto.getRandomValues) !== 'undefined') {
      // If we have a cryptographically secure PRNG, use that
      // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
      const buf: Uint16Array = new Uint16Array(8);
      window.crypto.getRandomValues(buf);
      return (this.pad4(buf[0])
        + this.pad4(buf[1]) + '-'
        + this.pad4(buf[2]) + '-'
        + this.pad4(buf[3]) + '-'
        + this.pad4(buf[4]) + '-'
        + this.pad4(buf[5])
        + this.pad4(buf[6])
        + this.pad4(buf[7]));
    } else {
      // Otherwise, just use Math.random
      // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
      return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' +
        this.random4() + '-' + this.random4() + this.random4() + this.random4();
    }
  }

  private static pad4(num: number): string {
    let ret: string = num.toString(16);
    while (ret.length < 4) {
      ret = '0' + ret;
    }
    return ret;
  }

  private static random4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  public static handleize(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
}
