window.onload = () => {
    window.addEventListener('scroll', () => {

        //バナーの変数宣言//
        const el = document.getElementById('HeightScanner');//HeightScannerから値を取得する
        const rect = el.getBoundingClientRect().top;

        //バナーフェードイン・アウト//
        if(rect <= -50) {
            const BannerTitleElement = document.querySelector('.BannerTitle');
            BannerTitleElement.classList.remove('BannerTitleFadeout');
            BannerTitleElement.classList.add('BannerTitleFade');
        } else {
            const BannerTitleElement = document.querySelector('.BannerTitle');
            BannerTitleElement.classList.remove('BannerTitleFade');
            BannerTitleElement.classList.add('BannerTitleFadeout');
        }

        //ヘッダー非表示//
        if(rect <= -10) {
            const HeaderElement = document.getElementById('topHeader');
            HeaderElement.classList.remove('HeaderElementFade');
            HeaderElement.classList.add('HeaderElementFadeout');
        } else {
            const HeaderElement = document.getElementById('topHeader');
            HeaderElement.classList.remove('HeaderElementFadeout');
            HeaderElement.classList.add('HeaderElementFade');
        }

        //Topにスムーススクロール//
        const SmoothScrollButton = document.getElementById('TopSmoothScrollButton');

        //ボタンクリック時の動作//
        SmoothScrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                    behavior: 'smooth',
            });
        });


        //コラムの変数宣言//
        const col = document.getElementById('ColumnHeightScanner');
        const colRect = col.getBoundingClientRect().top;
        const ColumnElements = document.querySelectorAll('.column');

        //コラムフェードイン・アウト//
        if(colRect <= 600) {
            ColumnElements.forEach((fadeEl,index) => {
                setTimeout(() => {
                    fadeEl.classList.remove('OrderHide');
                    fadeEl.classList.add('OrderShow');
                }, index * 350);                
            });
            SmoothScrollButton.classList.remove('HideButton');
            SmoothScrollButton.classList.add('ShowButton');
        } else {
            SmoothScrollButton.classList.remove('ShowButton');
            SmoothScrollButton.classList.add('HideButton');
        }

        //スペック表の変数宣言//
        const st = document.getElementById('SpecTable');
        const stRect = st.getBoundingClientRect().top;

        //スペック表スライドイン・アウト//
        if(stRect <= 500) {
            st.classList.add('stSlide');
        }
    })
}