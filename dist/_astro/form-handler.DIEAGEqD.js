function l(s,r={}){s.addEventListener("submit",async o=>{o.preventDefault();const t=s.querySelector('button[type="submit"]'),u=t?t.innerHTML:"",e=s.querySelector(".form-status-message");e&&(e.innerHTML="",e.className="form-status-message",e.style.display="none"),t&&(t.disabled=!0,t.setAttribute("aria-busy","true"),t.innerHTML=`
        <span class="btn-spinner" aria-hidden="true"></span>
        <span>Sending your enquiry...</span>
      `),r.onStart&&r.onStart();try{const n=s.action||s.getAttribute("action");if(!n)throw new Error("Form action URL is missing.");const i=await fetch(n,{method:"POST",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},body:new FormData(s)});let a={};try{a=await i.json()}catch{}if(!i.ok){const c=a?.error||a?.message||"Something went wrong while submitting your enquiry. Please try again.";throw new Error(c)}s.reset(),e&&(e.className="form-status-message status-success",e.innerHTML=`
          <div class="status-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div>
            <strong>Thank you!</strong>
            <p>Your enquiry has been received. Our team will get back to you soon.</p>
          </div>
        `,e.style.display="flex"),r.onSuccess&&r.onSuccess(a)}catch(n){console.error("Form submission failed:",n);const i=n?.message||"Something went wrong while submitting your enquiry. Please try again.";e&&(e.className="form-status-message status-error",e.innerHTML=`
          <div class="status-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <strong>Submission Notice</strong>
            <p>${i}</p>
          </div>
        `,e.style.display="flex"),r.onError&&r.onError(i)}finally{t&&(t.disabled=!1,t.removeAttribute("aria-busy"),t.innerHTML=u)}})}export{l as a};
