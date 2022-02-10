import './Modal.scss';

/* Used on doc.jsx */
export function useModal(parsedHtml, e) {
  let images = parsedHtml.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    /* Assign a unique ID for each modal */
    const create_id = `docs-${Math.random().toString(36).slice(8)}`
    const imgSrc = images[i].src === images[i].parentNode.href
    const imgSrc2 = images[i].parentNode.href === undefined;
    if (imgSrc || imgSrc2) {
      // images[i].parentNode.href = "javascri";
      images[i].outerHTML = Modal(create_id, images, i);
      const parser = new DOMParser();
      parser.parseFromString(images[i].outerHTML, 'text/html');
    }
  }
}
const Modal = (create_id, images, i) => {
  return (
    `
    <a data-target=#${create_id} class="modal-link" data-toggle="modal">
      <img src=${images[i].src || null} alt=${images[i].alt || null}></img>
    </a>
    <div id=${create_id} class="modal modal-link fade" tab-index="-1" role="dialog" aria-labelledby=${images[i].alt || null} aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-close-button">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="close"
          >
            <span
              class="closed-icon"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <title class="closed-label">e-remove</title>
                <g
                  stroke-width="1"
                  fill="#212121"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                  <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
                </g>
              </svg>
            </span>
              </button>
            
            </div>
            <img src=${images[i].src || null}  alt=${images[i].alt || null}></img>
        </div>
      </div>
    </div>
    `
  )
}
