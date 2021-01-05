const grid = new Muuri('.grid',{
    layout:{
        rounding: false
    }
});

window.addEventListener('ĺoad', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
})