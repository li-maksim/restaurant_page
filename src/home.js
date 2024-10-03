import home1 from "./img/home1.jpg";
import home2 from "./img/home2.jpg";
import home3 from "./img/home3.jpeg";
import home4 from "./img/home4.jpg";

export const HomeTab = (() => {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.setAttribute('class', 'home_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = "Welcome to Bob's Burgers!";

    const homeContent = document.createElement('div');
    homeContent.setAttribute('class', 'home_content');

    const descr = document.createElement('div');
    descr.setAttribute('class', 'text');
    descr.setAttribute('class', 'home_descr');
    descr.textContent = "Bob's Burgers carries on the tradition of Mouthwatering Hamburgers made from Choice Beef, Ground Fresh Daily.  Other favorite menu selections include our award winning Pork Baby Back Ribs, The Mammoth Burger for hearty appetites, our Durham Ranch Bison Burger, and a variety of sandwiches and salads with homemade dressings and sauces to top everything off. Welcome!"

    const hr = document.createElement('hr');

    let homeImgs = [];
    const imgs = document.createElement('div');
    imgs.setAttribute('class', 'imgs_wrapper');
    for (let i = 0; i <= 3; i++) {
        const img = document.createElement('img');
        img.setAttribute('class', 'home_img');
        imgs.appendChild(img);
        homeImgs.push(img);
    };

    homeImgs[0].src = home1;
    homeImgs[1].src = home2;
    homeImgs[2].src = home3;
    homeImgs[3].src = home4;

    homeContent.appendChild(descr);
    homeContent.appendChild(hr);
    homeContent.appendChild(imgs);
    home.appendChild(h2);
    home.appendChild(homeContent);
    content.appendChild(home);

    return {home, h2, homeContent, descr, imgs};

});