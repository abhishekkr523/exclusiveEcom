import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
anualData = [
  {
    "productImage": "image 46.png",
    "title": "Tom Cruise",
    "description" : "Founder & Chairman",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 51.png",
    "title": "Emma Watson",
    "description" : "Managing Director",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 47.png",
    "title": "Will Smith",
    "description" : "Product Designer",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 46.png",
    "title": "Tom Cruise",
    "description" : "Founder & Chairman",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 51.png",
    "title": "Emma Watson",
    "description" : "Managing Director",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 47.png",
    "title": "Will Smith",
    "description" : "Product Designer",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 46.png",
    "title": "Tom Cruise",
    "description" : "Founder & Chairman",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 51.png",
    "title": "Emma Watson",
    "description" : "Managing Director",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 47.png",
    "title": "Will Smith",
    "description" : "Product Designer",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 46.png",
    "title": "Tom Cruise",
    "description" : "Founder & Chairman",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 51.png",
    "title": "Emma Watson",
    "description" : "Managing Director",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 47.png",
    "title": "Will Smith",
    "description" : "Product Designer",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 46.png",
    "title": "Tom Cruise",
    "description" : "Founder & Chairman",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 51.png",
    "title": "Emma Watson",
    "description" : "Managing Director",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
  {
    "productImage": "image 47.png",
    "title": "Will Smith",
    "description" : "Product Designer",
    "twiter" : "t",
    "instagram" : "i",
    "linkedin" : "l"
  },
];

anualDataCustomOptions = {
  loop: false,
  // mouseDrag: true,
  // touchDrag: true,
  // pullDrag: true,
  dots: true,
  // navSpeed: 700,
  autoplay: false,    // Enable autoplay
  // autoplayTimeout: 3000,  // Time between automatic slides
  // autoplayHoverPause: true,  // Pause autoplay on hover
  // autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    // 1478: {
    //   items: 5
    // }
  },
  nav: true,
};

}
