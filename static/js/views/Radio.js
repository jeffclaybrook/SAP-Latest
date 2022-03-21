import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Radio');
   }

   async getHtml() {
      return `
         <section>
            <h1>Radio</h1>
            <p>You are view the Radio page</p>
         </section>
      `;
   }
}