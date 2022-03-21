import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Artists');
   }

   async getHtml() {
      return `
         <section>
            <h1>Artists</h1>
            <p>You are view the Artists page</p>
         </section>
      `;
   }
}