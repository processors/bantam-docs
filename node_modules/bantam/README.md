# Bantam

A set of single-purpose CSS classes for every functional CSS property. Absolutely zero visual styling. Reuse this framework on every website ever to build any layout and perform common functional tasks.

Intended to be used with these complementary tools:

[Bantam Reset](https://github.com/colmtuite/bantam-reset)  
[Bantam Grid](https://github.com/colmtuite/bantam-grid)  
[Bantam Utilities](https://github.com/colmtuite/bantam-utilities)  
[Bantam Theme](https://github.com/colmtuite/bantam-theme)  

## Things to note

- Zero visual style. Zilch. Nada. That's your job.
- Fully responsive, mobile-first structure.
- Simple and easy to learn naming convention.
- Built on PostCSS.
- Reusable across all projects.
- Less than 5kb when minified and gzipped.
- Browser support down to IE7.

### Naming convention

The general syntax looks like {propertyName-valueName}

    .float-left { float: left; }

When the CSS property consists of two or more words, abbreviate the words to their initials:

    .ta-center { text-align: center; }
    .lst-disc  { list-style-type: disc; }

## Getting started

The simplest and fastest way to get started is to include the minified CSS file in your project. Just add this snippet to the head of your html file:

    <link rel="stylesheet" href="https://raw.githubusercontent.com/colmtuite/bantamcss/master/css/bantam.min.css">

Install through npm to take advantage of future updates:

    npm install bantamcss

## License

MIT. You can use Bantam as you see fit.
