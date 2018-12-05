export default {
  basicColor: '#00AC5B',
  header: {
    text: '#000',
    background: '#4caf50',
    titleNavbar: {
      text: '#fff',
      background: '#00AC5B',
    },
  },
  footer: {
    text: '#fff',
    background: '#4caf50',
    griffieURL: 'https://www.rotterdam.nl/gemeenteraad/griffie/',
    municipalityURL: 'https://www.rotterdam.nl/gemeenteraad/',
  },
  agenda_item_selected_color: 'rgba(0, 172, 91, 0.65)',
  in_content_color: '#4d9851',
  color_normal: '#4d9851',
  color_darkened: '#356037',
  background_color: '#244422',
  doc_list_icon_color: '#A3D7A4',
  event_list_icon_color: '#7FC780',
  drawer: {
    linkColor: '#000',
  },
  homepage: {
    header1: 'Wat doet de raad in Gemeente Rotterdam',
    text1:
      'Als raadslid of als inwoner van Gemeente Rotterdam kunt u ons nu nog beter volgen via dit raadsinformatie portaal. Blijf op de hoogte van uw stad en de besluiten die door de raad worden genomen, Raadsinformatie Portaal Gemeente Rotterdam staat voor openheid en transparantie. Raadsdocumenten zijn nu via onze zoekmachine voor iedereen vindbaar en inzichtelijk. Momenteel kijkt u naar betáversie 2.0 van dit raadsinformatie portaal',
    picture: require('../../images/almere_landscape.jpg'),
  },
  breadcrumbs: {
    background: 'rgba(0, 172, 91, 0.3)',
  },
  secondColor: '#00AC5B',
  specialTextColor: '#00AC5B',
  darkGreyTextColor: '#4D4D4D',
  TextFieldHintStyleColor: '#00AC5B',
  contact: {
    address1: 'Coolsingel 40 Rotterdam',
    address2: null,
    address3: null,
    telephone: '(010) 267 34 00',
    email: 'info@griffie.rotterdam.nl',
    twitter: {
      name: '@rotterdam',
      link: 'https://twitter.com/rotterdam',
    },
    facebook: {
      name: 'Rotterdam',
      link: 'https://www.facebook.com/gem.Rotterdam',
    },
    instangram: {
      name: 'gemeenterotterdam',
      link: 'https://www.instagram.com/gemeenterotterdam/',
    },
    youtube: {
      name: 'Gemeente Rotterdam',
      link: 'https://www.youtube.com/user/GemeenteRotterdam',
    },
  },
  documentTypes: [
    { label: 'Agenda punten', obj: { key: 0, value: 'item_type=event', label: 'Agenda punten' } },
    { label: 'Documenten', obj: { key: 1, value: 'item_type=document', label: 'Documenten' } },
    {
      label: 'Toezeggingen',
      obj: { key: 2, value: 'item_type=commitment', label: 'Toezeggingen' },
    },
    {
      label: 'Schriftelijke vragen',
      obj: { key: 3, value: 'item_type=written_question', label: 'Schriftelijke vragen' },
    },
    { label: 'Motie', obj: { key: 4, value: 'item_type=motion', label: 'Moties' } },
  ],
  externalAboutLink: 'https://www.rotterdam.nl/gemeenteraad/ ',
  aboutContent: {
    dailyBoard: [
      { label: 'Burgermeester', value: 'J.Janssen' },
      { label: 'Griffier', value: 'K. Kleermaker' },
      { label: 'Voorzitter', value: 'R. Roderick' },
      { label: 'Wethouder Finacien', value: 'B. Brouwer' },
      { label: 'Wethouder Planologie', value: 'A. Adriaanse' },
    ],
    raad: [
      { label: 'Raadslid', value: 'J.Janssen', fractie: 'StadsBelangen' },
      { label: 'Voorzitter', value: 'K. Kleermaker', fractie: 'StadsBelangen' },
      { label: 'Wethouder Milieu', value: 'R. Roderick', fractie: 'StadsBelangen' },
      { label: 'Wethouder Finacien', value: 'B. Brouwer', fractie: 'StadsBelangen' },
      { label: 'Wethouder Planologie', value: 'A. Adriaanse', fractie: 'StadsBelangen' },
    ],
    contact: [
      { label: 'Formulier', value: 'Link', link: '#' },
      { label: 'Raadsagenda', value: 'Link', link: '#' },
      { label: 'Chat', value: 'Link', link: '#' },
      { label: 'Klachten', value: 'Link', link: '#' },
      { label: 'Suggesties', value: 'Link', link: '#' },
      { label: 'Facebook', value: 'Rotterdam', link: 'https://www.facebook.com/gem.Rotterdam' },
      { label: 'Twitter', value: '@rotterdam', link: 'https://twitter.com/rotterdam' },
      {
        label: 'Instagram',
        value: 'gemeenterotterdam',
        link: 'https://www.instagram.com/gemeenterotterdam',
      },
      {
        label: 'YouTube',
        value: 'Gemeente Rotterdam',
        link: 'https://www.youtube.com/user/GemeenteRotterdam',
      },
    ],
  },
};
