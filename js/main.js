
    function header() {
        
        let array_span = ['portrait', 'nature', 'nature', 'nature', 'portrait', 'fashion', 'animals', 'nature', 'animals', 'anime', 'anime', 'rap', 'rap', 'anime', 'anime', 'anime'];
        let array_h1 = ['Black & Gold Paint Face', 'Green Leaves', 'Coal', 'Top Leaf', 'Building', 'Black Girl Model', 'Pug Puppy', 'White Flower', 'Turtle', 'Luffy', 'Zoro', 'Marwan pablo', 'Travis scott', 'Brook', 'Takagi', 'Takagi and Nishikata'];

        for(var i = 0; i < 16; i++){

            let header_1 = document.createElement("div");
            let conn_header = document.createElement("div");
            let header_img = document.createElement("div");
            let header_img_div = document.createElement("div");
            let header_about = document.createElement("div");
            let header_span = document.createElement("span");
            let header_h1 = document.createElement("h1");
            let header_p = document.createElement("p");
            let header_button = document.createElement("button");

              header_1.className = 'header-1';
              conn_header.className = 'conn-header';
              header_img.className = 'header-img';
              header_img_div.className = 'header-img-div';
              header_img.setAttribute("onclick", "img_reviw(this)")
              header_about.className = 'header-about';

              let t_span = document.createTextNode(array_span[i]);
              let t_h1 = document.createTextNode(array_h1[i]);
              let t_p = document.createTextNode("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.");
              let t_button = document.createTextNode("view portfolio");

              header_span.appendChild(t_span); 
              header_h1.appendChild(t_h1);
              header_p.appendChild(t_p); 
              header_button.appendChild(t_button);  


              document.body.appendChild(header_1);
              document.querySelectorAll(".header-1")[i].appendChild(conn_header);
              document.querySelectorAll(".conn-header")[i].appendChild(header_img);
              document.querySelectorAll(".header-img")[i].appendChild(header_img_div);
              document.querySelectorAll(".conn-header")[i].appendChild(header_about);
              document.querySelectorAll(".header-about")[i].appendChild(header_span);
              document.querySelectorAll(".header-about")[i].appendChild(header_h1);
              document.querySelectorAll(".header-about")[i].appendChild(header_p);
              document.querySelectorAll(".header-about")[i].appendChild(header_button);

              header_1.insertAdjacentElement("afterend", document.getElementById('footer'));
        }

    }

    header();

    let img_conn = document.getElementById('conn-img');
    let img_reviw_span = document.querySelector('#img-reviw span');
    var length_img = document.getElementsByClassName('header-1').length - 1;

    var index;
    function img_reviw(x) {
        const el = x.getElementsByClassName('header-img-div')[0];
        index = Array.from(document.querySelectorAll(".header-img-div")).indexOf(el);
        img_conn.style.backgroundImage = 'url(img/img' + (index + 1) + '.jpg)';
        document.getElementById('img-reviw').style.display = 'block';
        img_reviw_span.innerHTML = index + ' of ' + length_img;
        document.body.style.overflow = 'hidden';
    }

    var l;

    function left_and_right(y){

        l = index; 
        switch (y){

            case 'close':
                document.getElementById('img-reviw').style.display = 'none';
                document.body.style.overflow = 'auto';
            break;

            case 'left':
                    if(l >= 0 && l < length_img){
                        l = index = index + 1;
                        console.log(l);
                        img_conn.style.backgroundImage = document.getElementsByClassName('header-img')[l].style.backgroundImage; 
                        img_reviw_span.innerHTML = l + ' of ' + length_img;
                    }else{
                        l = index = 0;
                        img_conn.style.backgroundImage = document.getElementsByClassName('header-img')[0].style.backgroundImage;
                        img_reviw_span.innerHTML = 0 + ' of ' + length_img; 
                        console.log('maen' + length_img)
                    }
            break;

            case 'right': 
                if(l > 0){  
                    l = index = index - 1;
                    img_conn.style.backgroundImage = document.getElementsByClassName('header-img')[l].style.backgroundImage; 
                    img_reviw_span.innerHTML = l + ' of ' + length_img;
                }else{
                    console.log(l)
                    l = index = length_img;
                    img_conn.style.backgroundImage = document.getElementsByClassName('header-img')[length_img].style.backgroundImage;
                    img_reviw_span.innerHTML = length_img + ' of ' + length_img; 
                }
            break;

        }

    }

    let side_b = document.getElementById('side-bar');
    let bar = document.getElementsByClassName('bar')[0];
    let nav = document.getElementById('nav');
    let conn_header = document.getElementsByClassName('conn-header');

