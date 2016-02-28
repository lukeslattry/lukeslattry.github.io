( function() {

	document.addEventListener( 'DOMContentLoaded', init, false );

	function init() {
		var content = document.querySelector( '.content' );
		window.setInterval( saveContent, 500 );

		function saveContent() {
			localStorage.setItem( 'saved', content.value );
		}
		
		if ( localStorage.getItem( 'saved' ) ) {
			content.value = localStorage.getItem( 'saved' );
		}
	}
})();