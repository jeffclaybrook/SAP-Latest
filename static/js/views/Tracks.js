import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Tracks');
   }

   async getHtml() {
      return `
         <section>
            <h1>Tracks</h1>
            <p>You are view the Tracks page</p>
         </section>
      `;
   }
}