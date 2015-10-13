/*jslint browser: true*/

(function (exports) {
    'use strict';

    var // Constants
        SESSION_NAME_KEY = 'goodJsChatName',
        WORD_SETS = {
            masc: {
                adj: ['plat', 'rebel', 'pointu', 'coupant', 'tordu',
                    'passionant', 'paresseux', 'fou'],
                noun: ['siège', 'lapin', 'doigt', 'train', 'oreiller', 'canard',
                    'castor']
            }
        },

        // Methods
        capitalizeFirstLetter,
        getRandomInt,
        pickSet,
        genName,
        setName,
        getNameForSession;

    capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    pickSet = function () {
        var sets = Object.keys(WORD_SETS);
        return WORD_SETS[sets[getRandomInt(0, sets.length)]];
    };

    genName = function () {
        var wordSet = pickSet(),
            adj = wordSet.adj[getRandomInt(0, wordSet.adj.length)],
            noun = wordSet.noun[getRandomInt(0, wordSet.noun.length)];

        return capitalizeFirstLetter(noun) + ' ' + capitalizeFirstLetter(adj);
    };

    setName = function (name) {
        sessionStorage.setItem(SESSION_NAME_KEY, name);
    };

    getNameForSession = function () {
        var name = sessionStorage.getItem(SESSION_NAME_KEY);

        if (!name) {
            name = genName();
        }

        return name;
    };

    exports.genName = genName;
    exports.setName = setName;
    exports.getNameForSession = getNameForSession;
}((function () {
    'use strict';
    var exports = {};

    if (window) {
        window.randName = exports;
    }

    return exports;
}())));
