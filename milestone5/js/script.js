// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

const { createApp } = Vue;

//luxon
const dt = luxon.DateTime;
const now = dt.now();
const dateNow = now.setLocale('es').toLocaleString(dt.TIME_SIMPLE);


createApp({
  data(){
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: false,
          messages: [
            {
              date: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: false,
          messages: [
            {
              date: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: false,
          messages: [
            {
              date: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: false,
          messages: [
            {
              date: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: false,
          messages: [
            {
              date: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: false,
          messages: [
            { 
              date: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: false,
          messages: [
            {
              date: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '15:51',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '15:51',
              message: 'OK!!',
              status: 'received'
            }
          ]
        }
      ],
      userActive: 0,
      statusReceived: true,
      newMessage: '',
      newSearch: ''
    }
  },
  methods: {
    addNewMessage() {
      const msg = {
        date: dateNow,
        message: this.newMessage,
        status: 'sent'
      }
      this.contacts[this.userActive].messages.push(msg);
      this.newMessage = '';
      this.startClock();
    },
    getResponse() {
          const rsp = {
          date: dateNow,
          message: 'ok',
          status: 'received'
          }
        this.contacts[this.userActive].messages.push(rsp);
      },
      startClock(){
        setTimeout(() => {
          this.getResponse()
      }, 1000)
      }
     },  
    mounted(){
      console.log('montata')
    }
  
}).mount('#app')




