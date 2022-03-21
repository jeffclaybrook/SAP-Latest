import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Explore');
   }

   async getHtml() {
      return `
         <section>
            <div class="heading">
               <h2>Featured</h2>
               <div class="flex">
                  <button class="icon-btn"><span class="chevron-left"></span></button>
                  <button class="icon-btn"><span class="chevron-right"></span></button>
               </div>
            </div>
            <div class="explore-featured">
               <div class="explore-featured--card">
                  <img src="./images/image-29.webp" alt="Image">
                  <h5>Listen</h5>
                  <h1>#LoveTIDAL</h1>
                  <h4>Celebrate Valentine's Day 2022</h4>
               </div>
               <div class="explore-featured--card">
                  <img src="./images/image-30.webp" alt="Image">
                  <h5>Celebrate</h5>
                  <h1>Interscope Records</h1>
                  <h4>Celebrate Interscope's legacy</h4>
               </div>
               <div class="explore-featured--card">
                  <img src="./images/image-31.webp" alt="Image">
                  <h5>Read</h5>
                  <h1>Betty Davis: "Fire & Fierceness</h1>
                  <h4>By Cindy Blackman Santana</h4>
               </div>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Genres</h2>
               <a href="#" class="badge-btn">View As List</a>
            </div>
            <div class="chips">
               <a href="#" class="chip">Decades</a>
               <a href="#" class="chip">R&B / Soul</a>
               <a href="#" class="chip">Rock / Indie</a>
               <a href="#" class="chip">Classical</a>
               <a href="#" class="chip">Latin</a>
               <a href="#" class="chip">Electronic</a>
               <a href="#" class="chip">Gospel / Christian</a>
               <a href="#" class="chip">Hip-Hop</a>
               <a href="#" class="chip">Pop</a>
               <a href="#" class="chip">Jazz</a>
               <a href="#" class="chip">Reggae / Dancehall</a>
               <a href="#" class="chip">Dance</a>
               <a href="#" class="chip">K-Pop</a>
               <a href="#" class="chip">Africa</a>
               <a href="#" class="chip">Metal</a>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Moods, Activities, & Events</h2>
            </div>
            <div class="chips">
               <a href="#" class="chip">Romance</a>
               <a href="#" class="chip">Winter</a>
               <a href="#" class="chip">Wellness</a>
               <a href="#" class="chip">Focus</a>
               <a href="#" class="chip">Live</a>
               <a href="#" class="chip">Verzuz TV</a>
               <a href="#" class="chip">Sound Booth</a>
               <a href="#" class="chip">Party</a>
               <a href="#" class="chip">Black History</a>
               <a href="#" class="chip">Workout</a>
               <a href="#" class="chip">Relax</a>
               <a href="#" class="chip">For DJs</a>
               <a href="#" class="chip">Wedding</a>
               <a href="#" class="chip">HBCU</a>
               <a href="#" class="chip">Pride</a>
               <a href="#" class="chip">Credits</a>
            </div>
         </section>
      `;
   }
}