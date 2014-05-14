chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    var newFileName = item.filename.replace(/-large$/gi,"");
    suggest({filename: newFileName, conflictAction: "prompt"});
});
