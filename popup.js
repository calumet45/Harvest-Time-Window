// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store URL data in the "local" storage area.
//
// See note in options.js for rationale on why not to use "sync".
var storage = chrome.storage.sync;

var message = document.querySelector('#message');

// Check if there is URL specified.
storage.get('url', function(items) {
    console.log(items);
    // If there is URL specified, inject it into the page.
    if (items.url) {
      var urlClean = stripTrailingSlash(items.url);
        chrome.windows.create({ url: urlClean + "/time", type: "detached_panel", width: 325, height: 800, top: 0, focused: true }, function() {
            if (chrome.runtime.lastError) {
                message.innerText = 'ERROR';
            } else {}
        });
    } else {
        var optionsUrl = chrome.extension.getURL('options.html');
        message.innerHTML = 'Set a Harvest URL in the <a target="_blank" href="' +
            optionsUrl + '">options page</a> first.';
    }
});

function stripTrailingSlash(str) {
    if(str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
}