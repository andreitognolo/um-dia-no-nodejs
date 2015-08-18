module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Oficina - Um dia de NodeJS",
      description: "Oficina de duração de um dia para quem quer dar os primeiros passos com NodeJS",
      date: "29 de Agosto",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "ThoughtWorks",
      address: "Av. Gov. Agamenon Magalhães, 4779, 12º andar. Empresarial Isaac Newton, Ilha do Leite",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://docs.google.com/forms/d/1thAahcMPEoRgvckP4s_sapm7Jb-YoB9pSRMhu4oCvc4/viewform"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'partners'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Café da manhã",
        time: "08h30"
      },
      {
        name: "Thiago Dantas",
        photo: "themes/yellow-swan/img/thiago_dantas.png",
        bio: "Thiago is a really passionate software developer and his jorney began in 2004 as a Linux administrator and developer passing through to J2ME, BREW, JEE, Ruby and finally Javascript server side ecosystem.",
        company: "YLD!",
        link: {
          href: "twitter.com/thiagochapa",
          text: "@thiagochapa"
        },
        presentation: {
          title: "Palestra: Introdução ao Node.js",
          description: "Breve introdução sobre os conceitos centrais do Node.js",
          time: "09h00"
        }
      },
      {
        photo: "themes/yellow-swan/img/thiago_dantas.png",
        presentation: {
          title: "Oficina NodeSchool: learnyounode",
          description: "Oficina para explorar os conceitos básicos de Node.js",
          time: "09h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        photo: "themes/yellow-swan/img/thiago_dantas.png",
        presentation: {
          title: "Explorando o hapi.js",
          description: "Oficina sobre hapi.js, um framework para construção de aplicativos e serviços",
          time: "13h00"
        }
      },
      {
        name: "Encerramento",
        time: "17h00"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "ThoughtWorks",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      {
        name: "YLD!",
        logo: "themes/yellow-swan/img/yld.png",
        url: "http://yld.io"
      },
      {
        name: "Snap CI",
        logo: "themes/yellow-swan/img/snap_ci.png",
        url: "http://snap-ci.com"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
