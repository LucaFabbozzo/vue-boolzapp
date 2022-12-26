
const { createApp } = Vue;

//luxon
const dt = luxon.DateTime;
const now = dt.now();
const dateNow = now.setLocale('es').toLocaleString(dt.TIME_SIMPLE);


createApp({
  data(){
    return {
      el: '#app',
      user:{
        name: 'Luca',
        avatar: '_io'
    },
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
              {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
             },
             {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
            }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
              {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                }, 
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ],
     activeContact: {}
    }
    
  },
  methods: {
    getLastMessage(contact) {
      if(contact.messages.lenght > 0) {
        return contact.messages.at(-1).message;
      }
    },
    getLastDate(contact) {
      if(contact.messages.lenght > 0) {
        return contact.messages.at(-1).date;
      }
    },
  },
  created() {
    this.activeContact = this.contacts[0];
  }
}).mount('#app');




