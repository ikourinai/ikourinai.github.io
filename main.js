'use strict';

// ヒーローエリア //
{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
    
  }
  
  const images = document.querySelectorAll('.hero-img img');
  let currentIndex = 0;  //現在表示している画像が何番目か。最初は０番目
  
  play();

}

// お知らせ //
    
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