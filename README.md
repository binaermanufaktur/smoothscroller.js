## smoothscroller.js

Clone smoothscroller to your project.  
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
Use smoothscroller with a URL parameter as such:  
`` http://www.yoursite.com/path/to/target?smoothScrollTarget=SampleID``