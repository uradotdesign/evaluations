/* settings.js */
Reveal.initialize({
	// The "normal" size of the presentation, aspect ratio will be preserved
	// when the presentation is scaled to fit different resolutions.
	width: '100%',
	height: '100%',
	margin: 0,
	padding: 0,
	
	// Bounds for smallest/largest possible scale to apply to content
	minScale: 0.2,
	maxScale: 2.0,

	// Display a presentation progress bar slide
	showSlideNumber: 'all',
	progress: false,

	// Controls
	controls: false,
	controlsTutorial: false,
	controlsLayout: 'bottom-right',

	// Use 1 based indexing for # links to match slide number (default is zero based)
	// Add current slide # to the URL hash so reloading the page/copying URL returns to same slide
	hash: true,
	hashOneBasedIndex: false,
	respondToHashChanges: true,
	jumpToSlide: true,
	history: true,
	keyboard: true,
	keyboardCondition: 'focused',

	// Disables the default reveal.js slide layout (scaling and centering)
	disableLayout: false,
	overview: true,
	center: false,

	// Plugins
    	plugins: [ RevealMarkdown, RevealHighlight, RevealZoom ],

	// The maximum number of pages a single slide can expand onto when printing to PDF, unlimited by default
	pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
	pdfSeparateFragments: true,
	pdfPageHeightOffset: -1
})

// Log current slide when it changes
Reveal.on('slidechanged', function(event) {
	console.log("Slide changed to: " + event.indexh);
})

Reveal.on('slidetransitionend', event => {
	console.log('Slide transitioned: ', event.currentSlide );
})
