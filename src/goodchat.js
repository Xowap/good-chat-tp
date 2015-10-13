/*jslint browser: true*/
/*globals Firebase*/

(function (exports) {
    'use strict';

    var // Constants
        FIREBASE_ENDPOINT = 'https://goodchat.firebaseio.com/',
        MESSAGES_LIMIT = 100,

        // Variables
        ref,

        // Methods
        init,
        onMessage,
        sendMessage;

    init = function () {
        ref = new Firebase(FIREBASE_ENDPOINT);
    };

    onMessage = function (callback) {
        ref.child('messages')
            .orderByChild('time')
            .limitToLast(MESSAGES_LIMIT)
            .on('child_added', function (snapshot) {
                callback(snapshot.val());
            });
    };

    sendMessage = function (userName, message) {
        ref.child('messages').push().set({
            userName: userName,
            message: message,
            time: Firebase.ServerValue.TIMESTAMP
        });
    };

    exports.onMessage = onMessage;
    exports.sendMessage = sendMessage;

    (function () {
        init();
    }());
}((function () {
    'use strict';
    var exports = {};

    if (window) {
        window.goodChat = exports;
    }

    return exports;
}())));
