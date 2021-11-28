
let themedotes = document.getElementsByClassName('theme-dot');

for (var i = 0; themedotes.length > i; i++){
    themedotes[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('button clicked:', mode);
        setTheme(mode);

    });
}

function setTheme(mode){

    if ( mode == 'light'){
        document.getElementById('theme-style').href = '/dist/css/styles/light.css';
    }

    if ( mode == 'blue'){
        document.getElementById('theme-style').href = '/dist/css/bluemode.css';
    }

    if ( mode == 'purple'){
        document.getElementById('theme-style').href = '/dist/css/purple.css';
    }

    if ( mode == 'green'){
        document.getElementById('theme-style').href = '/dist/css/greenmode.css';
    }
}
