const dts = document.querySelectorAll('dt');
    
//dtをクリックしたら親要素のdivにappearクラスを付け外しする
dts.forEach(dt => {
    dt.addEventListener('click', () => {
        dt.parentNode.classList.toggle('appear');

        /* ひとつを開けたら、別のは閉じる
        dts.forEach(el => {
            if (dt !== el) {
                el.parentNode.classList.remove('appear');
            }
        }); */
    });
});