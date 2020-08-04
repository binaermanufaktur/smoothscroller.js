## smoothscroller.js

Clone smoothscroller to your project.  
Or use npm:  
```sh
$ npm i @binaermanufaktur/smoothscroller
```
Edit the JS script you want to include smoothscroller on:

```js
// my-app.js
import {Smoothscroller} from 'path/to/smoothscroller';
const smoothscroller = new Smoothscroller();
smoothscroller.init();
```

In your HTML markup you can now use the class "smoothscroller" with "data-scroll-target" and "data-scroll-path" to enable smooth scrolling links...

```html
<a href="#" 
    class="smoothscroller" 
    data-scroll-target="sampleID" 
    data-scroll-path="/path/to/target/">sampleAnchor</a>
```


Use url parameters to deeplink with smoothscroll effect to target ID as follows:
```
www.yourdomain.com/path/to/target/?smoothScrollTarget=yourTargetID
```

