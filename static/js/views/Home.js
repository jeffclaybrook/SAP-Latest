import AbstractView from './AbstractView.js';

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle('Home');
   }

   async getHtml() {
      return `
         <section>
            <div class="heading">
               <h2>For You</h2>
            </div>
            <div class="featured">
               <div class="featured-card">
                  <img src="/static/images/image-25.webp" alt="Image">
                  <div class="featured-card--info">
                     <h5>Releasing...</h5>
                     <h1>Yo Gotti</h1>
                     <h4>Artist, Songwriter, Performer, Producer, Production Team, Engineer</h4>
                  </div>
               </div>
               <div class="featured-card">
                  <img src="/static/images/image-26.webp" alt="Image">
                  <div class="featured-card--info">
                     <h5>Stay Focused</h5>
                     <h1>Cover to Cover</h1>
                     <h4>Created by TIDAL</h4>
                     <span>65 Tracks</span>
                  </div>
               </div>
               <div class="featured-card">
                  <img src="/static/images/image-27.webp" alt="Image">
                  <div class="featured-card--info">
                     <h5>Only The Best</h5>
                     <h1>Hip-Hop Classics</h1>
                     <h4>Created by TIDAL</h4>
                     <span>319 Tracks</span>
                  </div>
               </div>
               <div class="featured-card">
                  <img src="/static/images/image-28.webp" alt="Image">
                  <div class="featured-card--info">
                     <h5>Daily Updated Mix</h5>
                     <h1>Welcome Mix</h1>
                     <h4>Roger Troutman, 2Pac, The Notorious B.I.G. and more</h4>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Mixes For You</h2>
               <a href="#" class="badge-btn">View All</a>
            </div>
            <div class="content">
               <div class="content-card">
                  <img src="/static/images/image-28.webp" alt="Image">
                  <h3>Welcome Mix</h3>
                  <h4>Roger Troutman, 2Pac, The Notorious B.I.G. and more</h4>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-27.webp" alt="Image">
                  <h3>My Daily Discovery</h3>
                  <h4>J. Cole, Kendrick Lamar, Migos and more</h4>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-26.webp" alt="Image">
                  <h3>My Mix 2</h3>
                  <h4>The Notorious B.I.G., 2Pac, JUNIOR M.A.F.I.A., and more</h4>
               </div>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Artists Releasing Tomorrow</h2>
               <div class="flex">
                  <button class="icon-btn"><span class="chevron-left"></span></button>
                  <button class="icon-btn"><span class="chevron-right"></span></button>
                  <a href="#" class="badge-btn">View All</a>
               </div>
            </div>
            <div class="content">
               <div class="artist-card">
                  <img src="/static/images/image-1.webp" alt="Image">
                  <h3>2 Chainz</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-2.webp" alt="Image">
                  <h3>Kendrick Lamar</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-3.webp" alt="Image">
                  <h3>The Notorious B.I.G.</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-4.webp" alt="Image">
                  <h3>Sven Helbig</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-5.webp" alt="Image">
                  <h3>Luc Beausejour</h3>
               </div>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Hits & Classics</h2>
               <div class="flex">
                  <button class="icon-btn"><span class="chevron-left"></span></button>
                  <button class="icon-btn"><span class="chevron-right"></span></button>
                  <a href="#" class="badge-btn">View All</a>
               </div>
            </div>
            <div class="content">
               <div class="content-card">
                  <img src="/static/images/image-6.webp" alt="Image">
                  <h3>Rap Hits</h3>
                  <h4>Created By TIDAL</h4>
                  <span>46 Tracks</span>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-7.webp" alt="Image">
                  <h3>Hip-Hop Classics</h3>
                  <h4>Created By TIDAL</h4>
                  <span>319 Tracks</span>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-8.webp" alt="Image">
                  <h3>R&B Classics</h3>
                  <h4>Created By TIDAL</h4>
                  <span>486 Tracks</span>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-9.webp" alt="Image">
                  <h3>Pride Anthem Classics</h3>
                  <h4>Created By TIDAL</h4>
                  <span>50 Tracks</span>
               </div>
               <div class="content-card">
                  <img src="/static/images/image-10.webp" alt="Image">
                  <h3>Soul Classics</h3>
                  <h4>Created By TIDAL</h4>
                  <span>387 Tracks</span>
               </div>
            </div>
         </section>
         <section>
            <div class="heading">
               <h2>Because You Listened to J. Cole</h2>
               <div class="flex">
                  <button class="icon-btn"><span class="chevron-left"></span></button>
                  <button class="icon-btn"><span class="chevron-right"></span></button>
                  <a href="#" class="badge-btn">View All</a>
               </div>
            </div>
            <div class="content">
               <div class="artist-card">
                  <img src="/static/images/image-1.webp" alt="Image">
                  <h3>2 Chainz</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-2.webp" alt="Image">
                  <h3>Kendrick Lamar</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-3.webp" alt="Image">
                  <h3>The Notorious B.I.G.</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-4.webp" alt="Image">
                  <h3>Sven Helbig</h3>
               </div>
               <div class="artist-card">
                  <img src="/static/images/image-5.webp" alt="Image">
                  <h3>Luc Beausejour</h3>
               </div>
            </div>
         </section>
      `;
   }
}