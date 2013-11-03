Awawa
======

draw Awawa Mouth.

## install

### from bower
```
bower install Awawa
```

### from github
```
git clone git://github.com/fnobi/Awawa.git
```

## usage
```
(function () {
    function init () {
        var awawa = new Awawa({
            el: document.getElementById('canvas-awawa')
        });

        setInterval(function () {
            awawa.draw();
        }, 25);
    }

    window.addEventListener('load', init);
})();



```
