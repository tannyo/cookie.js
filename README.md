# Manage cookies

A refactoring of code original produced by [Peter-Paul Koch](http://www.quirksmode.org/js/cookies.html) way back in 2001.

## Usage

    <script src="path/to/cookie.js"></script>

## Syntax
### cookie.get(name)
**name**
String. Name of cookie.

### cookie.set(name, value[, days[, path]])

**name**

String. Name of cookie.

**value**

String. Value of cookie.

**days**

Number. Optional. Number of days the cookie is to remain persistent. If days is not provided the cookie will stay persitent for the current browser session.

**path**

String. Optional. The domain and path of the server the cookie should be sent to. If the path is not provided the cookie object will default the path to the root of the current domain.

### cookie.remove(name)

**name**

String. Name of cookie.

## Browser Support

Tested in the latest versions of Chrome, Firefox, Safari, IE 5.5 - 11, iOS, and Android.

## Issues

Have a bug? Please create an [issue](https://github.com/tannyo/cookie.js/issues) here on GitHub!

## Contributing

Want to contribute? Great! Just fork the project, make your changes and open a [pull request](https://github.com/tannyo/cookie.js/pulls).

## Changelog
* v0.10 05 Sep 2014 TKO Created by Tanny O'Haley

## License

The MIT License (MIT)

Copyright (c) 2014 [Tanny O'Haley](http://tanny.ica.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
