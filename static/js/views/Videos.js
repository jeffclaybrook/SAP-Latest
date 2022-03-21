import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Videos');
   }

   async getHtml() {
      return `
         <section>
            <h1>Videos</h1>
            <p>You are view the Videos page</p>
         </section>
      `;
   }
}