import{S as f,i as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com/api/",o="43235509-ebd3145eb150405846e36d932",n=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${n}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function h(i){const r=document.querySelector(".gallery");r.innerHTML="";const o=i.map(({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:c,comments:l,downloads:u})=>`<li class="card-item">
    <a href=${t}
      ><img src=${e} alt="${s}" height="200"/>
      <ul class="card-info">
        <li>
          Likes
          <p>${a}</p>
        </li>
        <li>
          Views
          <p>${c}</p>
        </li>
        <li>
          Comments
          <p>${l}</p>
        </li>
        <li>
          Downloads
          <p>${u}</p>
        </li>
      </ul></a
    >
  </li>`).join("");r.insertAdjacentHTML("beforeend",o);const n={captionsData:"alt",captionDelay:250};new f(".gallery a",n),r.on("show.simplelightbox")}const d=document.querySelector(".search-form"),y=document.querySelector(".search-images");d.addEventListener("submit",function(i){i.preventDefault();const r=y.value.trim();if(r===""){alert("Please enter a search term!");return}p(r).then(o=>{o.hits.length===0&&m.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h(o.hits)}).catch(o=>{throw console.error("Error fetching images:",o),o})});
//# sourceMappingURL=commonHelpers.js.map
