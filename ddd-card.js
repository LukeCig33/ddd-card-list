/**
 * Copyright 2025 LukeCig33
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
      }
      .card{
        background-color: var(--ddd-theme-default-white);
        width: 400px;
        border: 3px solid var(--ddd-theme-primary);
        padding: var(--ddd-spacing-0);
        margin: var(--ddd-spacing-2);
        overflow: hidden;
        border-radius: var(--ddd-radius-lg);
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .card-image img {
        width: 100%;
        height: auto;
        display: block;
      }
      .card-title{
        width: 100%;
        height: 50px;
        text-align: left;
        color: var(--ddd-theme-default-nittanyNavy);
        padding: var(--ddd-spacing-2);
      }
      .card-text {
        width: 100%;
        height: auto;
        text-align: center;
        color: var(--ddd-theme-default-nittanyNavy);
        font-size: var(--ddd-font-size-s);
        overflow: hidden;
      }
      button{
        background-color: var(--ddd-theme-default-beaverBlue);
        color: var(--ddd-theme-default-white);
        text-align: center;
        display: inline-block;
        font-size: var(--ddd-font-size-4xs);
        border-radius: var(--ddd-radius-md);
        width: 85%;
        box-sizing: border-box;
      }
      button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-white);
    `];
  }

  // Lit render the HTML
  render() {
    return html`
  <div class="wrapper">
    <div class="card">
      <div class="card-image">
        <img src="${this.getAttribute('data-image') || 'https://via.placeholder.com/350x200'}" alt="${this.title}" />
      </div>
      <div class="card-title">
        <h2>${this.title}</h2>
      </div>
      <div class="card-text">
        <slot></slot> <!-- This will render the content passed inside the <ddd-card> tag -->
        <a href="${this.getAttribute('data-link') || '#'}" target="_blank" rel="noopener">
          <button id="explore">Explore ></button>
        </a>
      </div>
    </div>
  </div>`;
  }

  /**
   * haxProperties integration via file reference
   */

}

globalThis.customElements.define(DddCard.tag, DddCard);
