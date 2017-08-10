function main(num) {
    let number = num;
    let lyrics = splicingLyrics(number);

    return lyrics;
}
module.exports = main;

function splicingLyrics(num) {
    let lyricsArray = "";

    for (let i = num; i >= 0; i--) {
        if (isTwoBottles(i)) {
            lyricsArray += i + ` bottles of beer on the wall, ` + i + ` bottles of beer.\nTake one down and pass it around, ` + (i - 1) + ` bottle of beer on the wall.\n`
        } else if (isOneBottles(i)) {
            lyricsArray += i + ` bottle of beer on the wall, ` + i + ` bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
        } else if (isZeroBottles(i)) {
            lyricsArray += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        } else {
            lyricsArray += i + ` bottles of beer on the wall, ` + i + ` bottles of beer.\nTake one down and pass it around, ` + (i - 1) + ` bottles of beer on the wall.\n`
        }
    }

    return lyricsArray;
}

function isTwoBottles(i) {
    return i === 2;
}

function isOneBottles(i) {
    return i === 1;
}

function isZeroBottles(i) {
    return i === 0;
}