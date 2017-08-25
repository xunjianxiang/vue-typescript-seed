'use strict';

import progressbar from './progressbar';

describe('progress bar', () => {
  it('test', () => {
    let addButton = (name: string, callback: () => void) => {
      let button = document.createElement('button');
      button.textContent = name;
      button.onclick = () => {
        callback();
      }
      document.body.appendChild(button)
    }
    addButton('reset', () => {
      progressbar.start();
    });

    addButton('finish', () => {
      progressbar.finish();
    });
    progressbar.start();
  })
})