function side_bar() {

    if(side_b.style.marginLeft == 0 + 'px'){
        side_b.style.marginLeft = -270 + 'px';  
        bar.classList.toggle("bar2");
        nav.style.left = 10 + 'px';
        bar.style.background = '#fff';
        for(let i = 0; i < conn_header.length; i++){
            conn_header[i].style.marginLeft = 0 + 'px';
        }
    }else{
        side_b.style.marginLeft = 0 + 'px';
        bar.classList.toggle("bar2");
        bar.style.background = '#000';
        nav.style.left = 230 + 'px';
        for(let i = 0; i < conn_header.length; i++){
            conn_header[i].style.marginLeft = 234 + 'px';
        }
        
    }
}

if(innerWidth < 768){

    window.onscroll = function () {
        scrol();
    };

    function scrol() {

        for (i = 0; i < document.querySelectorAll('.header-1').length; i++) {
            if (window.pageYOffset >= document.querySelectorAll('.header-1')[i].offsetTop + 200 && window.pageYOffset <= document.querySelectorAll('.header-1')[i].offsetTop + 980) {
                document.querySelectorAll('.header-about')[i].style.opacity = 1;
                document.querySelectorAll('.header-about')[i].style.transform = 'translateY(0px)';
            } else {
                document.querySelectorAll('.header-about')[i].style.opacity = 0;
                document.querySelectorAll('.header-about')[i].style.transform = 'translateY(75px)';
            }
        }
    }

}else if (innerWidth >= 768 && innerWidth <= 1024){

    function shufl_header() {
        let header_img = document.querySelectorAll('.header-img');
        let header_about = document.querySelectorAll('.header-about');

        for(let ii = 0; ii < header_img.length; ii = ii + 2){
            header_img[ii].style.float = 'left';
        }
    
           for(let iii = 1; iii < header_img.length; iii = iii + 2){
               if(iii >= 0 && iii < header_about.length){
                    header_img[iii].style.float = 'right';
               }
            }
    
    }
    
    shufl_header();

}else if(innerWidth > 1024){
    function shufl_header() {
        let header_img = document.querySelectorAll('.header-img');
        let header_about = document.querySelectorAll('.header-about');

        for(let ii = 0; ii < header_img.length; ii = ii + 2){
            header_img[ii].style.float = 'left';
        }
    
           for(let iii = 1; iii < header_img.length; iii = iii + 2){
               if(iii >= 0 && iii < header_about.length){
                    header_img[iii].style.float = 'right';
                    header_about[iii].style.transform = 'translate(-132%, -46%)';
               }
            }
    
    }
    
    shufl_header();
}


let header_img = document.querySelectorAll('.header-img');
let header_p = document.querySelectorAll('.header-about p');
function shufl_img() {

    for(let i = 0; i < header_img.length; i++){
            header_img[i].style.backgroundImage = 'url(img/img' + (i + 1) + '.' + 'jpg';
    }

    header_img[13].style.backgroundImage = 'url(img/img' + 14 + '.gif';

    for(let ii = 0; ii < header_p.length; ii = ii + 2){
        header_p[ii].classList.add('be1');
    }

   for(let iii = 1; iii < header_p.length; iii = iii + 2){
            header_p[iii].classList.add('be2');
    }
}

shufl_img();
