import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Playlists');
   }

   async getHtml() {
      return `
         <section>
            <h1>Playlists</h1>
            <p>You are view the Playlists page</p>
         </section>
      `;
   }
}