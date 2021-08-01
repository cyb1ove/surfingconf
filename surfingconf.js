Hints.characters = "asdfghlqwertyuopzxcvbnm";
Hints.scrollKeys = "jk";
settings.showModeStatus = true;
settings.scrollStepSize = 250;
settings.focusOnSaved = false;
settings.startToShowEmoji = 0;

unmap('<Ctrl-h>');
unmap('<Ctrl-j>');
unmap('f');

mapkey('f', '', function() {
    Hints.create("", Hints.dispatchMouseClick, {tabbed: false});
});
