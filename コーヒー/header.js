const { createApp, defineCustomElement } = Vue

const header = defineCustomElement({
  props: {
    motivational: {
      type: String,
      required: true
    }
  },
  template: `
<header class="anchor-head">
  <img class="beans" src="./images/beans.jpeg"></img>
  <div>
    <h1 lang="ja">
      ☕コーヒー
    </h1>
    <p>
      {{ motivational }}
    </p>
  </div>
  <nav>
    <a href="./index.html">🫘 bOHNE</a>
    <a href="./cart.html">🛒 wAGEN</a>
  </nav>
</header>`,
  styles: [`
.anchor-head div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: inherit;
}

a:hover {
  color: darkorange;
}

nav, p {
  font-family: Montserrat;
  text-shadow: white 0px 0px 4px;
  font-weight: bolder;
  color: blanchedalmond;
  font-size: 28px;
}

.anchor-head {
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65vh;
}

nav {
  padding: 1em 0;
}

p {
  margin-top: 0;
}

h1 {
  font-size: 64px;
  padding: 1em 0 0;
  margin: 0;
}

.beans {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
  `]
})

customElements.define('coffee-head', header)

/* for programmatical variant, use defineComponent above
 * export const renderHeader = (props) =>
 *   createApp(header, props)
 *     .mount('#header')
 */
