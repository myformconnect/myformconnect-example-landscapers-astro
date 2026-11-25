/**
 * MyFormConnect Client Submission Handler
 * Complies with the 6 Golden Rules of MyFormConnect:
 * 1. Always use new FormData(formElement). Never JSON.stringify().
 * 2. Never manually set Content-Type (browser sets multipart boundary).
 * 3. Always include Accept: application/json and X-Requested-With: XMLHttpRequest.
 * 4. Ensures all inputs serialize with name attributes.
 * 5. Calls event.preventDefault().
 * 6. Honeypot spam defense (_gotcha).
 */

export interface FormHandlerOptions {
  onStart?: () => void;
  onSuccess?: (data?: any) => void;
  onError?: (errorMessage: string) => void;
}

export function attachAjaxFormHandler(form: HTMLFormElement, options: FormHandlerOptions = {}) {
  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    const statusContainer = form.querySelector('.form-status-message') as HTMLElement | null;

    // Clear previous status messages
    if (statusContainer) {
      statusContainer.innerHTML = '';
      statusContainer.className = 'form-status-message';
      statusContainer.style.display = 'none';
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.innerHTML = `
        <span class="btn-spinner" aria-hidden="true"></span>
        <span>Sending your enquiry...</span>
      `;
    }

    if (options.onStart) {
      options.onStart();
    }

    try {
      const actionUrl = form.action || form.getAttribute('action');
      if (!actionUrl) {
        throw new Error('Form action URL is missing.');
      }

      // Mandatory fetch structure per MyFormConnect specification
      const response = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(form),
      });

      let responseData: any = {};
      try {
        responseData = await response.json();
      } catch {
        // Response might not be JSON, but status check takes precedence
      }

      if (!response.ok) {
        const errorMsg = responseData?.error || responseData?.message ||
          'Something went wrong while submitting your enquiry. Please try again.';
        throw new Error(errorMsg);
      }

      // Success state
      form.reset();

      if (statusContainer) {
        statusContainer.className = 'form-status-message status-success';
        statusContainer.innerHTML = `
          <div class="status-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div>
            <strong>Thank you!</strong>
            <p>Your enquiry has been received. Our team will get back to you soon.</p>
          </div>
        `;
        statusContainer.style.display = 'flex';
      }

      if (options.onSuccess) {
        options.onSuccess(responseData);
      }
    } catch (err: any) {
      console.error('Form submission failed:', err);
      const message = err?.message || 'Something went wrong while submitting your enquiry. Please try again.';

      if (statusContainer) {
        statusContainer.className = 'form-status-message status-error';
        statusContainer.innerHTML = `
          <div class="status-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <strong>Submission Notice</strong>
            <p>${message}</p>
          </div>
        `;
        statusContainer.style.display = 'flex';
      }

      if (options.onError) {
        options.onError(message);
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}
