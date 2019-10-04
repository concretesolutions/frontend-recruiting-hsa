import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class UtilCommonService {

    constructor() {}

    /**
     * Clear input passed
     *
     * @param  {any} input
     * @returns string
     */
    clearTextSearch(input: any): string {

        if (input === null || typeof input === "undefined") { return ""; };

        return input.toString()
          .replace(/[^a-zA-Z0-9 ]/g, '')       // Remove all non-word chars
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
        ;
    }
}
