import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Albums');
   }

   async getHtml() {
      return `
         <section>
            <h1>Albums</h1>
            <p>You are view the Albums page</p>
         </section>
      `;
   }
}