import handlebars from 'vite-plugin-handlebars';
import { browserslistToTargets } from 'lightningcss';

export default {
  plugins: [
    handlebars({
      context: {
        title: 'Hello World!',
      },
    }),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
};
