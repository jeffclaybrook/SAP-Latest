import Home from './views/Home.js';
import Explore from './views/Explore.js';
import Radio from './views/Radio.js';
import Playlists from './views/Playlists.js';
import Albums from './views/Albums.js';
import Tracks from './views/Tracks.js';
import Videos from './views/Videos.js';
import Artists from './views/Artists.js';
import { u } from './lib.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
   const values = match.result.slice(1);
   const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

   return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
   }));
}

const navigateTo = url => {
   history.pushState(null, null, url);
   router();
}

const router = async () => {
   const routes = [
      { path: u('/'), view: Home },
      { path: u('/explore'), view: Explore },
      { path: u('/radio'), view: Radio },
      { path: u('/playlists'), view: Playlists },
      { path: u('/albums'), view: Albums },
      { path: u('/tracks'), view: Tracks },
      { path: u('/videos'), view: Videos },
      { path: u('/artists'), view: Artists }
   ];

   const potentialMatches = routes.map(route => {
      return {
         route: route,
         result: location.pathname.match(pathToRegex(route.path))
      };
   });

   let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

   if (!match) {
      match = {
         route: routes[0],
         result: [location.pathname]
      };
   };

   const view = new match.route.view(getParams(match));

   document.querySelector('#app').innerHTML = await view.getHtml();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
   document.body.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
         e.preventDefault();
         navigateTo(e.target.href);
      }
   });

   router();
})