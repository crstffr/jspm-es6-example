export default function() {
    var used = {};

    function Name() {
        var length, str;

        do {
            length = 5 + Math.floor(Math.random() * 10);
            str = "_";
            while (length--) {
                str += String.fromCharCode(32 + Math.floor(95 * Math.random()));
            }
        }
        while (used[str]);
        used[str] = true;
        return new String(str);
    }

    return Name;
}();
