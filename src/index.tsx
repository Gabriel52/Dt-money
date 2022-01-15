import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
// ==================================================
import App from './App';
// ==================================================

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer Web site',
          amount: 10000,
          type: 'deposit',
          category: 'Developer',
          createdAt: new Date('2021-02-12 09:50:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1500,
          type: 'Withdraw',
          category: 'House',
          createdAt: new Date('2022-01-15 12:50:00')
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('transactions', ()=> {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request)=> {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);